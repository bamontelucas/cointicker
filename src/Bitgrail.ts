import Ticker from './Ticker';

const URL: string = 'https://api.bitgrail.com/v1/BTC-XRB/ticker';

export default class Bitgrail {
    static async busca() {
        try {
            let req = await fetch(URL);
            if(req.ok) {
                let res = await req.json();
                return <BitgrailResponse> res.response;
            } else {
                throw await req.text();
            }
        } catch (ex) {
            throw ex;
        }        
    } 
    static ticker(res: BitgrailResponse) {
        return new Ticker('RaiBlocks', res.last, res.low, res.high);
    }
}

export class BitgrailResponse {
    last: number;
    high: number;
    low: number;
    volume: number;
    coinVolume: number;
    bid: number;
    ask: number;
}