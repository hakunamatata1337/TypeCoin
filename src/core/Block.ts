import CryptoJS from "crypto-js";
import { TransactionData } from "./Transaction";

interface BlockData {
  timestamp: number;
  transactions: TransactionData[];
  prevHash: string;
  hash: string;
  nonce: number;
}

export class Block implements BlockData {
  constructor(
    public timestamp: number,
    public transactions: TransactionData[],
    public prevHash: string,
    public hash: string,
    public nonce: number
  ) {}

  generateHash() {}
}
