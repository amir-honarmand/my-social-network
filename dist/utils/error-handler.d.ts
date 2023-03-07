declare const createLogger: any, transports: any;
declare const AppError: any;
declare const LogErrors: any;
declare class ErrorLogger {
    constructor();
    logError(err: any): Promise<boolean>;
    isTrustError(error: any): any;
}
declare const ErrorHandler: (err: any, req: any, res: any, next: any) => Promise<any>;
