import { TokenRole } from "../enum/TokenRole.enum"
import { TokenType } from "../enum/TokenType.enum"

export type AccessToken = {
    type: TokenType.Access,
    exp: number,
    role: TokenRole
}