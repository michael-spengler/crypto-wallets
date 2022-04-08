export interface IEthereumWallet {
    publicKey: string
    privateKey: string
}
export class EthereumWallet {

    public generateWallet(): IEthereumWallet {

        return {
            publicKey: "tbd",
            privateKey: "tbd",
        }

    }

}