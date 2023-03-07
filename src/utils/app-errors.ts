// export const STATUS_CODES = {
//     OK: 200,
//     BAD_REQUEST: 400,
//     UN_AUTHORIZED: 403,
//     NOT_FOUND: 404,
//     INTERNAL_ERROR: 500,
// }

// export class AppError extends Error {
//     constructor(
//         name: string,
//         statusCode: number,
//         description: string,
//         isOperational: boolean,
//         errorStack: any,
//         loggingErrorResponse: any
//     ) {
//         super(description);
//         Object.setPrototypeOf(this, new.target.prototype);
//         this.name = name;
//         this.statusCode = statusCode;
//         this.isOperational = isOperational
//         this.errorStack = errorStack;
//         this.logError = loggingErrorResponse;
//         Error.captureStackTrace(this);
//     }
// }

// //api Specific Errors
// export class APIError extends AppError {
//     constructor(
//         name: string,
//         statusCode: number = STATUS_CODES.INTERNAL_ERROR,
//         description: string = 'Internal Server Error!',
//         isOperational: boolean = true
//     ) {
//         super(name, statusCode, description, isOperational, '', '');
//     }
// }

// //400
// export class BadRequestError extends AppError {
//     constructor(description = 'Bad request', loggingErrorResponse) {
//         super('NOT FOUND', STATUS_CODES.BAD_REQUEST, description, true, false, loggingErrorResponse);
//     }
// }

// //400
// export class ValidationError extends AppError {
//     constructor(description = 'Validation Error', errorStack) {
//         super('BAD REQUEST', STATUS_CODES.BAD_REQUEST, description, true, errorStack);
//     }
// }
