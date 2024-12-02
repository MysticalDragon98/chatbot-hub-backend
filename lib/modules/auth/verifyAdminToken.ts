import { ok } from "assert";
import { decodeJWT } from "../../../plugins/jwt/decodeJWT";
import { Token } from "../../types/Token.type";
import { TokenRole } from "../../enum/TokenRole.enum";
import { AccessToken } from "../../types/AccessToken.type";
import { TokenType } from "../../enum/TokenType.enum";

export default function verifyAdminToken (token: Token) {
    const data = decodeJWT<AccessToken>(token);

    ok(data.type === TokenType.Access, "Invalid token: not an access token");
    ok(data.role === TokenRole.Admin, "Invalid token: not an admin token");
}