export declare const getAnswer: (answer: string) => Promise<import("axios").AxiosResponse<any>>;
export declare const postAnswer: (question: string, values: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const updateAnswer: (hashId: string, values: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const deleteAnswer: (hashId: string) => Promise<import("axios").AxiosResponse<any>>;
