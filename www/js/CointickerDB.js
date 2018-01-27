"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var dexie_1 = require("dexie");
var CointickerDB = (function (_super) {
    __extends(CointickerDB, _super);
    function CointickerDB() {
        var _this = _super.call(this, "CointickerDB") || this;
        _this.version(1).stores({
            exchanges: 'nome',
            moedas: 'codigo',
            radar: ',moeda,exchange,moedapreco,symbol',
            historico: ',moeda,exchange,moedapreco,symbol,data',
            carteira: ',moeda,exchange'
        });
        return _this;
    }
    return CointickerDB;
}(dexie_1["default"]));
//# sourceMappingURL=CointickerDB.js.map