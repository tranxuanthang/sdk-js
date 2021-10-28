"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentToken = exports.setAccessToken = void 0;
var axios_1 = require("./libs/axios");
var currentToken = null;
/**
 * Set current token and set the Authorization header for all requests.
 */
function setAccessToken(token) {
    currentToken = token;
    axios_1.default.defaults.headers.common['Authorization'] = token.token_type + " " + token.access_token;
}
exports.setAccessToken = setAccessToken;
/**
 * Get the current token.
 */
var getCurrentToken = function () { return currentToken ? (__assign({}, currentToken)) : null; };
exports.getCurrentToken = getCurrentToken;
