import Markdown = require('markdown-it');
export interface EmbedOptions {
    wrapperClass?: string;
    iframeClass?: string;
}
interface KatexOptions {
    maxSize?: Number;
    maxExpand?: Number;
    maxCharacter?: Number;
}
export interface Options {
    /** Base URL */
    baseURL?: string;
    /** Whether to add mention link or not */
    mention?: boolean;
    /** Whether to render embedments or not */
    embed?: boolean | EmbedOptions;
    /** Should relative URLs be made to absolute */
    absoluteURL?: boolean;
    /** Katex Options */
    katex: KatexOptions;
}
export declare function createRenderer(options: Options): Markdown.MarkdownIt;
export {};
