import mongoose from 'mongoose';

const connectToDatabase = async (url: string | undefined): Promise<void> => {
    try {
        if (!url) {
            throw new Error('MongoDB connection URL not found in .env file');
        }
        await mongoose.connect(url);
        console.info('Successfully connected to MongoDB database');
    } catch (error: unknown) {
        const err = error as Error;
        console.error('Failed to connect to MongoDB database:', err.message);
    }
};

export default connectToDatabase;
