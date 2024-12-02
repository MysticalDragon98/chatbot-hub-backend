import { WhatsappMessageType } from "../enum/WhatsappMessageType.enum"

export type WhatsappMessageTextPayload = {
    from: string,
    id: string,
    timestamp: string,
    text: { body: string },
    type: WhatsappMessageType.Text
}