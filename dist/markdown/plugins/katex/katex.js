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
var katex = require("katex");
var utils_1 = require("../../utils");
var math_inline_1 = require("./math_inline");
var math_block_1 = require("./math_block");
function renderErrorMessage(message) {
    return "<p class=\"math-block--error\">" + message + "</p>";
}
function render(content, options) {
    try {
        if (content.length <= options.maxCharacter) {
            return options.displayMode
                ? "<p>" + katex.renderToString(content, options) + "</p>"
                : katex.renderToString(content, options);
        }
        return renderErrorMessage("For performance reasons, math blocks are limited to " + options.maxCharacter + " characters."
            + ' Try splitting up this block, or include an image instead.');
    }
    catch (error) {
        return (0, utils_1.escape)(content);
    }
}
function default_1(md, options) {
    md.inline.ruler.push('math_inline', math_inline_1.default);
    md.block.ruler.after('blockquote', 'math_block', math_block_1.default, {
        alt: ['paragraph', 'reference', 'blockquote', 'list']
    });
    md.renderer.rules.math_inline = function (tokens, idx) { return render(tokens[idx].content, __assign(__assign({}, options), { displayMode: false })); };
    md.renderer.rules.math_block = function (tokens, idx) { return render(tokens[idx].content, __assign(__assign({}, options), { displayMode: true })); };
}
exports.default = default_1;
