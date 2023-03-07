export declare const generatePass: (password: string) => Promise<{
    password: string;
    salt: string;
    hash: string;
}>;
export declare const validatePass: (password: string, salt: string, hash: string) => Promise<boolean>;
export declare const testRegex: (password: string) => boolean;
