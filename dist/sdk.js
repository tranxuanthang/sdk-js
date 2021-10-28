"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axios = exports.init = exports.config = exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config(options) {
        this.oauth = options.oauth;
    }
    return Config;
}());
exports.Config = Config;
function init(options) {
    exports.config = new Config(options);
}
exports.init = init;
var axios_1 = require("./libs/axios");
Object.defineProperty(exports, "axios", { enumerable: true, get: function () { return axios_1.default; } });
