export class ApiError extends Error {
    status: number;
    message: string;
    code?: string;

    constructor(status: number, message: string, code?: string) {
        super(message);
        this.status = status;
        this.message = message;
        this.code = code;
    }
}

export const Errors = {
    notFound: (msg = "Not found") => new ApiError(404, msg, "NOT_FOUND"),
    forbidden: (msg = "Forbidden") => new ApiError(403, msg, "FORBIDDEN"),
    badRequest: (msg = "Bad request") => new ApiError(400, msg, "BAD_REQUEST"),
    internal: (msg = "Internal server error") =>
        new ApiError(500, msg, "INTERNAL_SERVER_ERROR"),
};
