"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnswer = exports.updateAnswer = exports.postAnswer = exports.getAnswer = void 0;
var axios_1 = require("../libs/axios");
var getAnswer = function (answer) {
    return axios_1.default.get("/answers/" + answer);
};
exports.getAnswer = getAnswer;
var postAnswer = function (question, values) {
    return axios_1.default.post("/questions/" + question + "/answers", values);
};
exports.postAnswer = postAnswer;
var updateAnswer = function (hashId, values) {
    return axios_1.default.put("/answers/" + hashId, values);
};
exports.updateAnswer = updateAnswer;
var deleteAnswer = function (hashId) { return axios_1.default.delete("/answers/" + hashId); };
exports.deleteAnswer = deleteAnswer;
