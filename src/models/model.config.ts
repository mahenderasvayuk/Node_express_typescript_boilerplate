import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;
const schemaDefaultOptions = { autoCreate: true, autoIndex: true, versionKey: false, timestamps: true };
const modelNames = {
    userModel: "user"
};

export default {
    Schema, model, Types, schemaDefaultOptions, modelNames
}
