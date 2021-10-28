"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castVote = void 0;
var axios_1 = require("../libs/axios");
var castVote = function (type, hashId, score) {
    return axios_1.default.post("/" + type + "/" + hashId + "/rate", { score: score });
};
exports.castVote = castVote;
