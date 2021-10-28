import { PagedResource } from '../types/api';
import { CommentableType } from '../libs/interactions';
interface Comment {
    id: number;
    hash_id: string;
    user_id: number;
    contents: string;
    level: number;
    points: number;
    rated_value: number | null;
    commentable_type: string;
    commentable_id: number;
    in_reply_to_comment: number | null;
    in_reply_to_user: number | null;
    created_at: string;
    updated_at: string;
}
interface CommentInput {
    comment_contents: string;
    ancestor_id: number;
}
export declare const getComments: (commentableType: CommentableType, hashId: string) => Promise<PagedResource<Comment>>;
export declare const postComment: (commentableType: CommentableType, hashId: string, input: CommentInput) => Promise<import("axios").AxiosResponse<any>>;
export declare const updateComment: (hashId: string, input: {
    comment_contents: string;
}) => Promise<import("axios").AxiosResponse<any>>;
export declare const deleteComment: (hashId: string) => Promise<import("axios").AxiosResponse<any>>;
export {};
