import IExchange from './IExchange';

export default interface IMoeda {
    symbol: string;
    description: string;
    moeda: IExchange;
}