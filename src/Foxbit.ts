import Ticker from "./Ticker";

const URL: string = 'https://api.blinktrade.com/api/v1/BRL/ticker';

export default class Foxbit {
    static async busca() {
        try {
            let req = await fetch(URL);
            if(req.ok) {
                let res = await req.json();
                return <FoxbitResponse> res;
            } else {
                throw await req.text();
            }
        } catch (ex) {
            throw ex;
        }        
    } 
    static ticker(res: FoxbitResponse) {
        return new Ticker('Bitcoin (R$)', res.last, res.low, res.high);
    }
}

export class FoxbitResponse {    
    high: number;
    vol: number;
    buy: number;
    last: number;
    low: number;
    pair: string;
    sell: number;
    vol_brl: number;
}