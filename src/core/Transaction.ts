//Account should have nonce, and accounts should be stored
export interface TransactionData {
  from: string;
  to: string;
  amount: number;
  signature: string;
}
