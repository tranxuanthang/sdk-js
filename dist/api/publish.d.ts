interface PostEdit {
}
export declare const getPostForEdit: (hashId: string) => Promise<PostEdit>;
export declare const savePostRevision: (input: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const saveAsDraft: (input: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const saveAndPublish: (input: object) => Promise<import("axios").AxiosResponse<any>>;
export {};
