export default class Ticker {
    coinName: string;
    last: number;
    low: number;
    high: number;

    constructor(coinName:string, last: number, low?: number, high?:number) {
        this.coinName = coinName;
        this.last = last;
        this.low = low || 0;
        this.high = high || 0;
    }

    public toString = () : string => {
        return `
        <tr>
            <td>${this.coinName}</td>
            <td>${this.last}</td>
            <td>${this.low}</td>
            <td>${this.high}</td>
        </tr>`;
    }
}