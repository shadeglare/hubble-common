import BN from 'bn.js';
import Decimal from 'decimal.js';
import { MathUtil, Q64 } from '@raydium-io/raydium-sdk';
import { PersonalPositionState, PoolState, RewardInfo, TickState } from '../raydium_client';

export function priceToTickIndexWithRounding(price: number): number {
  let tickIndex = new Decimal(Math.log(Math.sqrt(price)))
    .div(new Decimal(Math.log(Math.sqrt(1.0001))))
    .round()
    .toNumber();

  return tickIndex;
}

// Original code: 
// https://github.com/raydium-io/raydium-sdk/blob/077049adec6d8fdda12fb74162504b27af7ff92e/src/ammV3/utils/position.ts#L55
function getFeesGrowthInside(
  poolState: PoolState,
  tickLowerState: TickState,
  tickUpperState: TickState
) {
  let feeGrowthBelow0X64 = new BN(0);
  let feeGrowthBelow1X64 = new BN(0);
  if (poolState.tickCurrent >= tickLowerState.tick) {
    feeGrowthBelow0X64 = tickLowerState.feeGrowthOutside0X64;
    feeGrowthBelow1X64 = tickLowerState.feeGrowthOutside1X64;
  } else {
    feeGrowthBelow0X64 = poolState.feeGrowthGlobal0X64.sub(
      tickLowerState.feeGrowthOutside0X64
    );
    feeGrowthBelow1X64 = poolState.feeGrowthGlobal1X64.sub(
      tickLowerState.feeGrowthOutside1X64
    );
  }

  let feeGrowthAbove0X64 = new BN(0);
  let feeGrowthAbove1X64 = new BN(0);
  if (poolState.tickCurrent < tickUpperState.tick) {
    feeGrowthAbove0X64 = tickUpperState.feeGrowthOutside0X64;
    feeGrowthAbove1X64 = tickUpperState.feeGrowthOutside1X64;
  } else {
    feeGrowthAbove0X64 = poolState.feeGrowthGlobal0X64.sub(
      tickUpperState.feeGrowthOutside0X64
    );
    feeGrowthAbove1X64 = poolState.feeGrowthGlobal1X64.sub(
      tickUpperState.feeGrowthOutside1X64
    );
  }

  const feeGrowthInside0X64 = MathUtil.wrappingSubU128(
    MathUtil.wrappingSubU128(poolState.feeGrowthGlobal0X64, feeGrowthBelow0X64),
    feeGrowthAbove0X64
  );
  const feeGrowthInside1X64 = MathUtil.wrappingSubU128(
    MathUtil.wrappingSubU128(poolState.feeGrowthGlobal1X64, feeGrowthBelow1X64),
    feeGrowthAbove1X64
  );

  return { feeGrowthInside0X64, feeGrowthInside1X64 };
}

// Original code: 
// https://github.com/raydium-io/raydium-sdk/blob/077049adec6d8fdda12fb74162504b27af7ff92e/src/ammV3/utils/position.ts#L55
export function getPositionFees(
  poolState: PoolState,
  positionState: PersonalPositionState,
  tickLowerState: TickState,
  tickUpperState: TickState
) {
  const { feeGrowthInside0X64, feeGrowthInside1X64 } = getFeesGrowthInside(
    poolState,
    tickLowerState,
    tickUpperState
  );

  const feeGrowthDelta0 = MathUtil.mulDivFloor(
    MathUtil.wrappingSubU128(
      feeGrowthInside0X64,
      positionState.feeGrowthInside0LastX64
    ),
    positionState.liquidity,
    Q64
  );
  const tokenFeeAmount0 = positionState.tokenFeesOwed0.add(feeGrowthDelta0);

  const feeGrowthDelta1 = MathUtil.mulDivFloor(
    MathUtil.wrappingSubU128(
      feeGrowthInside1X64,
      positionState.feeGrowthInside1LastX64
    ),
    positionState.liquidity,
    Q64
  );
  const tokenFeeAmount1 = positionState.tokenFeesOwed1.add(feeGrowthDelta1);

  return { tokenFeeAmount0, tokenFeeAmount1 };
}

// Original code: 
// https://github.com/raydium-io/raydium-sdk/blob/077049adec6d8fdda12fb74162504b27af7ff92e/src/ammV3/utils/position.ts#L123
function getRewardGrowthInside(
  tickCurrentIndex: number,
  tickLowerState: TickState,
  tickUpperState: TickState,
  rewardInfos: RewardInfo[],
): BN[] {
  const rewardGrowthsInside: BN[] = [];
  for (let i = 0; i < rewardInfos.length; i++) {
    let rewardGrowthsBelow = new BN(0);
    if (tickLowerState.liquidityGross.eqn(0)) {
      rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64;
    } else if (tickCurrentIndex < tickLowerState.tick) {
      rewardGrowthsBelow = rewardInfos[i].rewardGrowthGlobalX64.sub(
        tickLowerState.rewardGrowthsOutsideX64[i]
      );
    } else {
      rewardGrowthsBelow = tickLowerState.rewardGrowthsOutsideX64[i];
    }

    let rewardGrowthsAbove = new BN(0);
    if (tickUpperState.liquidityGross.eqn(0)) {
      //
    } else if (tickCurrentIndex < tickUpperState.tick) {
      rewardGrowthsAbove = tickUpperState.rewardGrowthsOutsideX64[i];
    } else {
      rewardGrowthsAbove = rewardInfos[i].rewardGrowthGlobalX64.sub(
        tickUpperState.rewardGrowthsOutsideX64[i]
      );
    }

    rewardGrowthsInside.push(
      MathUtil.wrappingSubU128(
        MathUtil.wrappingSubU128(
          rewardInfos[i].rewardGrowthGlobalX64,
          rewardGrowthsBelow
        ),
        rewardGrowthsAbove
      )
    );
  }

  return rewardGrowthsInside;
}

// Original code: 
// https://github.com/raydium-io/raydium-sdk/blob/077049adec6d8fdda12fb74162504b27af7ff92e/src/ammV3/utils/position.ts#L90
export function getPositionRewards(
  poolState: PoolState,
  positionState: PersonalPositionState,
  tickLowerState: TickState,
  tickUpperState: TickState
): BN[] {
  const rewards: BN[] = [];

  const rewardGrowthsInside = getRewardGrowthInside(
    poolState.tickCurrent,
    tickLowerState,
    tickUpperState,
    poolState.rewardInfos
  );
  for (let i = 0; i < rewardGrowthsInside.length; i++) {
    const rewardGrowthInside = rewardGrowthsInside[i];
    const currRewardInfo = positionState.rewardInfos[i];

    const rewardGrowthDelta = MathUtil.wrappingSubU128(
      rewardGrowthInside,
      currRewardInfo.growthInsideLastX64
    );
    const amountOwedDelta = MathUtil.mulDivFloor(
      rewardGrowthDelta,
      positionState.liquidity,
      Q64
    );
    const rewardAmountOwed = currRewardInfo.rewardAmountOwed.add(amountOwedDelta);
    rewards.push(rewardAmountOwed);
  }
  return rewards;
}