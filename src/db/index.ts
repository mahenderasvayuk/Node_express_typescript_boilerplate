import mongoose from "mongoose";
export default async (connectionUrl: string | undefined) => {
    try {
        if (connectionUrl) {
            await mongoose.connect(connectionUrl, {});
            console.log('Connected with mongodb databse succesfully');
        }
        else {
            throw new Error('Mongodb connection url not found in .env file')
        }
    }
    catch (err: any) {
        console.log(`Connection failed with mongodb database:-`, err?.message);
    }
}