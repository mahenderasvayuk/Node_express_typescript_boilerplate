import bcrypt from 'bcrypt';

const saltRounds: number = 10; // Adjust based on security requirements

interface IBcryptUtils {
    hashPassword(plainPassword: string): Promise<string>;
    comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
    generateSalt(): Promise<string>;
    hashWithSalt(plainPassword: string, salt: string): Promise<string>;
    getRounds(hashedPassword: string): number;
    isValidHash(hash: string): boolean;
}

const bcryptUtils: IBcryptUtils = {
    /**
     * Hash a plain text password
     * @param plainPassword - The password to hash
     * @returns The hashed password
     */
    async hashPassword(plainPassword: string): Promise<string> {
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(plainPassword, salt);
            return hash;
        } catch (error: unknown) {
            const err = error as Error;
            throw new Error(`Bycript Error : ${err.message}`);
        }
    },

    /**
     * Compare a plain text password with a hashed password
     * @param plainPassword - The plain text password to compare
     * @param hashedPassword - The hashed password to compare against
     * @returns True if passwords match, false otherwise
     */
    async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        try {
            const match = await bcrypt.compare(plainPassword, hashedPassword);
            return match;
        } catch (error: unknown) {
            const err = error as Error;
            throw new Error(`Bycript Error : ${err.message}`);
        }
    },

    /**
     * Generate a salt
     * @returns The generated salt
     */
    async generateSalt(): Promise<string> {
        try {
            return await bcrypt.genSalt(saltRounds);
        } catch (error: unknown) {
            const err = error as Error;
            throw new Error(`Bycript Error : ${err.message}`);
        }
    },

    /**
     * Hash a password with a specific salt
     * @param plainPassword - The password to hash
     * @param salt - The salt to use for hashing
     * @returns The hashed password
     */
    async hashWithSalt(plainPassword: string, salt: string): Promise<string> {
        try {
            return await bcrypt.hash(plainPassword, salt);
        } catch (error: unknown) {
            const err = error as Error;
            throw new Error(`Bycript Error : ${err.message}`);
        }
    },

    /**
     * Get the number of rounds used in a hashed password
     * @param hashedPassword - The hashed password
     * @returns The number of rounds used
     */
    getRounds(hashedPassword: string): number {
        try {
            return bcrypt.getRounds(hashedPassword);
        } catch (error: unknown) {
            const err = error as Error;
            throw new Error(`Bycript Error : ${err.message}`);
        }
    },

    /**
     * Validate that a string is a valid bcrypt hash
     * @param hash - The hash to validate
     * @returns True if valid, false otherwise
     */
    isValidHash(hash: string): boolean {
        // Basic check for bcrypt hash format
        const bcryptRegex = /^\$2[aby]\$\d+\$[./0-9A-Za-z]{53}$/;
        return bcryptRegex.test(hash);
    }
};

export default bcryptUtils;