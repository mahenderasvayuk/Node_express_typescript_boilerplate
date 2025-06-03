import jwt from "jsonwebtoken";
import { generateCurrentTimeStamps, generateExprireTimestampsHours } from "./moment";

interface TokenPayload {
    data: unknown
    iat?: number;
    exp?: number;
    type?: string;
    role?: string
}
const DEFAULT_EXPIRATION_HOURS = 12;
// const DEFAULT_EXPIRATION_DAYS = 2;


class JWTUtils {
    constructor() {

    }
    private getSecretKey(): string {
        const key = process?.env?.JWT_SECRET_SECRET_KEY;
        if (!key) console.warn('Please define JWT_SECRET_SECRET_KEY value in env when you diploye it.Because curenlty we have used the default key for jwt toke secret');
        return key ? key : 'default_secter'
    };
    generateToken(data: unknown): string {
        const tokenPayload: TokenPayload = {
            data,
            iat: generateCurrentTimeStamps(),
            exp: generateExprireTimestampsHours(DEFAULT_EXPIRATION_HOURS),
        };
        const token = jwt.sign(tokenPayload, this.getSecretKey());
        return token
    }
    verifyToken<T extends TokenPayload>(token: string): T {
        return jwt.verify(token, this.getSecretKey()) as T;
    }
    decodeToken<T extends TokenPayload>(token: string): T | null {
        try {
            return jwt.decode(token) as T;
        } catch {
            return null;
        }
    }
}
export default new JWTUtils();