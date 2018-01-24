import Dexie from 'dexie';
import IMoeda from './CollectionsInterfaces/IMoeda';
import IPreco from './CollectionsInterfaces/IPreco';

class CointickerDB extends Dexie {
    moedas: Dexie.Table<IMoeda, number>;
    precos: Dexie.Table<IPreco, number>;

    constructor() {
        super("CointickerDB");

        this.version(1).stores({
            moedas: 'symbol',
            precos: ',moeda'
        });
    }
}
