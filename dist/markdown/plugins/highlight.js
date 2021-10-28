"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prism = require("prismjs");
var utils_1 = require("markdown-it/lib/common/utils");
require('prismjs/components/prism-actionscript');
require('prismjs/components/prism-c');
require('prismjs/components/prism-cpp');
require('prismjs/components/prism-arduino');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-basic');
require('prismjs/components/prism-clojure');
require('prismjs/components/prism-coffeescript');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-d');
require('prismjs/components/prism-dart');
require('prismjs/components/prism-diff');
// require('prismjs/components/prism-django');
require('prismjs/components/prism-docker');
require('prismjs/components/prism-elixir');
require('prismjs/components/prism-elm');
require('prismjs/components/prism-markup-templating');
require('prismjs/components/prism-ruby');
require('prismjs/components/prism-erb');
require('prismjs/components/prism-erlang');
require('prismjs/components/prism-gherkin');
require('prismjs/components/prism-go');
require('prismjs/components/prism-graphql');
require('prismjs/components/prism-haml');
require('prismjs/components/prism-handlebars');
require('prismjs/components/prism-haskell');
require('prismjs/components/prism-haxe');
require('prismjs/components/prism-http');
require('prismjs/components/prism-ini');
require('prismjs/components/prism-java');
require('prismjs/components/prism-json');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-latex');
require('prismjs/components/prism-less');
require('prismjs/components/prism-lisp');
require('prismjs/components/prism-livescript');
require('prismjs/components/prism-lua');
require('prismjs/components/prism-makefile');
require('prismjs/components/prism-matlab');
require('prismjs/components/prism-nginx');
require('prismjs/components/prism-nix');
require('prismjs/components/prism-objectivec');
require('prismjs/components/prism-pascal');
require('prismjs/components/prism-perl');
require('prismjs/components/prism-php');
require('prismjs/components/prism-sql');
require('prismjs/components/prism-plsql');
require('prismjs/components/prism-powershell');
require('prismjs/components/prism-protobuf');
require('prismjs/components/prism-python');
require('prismjs/components/prism-q');
require('prismjs/components/prism-r');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-sass');
require('prismjs/components/prism-scala');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-stylus');
require('prismjs/components/prism-swift');
require('prismjs/components/prism-twig');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-vbnet');
require('prismjs/components/prism-wasm');
require('prismjs/components/prism-yaml');
function parseLanguageToken(token) {
    var i = token.indexOf(':');
    var fileName = '';
    var langName = token;
    if (i !== -1) {
        fileName = token.slice(i + 1).trim();
        langName = token.slice(0, i);
    }
    else if (token && token.lastIndexOf('.') !== -1) {
        fileName = token;
        langName = token.slice(token.lastIndexOf('.') + 1);
    }
    return { fileName: fileName, langName: langName };
}
function createHighlighter(options) {
    return function (str, lang) {
        var _a = parseLanguageToken(lang), fileName = _a.fileName, langName = _a.langName;
        var prismLang = Prism.languages[langName.toLowerCase()];
        var code = prismLang
            ? Prism.highlight(str, prismLang, langName)
            : (0, utils_1.escapeHtml)(str);
        var languageClass = "" + options.langPrefix + (langName || 'none');
        return "<pre class=\"" + languageClass + "\" data-filename=\"" + fileName + "\">"
            + ("<code class=\"" + languageClass + "\">" + code + "</code>")
            + '</pre>';
    };
}
function default_1(md) {
    md.options.highlight = createHighlighter({
        langPrefix: md.options.langPrefix
    });
}
exports.default = default_1;
