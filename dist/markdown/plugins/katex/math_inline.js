"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function skip(state, openingLength) {
    state.pending += '$'.repeat(openingLength);
    state.pos += openingLength;
    return true;
}
function findClosing(state, start) {
    var match = state.src.slice(start).match(/(^|[^\\])(\\\\)*\$/);
    if (match && match.index !== undefined) {
        var found = start + match.index + match[0].length - 1;
        var closing = state.scanDelims(found, false);
        if (closing.can_close) {
            return found;
        }
    }
    return -1;
}
function default_1(state, silent) {
    if (silent || state.src[state.pos] !== '$') {
        return false;
    }
    var opening = state.scanDelims(state.pos, false);
    if (opening.length > 1 || !opening.can_open) {
        return skip(state, opening.length);
    }
    var start = state.pos + opening.length;
    var closingIndex = findClosing(state, start);
    if (closingIndex === -1) {
        return skip(state, opening.length);
    }
    var content = state.src.slice(start, closingIndex);
    if (!silent) {
        var token = state.push('math_inline', 'math', 0);
        token.markup = '$';
        token.content = state.src.slice(state.pos + opening.length, closingIndex);
    }
    state.pos += opening.length + content.length + 1;
    return true;
}
exports.default = default_1;
