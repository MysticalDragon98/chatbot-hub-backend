import { Types } from "mongoose";

export type TripId = Types.ObjectId & { readonly __brand: unique symbol };