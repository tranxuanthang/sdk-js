"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.postComment = exports.getComments = void 0;
var axios_1 = require("../libs/axios");
var getComments = function (commentableType, hashId) {
    return axios_1.default.get("/" + commentableType + "/" + hashId + "/comments").then(function (_) { return _.data; });
};
exports.getComments = getComments;
var postComment = function (commentableType, hashId, input) {
    return axios_1.default.post("/" + commentableType + "/" + hashId + "/comments", input);
};
exports.postComment = postComment;
var updateComment = function (hashId, input) {
    return axios_1.default.put("/comments/" + hashId, input);
};
exports.updateComment = updateComment;
var deleteComment = function (hashId) { return axios_1.default.delete("/comments/" + hashId); };
exports.deleteComment = deleteComment;
