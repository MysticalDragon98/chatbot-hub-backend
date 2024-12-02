import { LatLng } from "./LatLng.type"

export type DetailedLocation = {
    location: LatLng;
    address: string;
    details: any;
}