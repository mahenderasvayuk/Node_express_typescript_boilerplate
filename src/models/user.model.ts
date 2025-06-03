import config from "./model.config";

const dbSchema = new config.Schema({
    name: {
        type: String,
        default: ""
    }
}, config.schemaDefaultOptions);
const model = config.model(config.modelNames.userModel, dbSchema);
export default model;