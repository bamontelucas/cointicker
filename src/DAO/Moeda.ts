import Exchange, {IExchange} from './Exchange';

export default class Moeda implements IMoeda {
    symbol: string;
    description: string;
    moeda: Exchange;
}

export interface IMoeda {
    symbol: string;
    description: string;
    moeda: IExchange;
}