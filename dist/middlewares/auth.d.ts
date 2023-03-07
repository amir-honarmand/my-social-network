import { NextFunction, Response } from "express";
declare const _default: {
    userAuthMiddleware: (req: any, res: Response<any, Record<string, any>>, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    userAuthRefreshMiddleware: (req: any, res: Response<any, Record<string, any>>, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
};
export default _default;
