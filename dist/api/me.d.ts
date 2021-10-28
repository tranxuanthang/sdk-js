import { Request, PagedResource } from '../types/api';
import { SubscribableType } from '../libs/interactions';
interface UserSelf {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar: string[];
    roles: string[];
    is_admin: boolean;
    reputation: number;
}
interface UploadedFile {
    id: string;
    name: string;
    path: string;
}
export declare const self: () => Promise<UserSelf>;
export declare const getDrafts: (params: any) => Promise<any>;
export declare const getImages: (params?: Request | undefined) => Promise<PagedResource<UploadedFile>>;
export declare const deleteImage: (uuid: string) => Promise<import("axios").AxiosResponse<any>>;
export declare const getNotifications: (params?: object | undefined) => Promise<any>;
export declare const clearNotifications: (params?: object | undefined) => Promise<any>;
export declare const getProfile: () => Promise<any>;
export declare const updateProfile: (input: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const changePassword: (input: object) => Promise<import("axios").AxiosResponse<any>>;
export declare const getConnectedAccounts: () => Promise<any>;
export declare const disconnectSocialAccount: (service: string) => Promise<import("axios").AxiosResponse<any>>;
export declare const setSocialPrivacy: (service: string, value: boolean) => Promise<import("axios").AxiosResponse<any>>;
export declare const getNotificationSettings: () => Promise<any>;
export declare const getServiceSettings: () => Promise<any>;
export declare const updateSettings: (name: any, value: any) => Promise<import("axios").AxiosResponse<any>>;
export declare function subscribe(type: SubscribableType, key: string, value: boolean): Promise<import("axios").AxiosResponse<any>>;
export {};
