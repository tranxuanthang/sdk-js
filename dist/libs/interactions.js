"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentableType = exports.SubscribableType = exports.RateableType = exports.VoteDir = void 0;
var VoteDir;
(function (VoteDir) {
    VoteDir["Up"] = "up";
    VoteDir["Down"] = "down";
    VoteDir["None"] = "none";
})(VoteDir = exports.VoteDir || (exports.VoteDir = {}));
var RateableType;
(function (RateableType) {
    RateableType["Post"] = "posts";
    RateableType["Series"] = "series";
    RateableType["Question"] = "questions";
    RateableType["Answer"] = "answers";
    RateableType["Comment"] = "comments";
})(RateableType = exports.RateableType || (exports.RateableType = {}));
var SubscribableType;
(function (SubscribableType) {
    SubscribableType["Tag"] = "tag";
    SubscribableType["User"] = "user";
    SubscribableType["Post"] = "post";
    SubscribableType["Series"] = "series";
    SubscribableType["Question"] = "question";
})(SubscribableType = exports.SubscribableType || (exports.SubscribableType = {}));
var CommentableType;
(function (CommentableType) {
    CommentableType["Post"] = "posts";
    CommentableType["Series"] = "series";
    CommentableType["Question"] = "questions";
    CommentableType["Answer"] = "answers";
    CommentableType["User"] = "users";
})(CommentableType = exports.CommentableType || (exports.CommentableType = {}));
