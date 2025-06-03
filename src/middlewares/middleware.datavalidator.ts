import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import validator from "../validations/validator";
import responseManager from "../utils/responseManager";
type ReqDataType = {
    body?: ObjectSchema;
    params?: ObjectSchema;
    query?: ObjectSchema;
    headers?: ObjectSchema;
};

export const requestDataValidator = (schemas: ReqDataType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            (Object.keys(schemas) as (keyof ReqDataType)[]).forEach((key) => {
                const schema = schemas[key];
                if (schema) {
                    const { error, message, data } = validator(schema, req[key]);
                    if (error) {
                        throw new Error(message);
                    }
                    req[key] = data;
                }
            });
            next();
        } catch (err: unknown) {
            return responseManager.badRequest(res, (err as Error)?.message, {})
        }
    };
};
