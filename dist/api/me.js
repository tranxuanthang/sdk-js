"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = exports.updateSettings = exports.getServiceSettings = exports.getNotificationSettings = exports.setSocialPrivacy = exports.disconnectSocialAccount = exports.getConnectedAccounts = exports.changePassword = exports.updateProfile = exports.getProfile = exports.clearNotifications = exports.getNotifications = exports.deleteImage = exports.getImages = exports.getDrafts = exports.self = void 0;
var axios_1 = require("../libs/axios");
var self = function () { return axios_1.default.get('/me').then(function (_) { return _.data; }); };
exports.self = self;
// Draft contents
var getDrafts = function (params) { return axios_1.default.get('/me/contents/drafts', { params: params }).then(function (_) { return _.data; }); };
exports.getDrafts = getDrafts;
// Uploaded files
var getImages = function (params) {
    return axios_1.default.get('/me/images', { params: params }).then(function (_) { return _.data; });
};
exports.getImages = getImages;
var deleteImage = function (uuid) { return axios_1.default.delete("/me/images/" + uuid); };
exports.deleteImage = deleteImage;
// Notifications
var getNotifications = function (params) { return axios_1.default.get('/me/notifications', { params: params }).then(function (_) { return _.data; }); };
exports.getNotifications = getNotifications;
var clearNotifications = function (params) { return axios_1.default.post('/me/notifications/clear', { params: params }); };
exports.clearNotifications = clearNotifications;
// Profile
var getProfile = function () { return axios_1.default.get('/me/settings/profile').then(function (_) { return _.data; }); };
exports.getProfile = getProfile;
var updateProfile = function (input) { return axios_1.default.post('/me/settings/profile', input); };
exports.updateProfile = updateProfile;
var changePassword = function (input) { return axios_1.default.put('/me/settings/password', input); };
exports.changePassword = changePassword;
var getConnectedAccounts = function () { return axios_1.default.get('/me/settings/socials').then(function (_) { return _.data; }); };
exports.getConnectedAccounts = getConnectedAccounts;
var disconnectSocialAccount = function (service) { return axios_1.default.delete("/social/" + service + "/disconnect"); };
exports.disconnectSocialAccount = disconnectSocialAccount;
var setSocialPrivacy = function (service, value) {
    return axios_1.default.put('/me/settings/socialPrivacy', { service: service, value: value });
};
exports.setSocialPrivacy = setSocialPrivacy;
var getNotificationSettings = function () { return axios_1.default.get('/me/settings/notification').then(function (_) { return _.data; }); };
exports.getNotificationSettings = getNotificationSettings;
var getServiceSettings = function () { return axios_1.default.get('/me/settings/service').then(function (_) { return _.data; }); };
exports.getServiceSettings = getServiceSettings;
var updateSettings = function (name, value) {
    var _a;
    return axios_1.default.put('/me/settings', (_a = {}, _a[name] = value, _a));
};
exports.updateSettings = updateSettings;
// Subscriptions
function subscribe(type, key, value) {
    var url = "/me/subscriptions/" + type + "/" + key;
    return value ? axios_1.default.put(url) : axios_1.default.delete(url);
}
exports.subscribe = subscribe;
