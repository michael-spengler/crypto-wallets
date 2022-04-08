import { IWalletInfo } from "./wallet-info-interface.ts"
import { IWallet } from "./wallet-interface.ts";

export class EthereumWallet implements IWallet {

    private privateKey: string
    private publicKey: string

    public static getInstance(): IWallet {
        return new EthereumWallet()
    }

    public constructor() {
        this.privateKey = "tbd"
        this.publicKey = "tbd"
    }

    public getWalletInfo(): IWalletInfo {
        return {
            privateKey: this.privateKey,
            publicKey: this.publicKey
        }
    }

}