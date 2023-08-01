import { Connection, PublicKey } from '@solana/web3.js';
import { GlobalConfigMainnet, KaminoProgramIdMainnet } from './utils';
import { Kamino } from '../src';
import { WHIRLPOOL_PROGRAM_ID } from '../src/whirpools-client/programId';
import { PROGRAM_ID as RAYDIUM_PROGRAM_ID } from '../src/raydium_client/programId';

describe('Pending fees and rewards tests', () => {
  const cluster = 'mainnet-beta';
  const clusterUrl: string = 'https://rpc.hellomoon.io/9b3f86c0-d86f-4b2e-8194-0a8646fbc880';
  const connection = new Connection(clusterUrl, 'processed');
  const strategyAddress = new PublicKey('GCX7eS8fQtuLSgiASyv3FDFKGKLNs173nHdf6kXoCYhq');
  const owner = new PublicKey('CeybTm9ZU2LXF8SSeuvuv1Y6RTT47kHC9KMtN9uoCMgm');
  const kamino = new Kamino(
    cluster,
    connection,
    GlobalConfigMainnet,
    KaminoProgramIdMainnet,
    WHIRLPOOL_PROGRAM_ID,
    RAYDIUM_PROGRAM_ID
  );

  it('Get pending fees and rewards', async () => {
    const strategy = await kamino.getStrategyByAddress(strategyAddress);
    if (strategy == null) {
      throw new Error(`Could not fetch strategy for pubkey ${strategyAddress.toString()}`);
    }

    const feesAndRewards = await kamino.getPendingFeesAndRewards(strategy);
    if (feesAndRewards == null) {
      throw new Error(`Could not fetch fees and rewards for position ${strategy.position.toString()}`);
    }

    console.log(feesAndRewards);
  });

  it('Get pending fees and rewards by owner', async () => {
    const strategy = await kamino.getStrategyByAddress(strategyAddress);
    if (strategy == null) {
      throw new Error(`Could not fetch strategy for pubkey ${strategyAddress.toString()}`);
    }

    const feesAndRewards = await kamino.getPendingFeesAndRewardsByOwner(strategy, owner);
    if (feesAndRewards == null) {
      throw new Error(`Could not fetch fees and rewards for position ${strategy.position.toString()}`);
    }

    console.log(feesAndRewards);
  });
});
