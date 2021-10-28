"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagFollowers = exports.getTagSeries = exports.getTagQuestions = exports.getTagPosts = exports.getTagInfo = exports.getTags = void 0;
var axios_1 = require("../libs/axios");
var getTags = function (params) {
    return axios_1.default.get('tags', { params: params }).then(function (_) { return _.data; });
};
exports.getTags = getTags;
var getTagInfo = function (tag) { return axios_1.default.get("/tags/" + tag).then(function (_) { return _.data; }); };
exports.getTagInfo = getTagInfo;
var associatedResource = function (type) {
    return function (tag, params) {
        return axios_1.default.get("/tags/" + tag + "/" + type, { params: params }).then(function (_) { return _.data; });
    };
};
exports.getTagPosts = associatedResource('posts');
exports.getTagQuestions = associatedResource('questions');
exports.getTagSeries = associatedResource('series');
exports.getTagFollowers = associatedResource('followers');
