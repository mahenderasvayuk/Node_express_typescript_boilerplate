import { ObjectSchema } from 'joi';
/**
 * Validates data against a given Joi schema.
 *
 * @param schema - Joi schema to validate against.
 * @param data - The data object to validate.
 * @returns An object containing the validated value or the validation error.
 */
type ValidateStatusResult = {
    error: boolean,
    message: string,
    data: unknown
}
export default function validate<T>(schema: ObjectSchema<T>, data: unknown): ValidateStatusResult {
    const resultStatus: ValidateStatusResult = {
        error: false,
        message: "",
        data: {}
    }
    const options = {
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: true
    };
    const result = schema.validate(data, options);
    if (result.error) {
        resultStatus.error = true;
        resultStatus.message = result?.error.message
    }
    else {
        resultStatus.data = result.value;
    }
    return resultStatus
}
