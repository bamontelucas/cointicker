import Foxbit from './Foxbit';
import Bitgrail, {BitgrailResponse} from './Bitgrail';
import Binance from './Binance';
import Ticker from './Ticker';

const logContainer: HTMLDivElement = document.querySelector('#log');
const logList: HTMLUListElement = logContainer.querySelector('ul');
const tickerBody: HTMLElement = document.querySelector('#ticker');

function log(toLog: any) {
    console.warn(toLog);
    console.log(logContainer);
    logContainer.style.display = 'block';
    logList.insertAdjacentHTML('beforeend', `<li>${typeof toLog === 'string' ? toLog : JSON.stringify(toLog)}</li>`);
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
