import Dexie from 'dexie';
import IExchange from './CollectionsInterfaces/IExchange';
import IMoeda from './CollectionsInterfaces/IMoeda';
import IRadar from './CollectionsInterfaces/IRadar';
import ICarteira from './CollectionsInterfaces/ICarteira';
import IHistorico from './CollectionsInterfaces/IHistorico';

class CointickerDB extends Dexie {
    exchanges: Dexie.Table<IExchange, number>;
    moedas: Dexie.Table<IMoeda, number>;
    radar: Dexie.Table<IRadar, number>;
    historico: Dexie.Table<ICarteira, number>;
    carteira: Dexie.Table<IHistorico, number>;

    constructor() {
        super("CointickerDB");

        this.version(1).stores({
            exchanges: 'nome',
            moedas: 'codigo',
            radar: ',moeda,exchange,moedapreco,symbol',
            historico: ',moeda,exchange,moedapreco,symbol,data',
            carteira: ',moeda,exchange'
        });
    }
}
