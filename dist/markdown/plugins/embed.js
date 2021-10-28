"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlugin = void 0;
var utils_1 = require("../utils");
var _escape = require('lodash.escape');
var regexp = /{@(embed|gist|vimeo|codepen|youtube|jsfiddle|slideshare|googleslide)\s*:\s*([\S]+?)}/;
function parse(state) {
    if (state.src.charCodeAt(state.pos) !== 123)
        return false;
    var match = regexp.exec(state.src.slice(state.pos));
    if (!match)
        return false;
    var provider = match[1] === 'embed' ? null : match[1];
    var url = match[2];
    var token = state.push('at-embed', 'embed', state.level);
    token.meta = { provider: provider };
    token.content = url;
    state.pos += match[0].length;
    return true;
}
var render = function (options) { return function (tokens, idx) {
    var token = tokens[idx];
    var baseURL = options.baseURL;
    var provider = token.meta.provider;
    var url = token.content;
    return (0, utils_1.renderEmbed)({
        type: 'text/html',
        src: _escape(baseURL + "/embed?url=" + url + "&provider=" + provider),
        frameborder: 0,
        webkitallowfullscreen: true,
        mozallowfullscreen: true,
        allowfullscreen: true
    }, options);
}; };
var createPlugin = function (options) { return function (md) {
    md.inline.ruler.push('at-embed', parse);
    md.renderer.rules['at-embed'] = render(options);
}; };
exports.createPlugin = createPlugin;
