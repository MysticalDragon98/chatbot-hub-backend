import { createJWT } from "../../../plugins/jwt/createJWT";
import { TokenRole } from "../../enum/TokenRole.enum";
import { TokenType } from "../../enum/TokenType.enum";
import { AccessToken } from "../../types/AccessToken.type";

export default async function generateAdminToken () {
    return await createJWT(<AccessToken>{
        type: TokenType.Access,
        role: TokenRole.Admin,
        exp: Date.now() + 60 * 60 * 24 * 30 * 12
    });
}