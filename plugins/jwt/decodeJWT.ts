import { verify } from "jsonwebtoken";
import { $JWT_SECRET } from "../../lib/env";

type JWTOptions = { secret?: string; }

export function decodeJWT<T> (token: string, options?: JWTOptions) {
    return verify(token, options?.secret ?? $JWT_SECRET) as T;
}