export interface IBitcoinWallet {
    publicKey: string
    privateKey: string
}
export class BitcoinWallet {

    public generateWallet(): IBitcoinWallet {

        return {
            publicKey: "tbd",
            privateKey: "tbd",
        }

    }

}