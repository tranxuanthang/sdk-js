"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveAndPublish = exports.saveAsDraft = exports.savePostRevision = exports.getPostForEdit = void 0;
var axios_1 = require("../libs/axios");
var getPostForEdit = function (hashId) {
    return axios_1.default.get("/posts/" + hashId + "/edit").then(function (_) { return _.data; });
};
exports.getPostForEdit = getPostForEdit;
var savePostRevision = function (input) {
    return axios_1.default.post('/publish/post/autosave', input);
};
exports.savePostRevision = savePostRevision;
exports.saveAsDraft = exports.savePostRevision;
var saveAndPublish = function (input) {
    return axios_1.default.post('/publish/post', input);
};
exports.saveAndPublish = saveAndPublish;
