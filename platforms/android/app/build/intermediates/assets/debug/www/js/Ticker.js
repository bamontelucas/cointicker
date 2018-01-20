"use strict";
exports.__esModule = true;
var Ticker = (function () {
    function Ticker(coinName, last, low, high) {
        var _this = this;
        this.toString = function () {
            return "\n        <tr>\n            <td>" + _this.coinName + "</td>\n            <td>" + _this.last + "</td>\n            <td>" + _this.low + "</td>\n            <td>" + _this.high + "</td>\n        </tr>";
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