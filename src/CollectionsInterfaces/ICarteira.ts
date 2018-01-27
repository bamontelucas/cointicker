export default interface ICarteira {
    moeda: string;
    exchange: string;
    quantidade: number;
    preco: number;
    dataCompra: Date;
    dataVenda: Date;
}