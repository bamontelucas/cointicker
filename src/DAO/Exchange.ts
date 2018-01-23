export interface IExchange {
    id?: number;
    name: string;
}

export default class Exchange implements IExchange{
    id: number;
    name: string;
}