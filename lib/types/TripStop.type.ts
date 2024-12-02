import { TripStopState } from "./TripStopState.type";
import { TripStopUpdate } from "./TripStopUpdate.type";

export type TripStop = {
    name: string;

    state: TripStopState;
    updates: TripStopUpdate[];
}