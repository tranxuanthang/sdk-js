export declare const getApiKeys: () => Promise<any>;
export declare const createApiKey: (name: string) => Promise<any>;
export declare const revokeApiKey: (tokenId: string, password: string) => Promise<import("axios").AxiosResponse<any>>;
