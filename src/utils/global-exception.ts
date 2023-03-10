import { DatabaseErrorCodes, HttpStatusCodes, HttpStatusMessages } from "../shared/http-status-code";

export interface GlobalExceptionType {
    status: number;
    code: number;
    message: string;
}

export const globalException = (error: any) => {
    let status: number;
    let code: number;
    let message: string;

    if (error?.code === DatabaseErrorCodes.not_null_violation) {
        /* 
        *   null data error handling
        */

        const msg: string = `There is null field ===> ${error.column} in ===> ${error.table}`

        status = error?.status || HttpStatusCodes.INTERNAL_SERVER;
        code = +error?.code;
        message = msg;

    } else if (error?.code === DatabaseErrorCodes.unique_violation) {
        /* 
        *   duplicate data error handling
        */

        const msg: string = `There is duplicate data in ===> ${error.table}`

        status = error?.status || HttpStatusCodes.INTERNAL_SERVER;
        code = +error?.code;
        message = msg;

    } else if (error?.code === DatabaseErrorCodes.invalid_input_value_for_enum) {
        /* 
        *   invalid input value for "enum" error handling
        */

        const msg: string = `invalid input value for 'enum'`

        status = error?.status || HttpStatusCodes.INTERNAL_SERVER;
        code = +error?.code;
        message = msg;

    } else {
        status = error?.status || HttpStatusCodes.INTERNAL_SERVER;
        message = error?.message || error?.name || HttpStatusMessages.INTERNAL_SERVER;
        code = error?.status || HttpStatusCodes.INTERNAL_SERVER;
    }

    const errorResponse: GlobalExceptionType = {
        status,
        message,
        code
    };
    return errorResponse;
}