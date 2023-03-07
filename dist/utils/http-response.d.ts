interface Response {
    status: number;
    message: string;
    error: Error | null;
    data: any;
}
export declare const response: (status: number, message: string, data: any, error?: any | null) => Response;
export {};
