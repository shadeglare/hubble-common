export interface StrategyEntity {
  id: number;
  token_a_id: number;
  token_b_id: number;
  pubkey: string;
  cluster_id: number;
}

export default StrategyEntity;
