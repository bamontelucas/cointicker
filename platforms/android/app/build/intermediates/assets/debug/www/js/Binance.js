"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Ticker_1 = require("./Ticker");
var BinanceSymbol = (function () {
    function BinanceSymbol(s, d) {
        this.symbol = s;
        this.description = d || s;
    }
    return BinanceSymbol;
}());
var SYMBOLS = [
    new BinanceSymbol('IOTABTC', 'IOTA'),
    new BinanceSymbol('XLMBTC', 'Stellar'),
    new BinanceSymbol('FUNBTC', 'Fun'),
    new BinanceSymbol('TRXBTC', 'Tron'),
    new BinanceSymbol('BTCUSDT', 'Bitcoin (US$)')
];
var BASE_URL = 'https://api.binance.com/api/v1/ticker/24hr';
var Binance = (function () {
    function Binance(symbol) {
        this.symbol = symbol;
    }
    Binance.prototype.url = function () {
        return BASE_URL + "?symbol=" + this.symbol.symbol;
    };
    Binance.prototype.busca = function () {
        return fetch(this.url());
    };
    Binance.busca = function () {
        return __awaiter(this, void 0, void 0, function () {
            var requests, responses, jsonsPromises, jsons;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requests = SYMBOLS.map(function (symbol) { return (new Binance(symbol)).busca(); });
                        return [4, Promise.all(requests)];
                    case 1:
                        responses = _a.sent();
                        jsonsPromises = responses.map(function (r) { return r.json(); });
                        return [4, Promise.all(jsonsPromises)];
                    case 2:
                        jsons = _a.sent();
                        return [2, jsons];
                }
            });
        });
    };
    Binance.ticker = function (res) {
        var s = SYMBOLS.filter(function (s) { return s.symbol === res.symbol; });
        var symbolName = s.length === 0 ? res.symbol : s[0].description;
        return new Ticker_1["default"](symbolName, res.lastPrice, res.lowPrice, res.highPrice);
    };
    return Binance;
}());
exports["default"] = Binance;
var BinanceResponse = (function () {
    function BinanceResponse() {
    }
    return BinanceResponse;
}());
exports.BinanceResponse = BinanceResponse;
//# sourceMappingURL=Binance.js.map