import { WhatsappMessageType } from "../enum/WhatsappMessageType.enum";
import { PhoneNumber } from "./PhoneNumber.type"

export type WhatsappMessageButtonPayload = {
    from: PhoneNumber;
    id: string;
    timestamp: string;
    type: WhatsappMessageType.Button;
    button: {
        payload: string;
        text: string;
    }
}