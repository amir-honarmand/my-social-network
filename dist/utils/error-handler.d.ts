export declare class BaseError extends Error {
    name: string;
    status: number;
    description: string;
    isOperational: boolean;
    constructor(name: string, status: number, description: string, isOperational?: boolean);
}
