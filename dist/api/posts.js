"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.getPost = exports.getPostsFeed = exports.PostFeedType = void 0;
var axios_1 = require("../libs/axios");
var PostFeedType;
(function (PostFeedType) {
    PostFeedType["Newest"] = "newest";
    PostFeedType["Trending"] = "trending";
    PostFeedType["Following"] = "followings";
    PostFeedType["Clipped"] = "clips";
    PostFeedType["Featured"] = "editors-choice";
})(PostFeedType = exports.PostFeedType || (exports.PostFeedType = {}));
var getPostsFeed = function (feed, params) {
    return axios_1.default.get("/posts/" + feed, { params: params }).then(function (_) { return _.data; });
};
exports.getPostsFeed = getPostsFeed;
var getPost = function (hashId) { return axios_1.default.get("/posts/" + hashId).then(function (_) { return _.data.post; }); };
exports.getPost = getPost;
var deletePost = function (hashId) { return axios_1.default.delete("/posts/" + hashId); };
exports.deletePost = deletePost;
