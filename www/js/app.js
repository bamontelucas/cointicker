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
define("Request", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.DEFAULT_REQUEST_OPTIONS = {
        ignoreCache: false,
        headers: {
            Accept: 'application/json, text/javascript, text/plain'
        },
        timeout: 5000
    };
    function queryParams(params) {
        if (params === void 0) { params = {}; }
        return Object.keys(params)
            .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
            .join('&');
    }
    function withQuery(url, params) {
        if (params === void 0) { params = {}; }
        var queryString = queryParams(params);
        return queryString ? url + (url.indexOf('?') === -1 ? '?' : '&') + queryString : url;
    }
    function parseXHRResult(xhr) {
        return {
            ok: xhr.status >= 200 && xhr.status < 300,
            status: xhr.status,
            statusText: xhr.statusText,
            headers: xhr.getAllResponseHeaders(),
            data: xhr.responseText,
            json: function () { return JSON.parse(xhr.responseText); }
        };
    }
    function errorResponse(xhr, message) {
        if (message === void 0) { message = null; }
        return {
            ok: false,
            status: xhr.status,
            statusText: xhr.statusText,
            headers: xhr.getAllResponseHeaders(),
            data: message || xhr.statusText,
            json: function () { return JSON.parse(message || xhr.statusText); }
        };
    }
    function request(method, url, queryParams, body, options) {
        if (queryParams === void 0) { queryParams = {}; }
        if (body === void 0) { body = null; }
        if (options === void 0) { options = exports.DEFAULT_REQUEST_OPTIONS; }
        var ignoreCache = options.ignoreCache || exports.DEFAULT_REQUEST_OPTIONS.ignoreCache;
        var headers = options.headers || exports.DEFAULT_REQUEST_OPTIONS.headers;
        var timeout = options.timeout || exports.DEFAULT_REQUEST_OPTIONS.timeout;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, withQuery(url, queryParams));
            if (headers) {
                Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
            }
            if (ignoreCache) {
                xhr.setRequestHeader('Cache-Control', 'no-cache');
            }
            xhr.timeout = timeout;
            xhr.onload = function (evt) {
                resolve(parseXHRResult(xhr));
            };
            xhr.onerror = function (evt) {
                resolve(errorResponse(xhr, 'Failed to make request.'));
            };
            xhr.ontimeout = function (evt) {
                resolve(errorResponse(xhr, 'Request took longer than expected.'));
            };
            if (method === 'post' && body) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(body));
            }
            else {
                xhr.send();
            }
        });
    }
    exports.request = request;
});
define("Foxbit", ["require", "exports", "Request"], function (require, exports, Request_1) {
    "use strict";
    exports.__esModule = true;
    var Foxbit = (function () {
        function Foxbit() {
        }
        Foxbit.busca = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, Request_1.request('get', Foxbit.url, {}, null, { ignoreCache: true }).then(function (res) { return res.json(); })];
                });
            });
        };
        Foxbit.url = 'https://api.blinktrade.com/api/v1/BRL/ticker';
        return Foxbit;
    }());
    exports["default"] = Foxbit;
});
//# sourceMappingURL=app.js.map