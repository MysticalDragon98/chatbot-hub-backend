import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { ConversationState } from '../../enum/ConversationState.enum';
import { ConversationContext } from '../../types/ConversationContext.type';
import { ConversationId } from '../../types/ConversationId.type';
import { PhoneNumber } from '../../types/PhoneNumber.type';

@modelOptions({ options: { allowMixed: 0 }})
export class Conversation {
    _id: ConversationId;
    
    @prop({ unique: true, required: true, index: true }) accountId: PhoneNumber;
    @prop({ required: true, enum: ConversationState }) state: ConversationState;
    @prop({ required: true, default: {} }) context: ConversationContext;

    @prop({}) lastMessageReceivedAt?: Date;
    @prop({}) lastMessageSentAt?: Date;
    @prop({ index: -1 }) lastConversationMessage?: Date;
}

export const ConversationModel = getModelForClass(Conversation);