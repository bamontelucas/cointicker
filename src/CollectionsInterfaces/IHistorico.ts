import IRadar from './IRadar';

export default interface IHistorico extends IRadar {
    preco: number;
    data: Date;
}