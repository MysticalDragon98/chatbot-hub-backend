import { Types } from "mongoose";

export type ConversationId = Types.ObjectId & { readonly __brand: unique symbol };