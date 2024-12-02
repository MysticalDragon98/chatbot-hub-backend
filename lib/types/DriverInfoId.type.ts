import { Types } from "mongoose";

export type DriverInfoId = Types.ObjectId & { readonly __brand: unique symbol };