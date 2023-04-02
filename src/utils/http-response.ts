interface Response {
    status: number;
    message: string;
    error: Error | null;
    data: any;
}

export const response = (status: number, message: string, data: any, error: any | null = null): Response => {
    return {
        status,
        message,
        error,
        data
    }
}