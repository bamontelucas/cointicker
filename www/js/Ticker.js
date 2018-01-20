"use strict";
exports.__esModule = true;
var Ticker = (function () {
    function Ticker(coinName, last, low, high) {
        var _this = this;
        this.toString = function () {
            return "\n        <div class=\"card\">\n            <div class=\"card-header\">\n                " + _this.coinName + "\n            </div>\n            <div class=\"card-body\">\n                <dl class=\"row\">\n                    <dt class=\"col-6\">\u00DAltimo valor</dt>\n                    <dd class=\"col-6\">" + _this.last + "</dd>\n                    <dt class=\"col-6\">Baixa (24h)</dt>\n                    <dd class=\"col-6\">" + _this.low + "</dd>\n                    <dt class=\"col-6\">Alta (24h)</dt>\n                    <dd class=\"col-6\">" + _this.high + "</dd>\n                </dl>\n            </div>\n        </div>        \n        ";
        };
        this.coinName = coinName;
        this.last = last;
        this.low = low || 0;
        this.high = high || 0;
    }
    return Ticker;
}());
exports["default"] = Ticker;
//# sourceMappingURL=Ticker.js.map