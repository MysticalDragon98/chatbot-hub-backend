import { TripStopState } from "./TripStopState.type";

export type TripStopUpdate = {
    state: TripStopState;
    timestamp: Date;
}