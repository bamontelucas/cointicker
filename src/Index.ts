import Foxbit from './Foxbit';
import Bitgrail, {BitgrailResponse} from './Bitgrail';
import Binance from './Binance';
import Ticker from './Ticker';

const logDiv: HTMLDivElement = document.querySelector('#log');
const tickerBody: HTMLElement = document.querySelector('#ticker tbody');

function log(toLog: any) {
    console.log(toLog);
    logDiv.textContent += String.fromCharCode(10) + (typeof toLog === 'string' ? toLog : JSON.stringify(toLog));
}

function addTicker(t:Ticker) {
    tickerBody.insertAdjacentHTML('beforeend', t.toString());
}

(async () => {
    try {
        let responses = await Binance.busca();
        responses.forEach(r => addTicker(Binance.ticker(r)));
    } catch (ex) {
        log(`Ocorreu um erro ao realizar a busca no Binance: ${ex}`)
    }
    
})();

(async () => {
    try {
        let response = await Bitgrail.busca();
        addTicker(Bitgrail.ticker(response));
    } catch (ex) {
        log(`Ocorreu um erro ao realizar a busca na Bitgrail: ${ex}`)
    }
})();

(async () => {
    try {
        let response = await Foxbit.busca();
        addTicker(Foxbit.ticker(response));
    } catch (ex) {
        log(`Ocorreu um erro ao realizar a busca na Foxbit: ${ex}`)
    }
})();
