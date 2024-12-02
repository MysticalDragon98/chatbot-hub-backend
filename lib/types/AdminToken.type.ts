import { Token } from "./Token.type";

export type AdminToken = Token & { readonly __brand: unique symbol };