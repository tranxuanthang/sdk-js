"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeApiKey = exports.createApiKey = exports.getApiKeys = void 0;
var axios_1 = require("../libs/axios");
var getApiKeys = function () { return axios_1.default.get('/oauth/personal-access-tokens').then(function (_) { return _.data; }); };
exports.getApiKeys = getApiKeys;
var createApiKey = function (name) { return axios_1.default.post('/oauth/personal-access-tokens', { name: name }).then(function (_) { return _.data; }); };
exports.createApiKey = createApiKey;
var revokeApiKey = function (tokenId, password) {
    return axios_1.default.post("/oauth/tokens/" + tokenId + "/revoke", { password: password });
};
exports.revokeApiKey = revokeApiKey;
