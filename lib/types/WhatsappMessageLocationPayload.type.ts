import { WhatsappMessageType } from "../enum/WhatsappMessageType.enum"
import { PhoneNumber } from "./PhoneNumber.type"

export type WhatsappMessageLocationPayload = {
    from: PhoneNumber,
    id: string,
    timestamp: string,
    type: WhatsappMessageType.Location,
    location: {
        latitude: number,
        longitude: number,
        type: "location"
    }
}