"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(state, start, end, silent) {
    var firstLine;
    var firstLineOffsets = getLineOffsets(start, state);
    var firstLineStart = firstLineOffsets.start;
    var firstLineEnd = firstLineOffsets.end;
    // Too short
    if (firstLineStart + 2 > firstLineEnd) {
        return false;
    }
    // Not a valid Opening
    if (state.src.slice(firstLineStart, firstLineStart + 2) !== '$$') {
        return false;
    }
    firstLine = state.src.slice(firstLineStart + 2, firstLineEnd);
    // Don't check for closing if in silent mode
    if (silent) {
        return true;
    }
    var lastLine;
    var current = start;
    // Single line expression
    if (firstLine.trim().slice(-2) === '$$') {
        firstLine = firstLine.trim().slice(0, -2);
    }
    else {
        var lastLineIndex = findBlockLastLine(start, end, state);
        if (lastLineIndex) {
            current = lastLineIndex;
            var lastLineOffsets = getLineOffsets(current, state);
            var first = lastLineOffsets.start;
            var last = lastLineOffsets.end;
            lastLine = state.src.slice(first, last).trim().slice(0, -2);
        }
    }
    state.line = current + 1;
    var token = state.push('math_block', 'math', 0);
    token.block = true;
    token.content = (firstLine && firstLine.trim() ? firstLine + "\n" : '') +
        state.getLines(start + 1, current, state.tShift[start], true) +
        (lastLine && lastLine.trim() ? lastLine : '');
    token.map = [start, state.line];
    token.markup = '$$';
    return true;
}
exports.default = default_1;
var getLineOffsets = function (line, state) { return ({
    start: state.bMarks[line] + state.tShift[line],
    end: state.eMarks[line]
}); };
function findBlockLastLine(start, end, state) {
    var current = start;
    while (current < end) {
        current += 1;
        var lineOffsets = getLineOffsets(current, state);
        var first = lineOffsets.start;
        var last = lineOffsets.end;
        if (first < last && state.tShift[current] < state.blkIndent) {
            // non-empty line with negative indent should stop the list:
            break;
        }
        if (state.src.slice(first, last).trim().slice(-2) === '$$') {
            return current;
        }
    }
    return null;
}
