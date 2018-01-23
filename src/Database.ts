import Dexie from 'dexie';
import Moeda, {IMoeda} from './DAO/Moeda';

class Database extends Dexie {
    moedas: Dexie.Table<IMoeda, number>;

    constructor() {
        super("Cointicker DB");

        this.version(1).stores({
            moedas: 'symbol'
        });
    }
}
