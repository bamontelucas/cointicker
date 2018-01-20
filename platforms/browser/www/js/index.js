"use strict";
exports.__esModule = true;
var Foxbit_1 = require("./Foxbit");
var logDiv = document.querySelector('#log');
function log(toLog) {
    console.log(toLog);
    logDiv.textContent += String.fromCharCode(10) + (typeof toLog === 'string' ? toLog : JSON.stringify(toLog));
}
Foxbit_1["default"].busca().then(log, log);
//# sourceMappingURL=Index.js.map