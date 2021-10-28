import { EmbedOptions } from './plugins/embed';
import { MarkdownIt, Token } from 'markdown-it';
declare type AlterTokenFunction = (token: Token) => Token;
export declare function alterToken(rule: string, alter: AlterTokenFunction, md: MarkdownIt): MarkdownIt;
export declare function escape(string: any): any;
export declare function renderEmbed(attrs: object, options: EmbedOptions): string;
export {};
