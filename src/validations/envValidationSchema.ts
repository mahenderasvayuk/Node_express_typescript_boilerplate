import Joi, { Schema } from "joi";
const schema: Schema = Joi.object().keys({
    MONGODB_CONNECTION_URL: Joi.string().required(),
    JWT_SECRET_SECRET_KEY: Joi.string().required(),
});
export default schema