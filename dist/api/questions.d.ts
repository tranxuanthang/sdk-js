import { Question, QuestionFull, Answer, Request, PagedResource } from '../types/api';
export declare enum QuestionFeedType {
    Newest = "newest",
    Unsolved = "unsolved",
    Unanswered = "unanswered",
    Following = "followings",
    Clipped = "clips"
}
export declare const getQuestionsFeed: (feed: QuestionFeedType, params?: Request | undefined) => Promise<PagedResource<Question>>;
export declare const getQuestion: (hashId: string) => Promise<QuestionFull>;
export declare const getAnswers: (hashId: string, params: Request) => Promise<PagedResource<Answer>>;
export declare const acceptAnswer: (answer: string, value: boolean) => Promise<import("axios").AxiosResponse<any>>;
export declare const postQuestion: (input: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const getQuestionForEdit: (hashId: string) => Promise<import("axios").AxiosResponse<any>>;
export declare const updateQuestion: (hashId: string, input: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const deleteQuestion: (hashId: string) => Promise<import("axios").AxiosResponse<any>>;
