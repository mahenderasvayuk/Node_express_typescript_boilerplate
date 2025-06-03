import { Response } from "express";

type ResponseFormat = {
    statusCode: number;
    message: string;
    data: unknown;
}

class ResponseManager {
    constructor() { }
    #generateResponseFormat(message: string, statusCode: number, data: unknown): ResponseFormat {
        return {
            statusCode,
            message,
            data
        }
    }

    // 2xx Success
    success(res: Response, message: string, data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 200, data);
        res.status(responseData.statusCode).json(responseData);
    }

    created(res: Response, message: string, data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 201, data);
        res.status(responseData.statusCode).json(responseData);
    }

    accepted(res: Response, message: string, data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 202, data);
        res.status(responseData.statusCode).json(responseData);
    }

    noContent(res: Response): void {
        res.sendStatus(204);
    }

    // 4xx Client Errors
    badRequest(res: Response, message: string, data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 400, data);
        res.status(responseData.statusCode).json(responseData);
    }

    unauthorized(res: Response, message: string = 'Unauthorized', data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 401, data);
        res.status(responseData.statusCode).json(responseData);
    }

    forbidden(res: Response, message: string = 'Forbidden', data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 403, data);
        res.status(responseData.statusCode).json(responseData);
    }

    notFound(res: Response, message: string = 'Not Found', data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 404, data);
        res.status(responseData.statusCode).json(responseData);
    }

    conflict(res: Response, message: string, data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 409, data);
        res.status(responseData.statusCode).json(responseData);
    }

    unprocessableEntity(res: Response, message: string, data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 422, data);
        res.status(responseData.statusCode).json(responseData);
    }

    // 5xx Server Errors
    error(res: Response, message: string = 'Internal server error', data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 500, data);
        res.status(responseData.statusCode).json(responseData);
    }

    notImplemented(res: Response, message: string = 'Not Implemented', data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 501, data);
        res.status(responseData.statusCode).json(responseData);
    }

    serviceUnavailable(res: Response, message: string = 'Service Unavailable', data: unknown = {}): void {
        const responseData = this.#generateResponseFormat(message, 503, data);
        res.status(responseData.statusCode).json(responseData);
    }
};

export default new ResponseManager();