import { IWalletInfo } from "./wallet-info-interface.ts";

export interface IWallet {
    getWalletInfo(): IWalletInfo
}