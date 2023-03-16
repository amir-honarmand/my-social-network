import { Response } from "express";
export declare const editUserAvatar: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUserAvatar: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUser: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const _default: {
    editUserAvatar: (req: any, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
    getUserAvatar: (req: any, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
    getUser: (req: any, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
};
export default _default;
