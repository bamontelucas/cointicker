import Ticker from "./Ticker";

class BinanceSymbol {
    symbol: string;
    description: string;

    constructor(s: string, d?:string) {
        this.symbol = s;
        this.description = d || s;
    }
}

const SYMBOLS: BinanceSymbol[] = [
    new BinanceSymbol('IOTABTC', 'IOTA'),
    new BinanceSymbol('XLMBTC', 'Stellar'),
    new BinanceSymbol('FUNBTC', 'Fun'),
    new BinanceSymbol('TRXBTC', 'Tron'),
    new BinanceSymbol('BTCUSDT', 'Bitcoin (US$)')
];

const BASE_URL: string = 'https://api.binance.com/api/v1/ticker/24hr';

export default class Binance {
    symbol: BinanceSymbol;
    constructor (symbol: BinanceSymbol) {
        this.symbol = symbol;
    }
    url() {
        return `${BASE_URL}?symbol=${this.symbol.symbol}`;
    }

    busca() {
        return fetch(this.url());
    }

    static async busca() {       
        let requests = SYMBOLS.map(symbol => (new Binance(symbol)).busca());
        let responses = await Promise.all(requests);
        let jsonsPromises = responses.map(r => r.json());
        let jsons = await Promise.all(jsonsPromises);
        return <BinanceResponse[]>jsons;
    }

    static ticker(res: BinanceResponse) {
        let s = SYMBOLS.filter(s => s.symbol === res.symbol);
        let symbolName = s.length === 0 ? res.symbol : s[0].description;
        return new Ticker(symbolName, res.lastPrice, res.lowPrice, res.highPrice);
    }
}

export class BinanceResponse {    
    symbol: string;
    priceChange: number;
    priceChangePercent: number;
    weightedAvgPrice: number;
    prevClosePrice: number;
    lastPrice: number;
    lastQty: number;
    bidPrice: number;
    bidQty: number;
    askPrice: number;
    askQty: number;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    volume: number;
    quoteVolume: number;
    openTime: number;
    closeTime: number;
    firstId: number;
    lastId: number;
    count: number;
}