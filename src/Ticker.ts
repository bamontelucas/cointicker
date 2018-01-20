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
        <div class="card">
            <div class="card-header">
                ${this.coinName}
            </div>
            <div class="card-body">
                <dl class="row">
                    <dt class="col-6">Último valor</dt>
                    <dd class="col-6">${this.last}</dd>
                    <dt class="col-6">Baixa (24h)</dt>
                    <dd class="col-6">${this.low}</dd>
                    <dt class="col-6">Alta (24h)</dt>
                    <dd class="col-6">${this.high}</dd>
                </dl>
            </div>
        </div>        
        `;
    }
}