"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRenderer = void 0;
var esm_1 = require("twemoji/2/esm");
var Markdown = require("markdown-it");
var emoji = require("markdown-it-emoji");
var sanitize = require("markdown-it-sanitizer");
var katex_1 = require("./plugins/katex/katex");
var highlight_1 = require("./plugins/highlight");
var utils_1 = require("./utils");
var embed_1 = require("./plugins/embed");
var linkify_mention_1 = require("./plugins/linkify-mention");
var defaultOptions = {
    baseURL: 'https://viblo.asia',
    mention: true,
    embed: true,
    absoluteURL: true,
    katex: {
        maxSize: 500,
        maxExpand: 100,
        maxCharacter: 1000,
    },
};
function createRenderer(options) {
    var _options = Object.assign({}, defaultOptions, options);
    var _katexOptions = typeof _options.katex === 'object' ? _options.katex : defaultOptions.katex;
    var md = Markdown({
        html: true,
        linkify: true
    });
    md.use(emoji);
    md.use(highlight_1.default);
    md.renderer.rules.emoji = function (token, idx) { return esm_1.default.parse(token[idx].content); };
    md.use(katex_1.default, __assign({ throwOnError: true }, _katexOptions));
    (0, utils_1.alterToken)('link_open', function (token) {
        token.attrPush(['target', '_blank']);
        if (_options.absoluteURL) {
            var href = token.attrGet('href');
            if (href && href.startsWith('/')) {
                token.attrSet('href', "" + _options.baseURL + href);
            }
        }
        return token;
    }, md);
    if (_options.mention !== false) {
        md.linkify.add('@', (0, linkify_mention_1.createDefinition)(_options.baseURL + "/u"));
    }
    if (_options.embed !== false) {
        var embedOptions = typeof _options.embed === 'object' ? _options.embed : {};
        var embedPlugin = (0, embed_1.createPlugin)(__assign(__assign({}, embedOptions), { baseURL: _options.baseURL }));
        md.use(embedPlugin);
    }
    md.use(sanitize, { align: true, removeUnbalanced: true });
    return md;
}
exports.createRenderer = createRenderer;
