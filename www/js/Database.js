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
var Database = (function (_super) {
    __extends(Database, _super);
    function Database() {
        var _this = _super.call(this, "Cointicker DB") || this;
        _this.version(1).stores({
            moedas: 'symbol'
        });
        return _this;
    }
    return Database;
}(dexie_1["default"]));
//# sourceMappingURL=Database.js.map