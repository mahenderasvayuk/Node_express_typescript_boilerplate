import { NextFunction, Request, Response } from 'express';
import responseManager from '../utils/responseManager';
type AsyncFunction = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const asyncHandler = (fn: AsyncFunction) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error: any) {
            return responseManager.error(res, error?.message, {})
        }
    };
};

export const notFoundHanddler = (req: Request, res: Response) => {
    const route = req?.path;
    const message = `The api route ${route} not exit on this server.Please check the API documentation.`;
    return responseManager.notFound(res, message, {})
}
