export enum HttpStatusCodes {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
    SERVICE_UNAVAILABLE = 503,
}

export enum HttpStatusMessages {
    OK = 'OK',
    CREATED = 'CREATED',
    BAD_REQUEST = 'BAD_REQUEST',
    NOT_FOUND = 'NOT_FOUND',
    INTERNAL_SERVER = 'INTERNAL_SERVER_ERROR',
    UNAUTHORIZED = 'UNAUTHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    CONFLICT = 'CONFLICT',
    UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
    SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
    UPDATE_FAILED = 'UPDATE_FAILED',
    DELETE_FAILED = 'DELETE_FAILED',
}

export enum DatabaseErrorCodes {
    not_null_violation = '23502',
    unique_violation = '23505',
    invalid_input_value_for_enum = '22P02',
}