"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movePostBefore = exports.removePost = exports.addPost = exports.getPosts = exports.deleteSeries = exports.updateSeries = exports.edit = exports.createSeries = exports.getSeries = exports.getSeriesFeed = void 0;
var axios_1 = require("../libs/axios");
var getSeriesFeed = function (params) {
    return axios_1.default.get('/series', { params: params }).then(function (_) { return _.data; });
};
exports.getSeriesFeed = getSeriesFeed;
var getSeries = function (hashId) {
    return axios_1.default.get("/series/" + hashId).then(function (_) { return _.data; });
};
exports.getSeries = getSeries;
var createSeries = function (values) { return axios_1.default.post('/series', values); };
exports.createSeries = createSeries;
var edit = function (hashId) { return axios_1.default.get("/series/" + hashId + "/edit").then(function (_) { return _.data; }); };
exports.edit = edit;
var updateSeries = function (hashId, values) { return axios_1.default.put("/series/" + hashId, values); };
exports.updateSeries = updateSeries;
var deleteSeries = function (hashId) { return axios_1.default.delete("/series/" + hashId); };
exports.deleteSeries = deleteSeries;
var getPosts = function (hashId, params) {
    return axios_1.default.get("/series/" + hashId + "/posts").then(function (_) { return _.data; });
};
exports.getPosts = getPosts;
var addPost = function (postId, series) {
    return axios_1.default.put("/series/" + series + "/addPost", { post_id: postId });
};
exports.addPost = addPost;
var removePost = function (postId, series) {
    return axios_1.default.put("/series/" + series + "/removePost", { post_id: postId });
};
exports.removePost = removePost;
var movePostBefore = function (nextPostId, postId, series) {
    return axios_1.default.put("/series/" + series + "/movePostBefore", {
        next_post_id: nextPostId,
        post_id: postId
    });
};
exports.movePostBefore = movePostBefore;
