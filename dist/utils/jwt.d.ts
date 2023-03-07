import JWT from 'jsonwebtoken';
export declare const jwtGenerate: (payload: {}, secret: string, expiresIn: string, userType: string) => string;
export declare const jwtVerify: (token: string, secret: string, userType: string) => string | JWT.JwtPayload;
export declare class Token {
    readonly userId: string | number;
    readonly userType: string;
    constructor(userId: string | number, userType: string);
    private date;
    private secret;
    private refreshExpiry;
    private accessExpiry;
    accessExpiresAt: any;
    refreshExpiresAt: any;
    generateRefresh(): string;
    generateAccess(): string;
}
