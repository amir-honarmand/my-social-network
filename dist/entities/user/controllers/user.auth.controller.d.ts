import { Response } from "express";
export declare const register: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const login: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const _default: {
    register: (req: any, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
    login: (req: any, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
};
export default _default;
