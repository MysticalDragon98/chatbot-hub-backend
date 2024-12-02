import { prop, getModelForClass, modelOptions, index, pre } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { PhoneNumber } from '../../types/PhoneNumber.type';
import { MessageDirection } from '../../enum/MessageDirection.enum';
import { MessageWhappId } from '../../types/MessageWhappId.type';
import { MessageButton } from '../../types/MessageButton.type';
import { MessageStatus } from '../../enum/MessageStatus.enum';
import { WhatsappMessageType } from '../../enum/WhatsappMessageType.enum';
import { WhatsappMessageTextPayload } from '../../types/WhatsappMessageTextPayload.type';
import { WhatsappMessageImagePayload } from '../../types/WhatsappMessageImagePayload.type';
import { WhatsappMessageInteractivePayload } from '../../types/WhatsappMessageInteractivePayload';
import { WhatsappMessageLocationPayload } from '../../types/WhatsappMessageLocationPayload.type';
import { WhatsappMessageDocumentPayload } from '../../types/WhatsappMessageDocumentPayload.type';
import { WhatsappMessageButtonPayload } from '../../types/WhatsappMessageButtonPayload.type';
import { dbWatchStream } from '../../../plugins/mongo/lib/dbWatchStream';

@modelOptions({ options: { allowMixed: 0 }})
@index({ createdAt: -1, status: 1, sentAt: -1 })
@index({ conversationId: 1, createdAt: -1 })
export class Message {
    _id: Types.ObjectId;

    @prop({ required: true, index: true }) conversationId: PhoneNumber;
    @prop({ required: true }) direction: MessageDirection;
    @prop({}) messageWhappId?: MessageWhappId; 
    @prop({}) messageType?: WhatsappMessageType;
    
    @prop({}) image?: WhatsappMessageImagePayload['image'];
    @prop({}) interactive?: WhatsappMessageInteractivePayload['interactive'];
    @prop({}) document?: WhatsappMessageDocumentPayload['document'];
    @prop({}) location?: WhatsappMessageLocationPayload['location'];
    @prop({}) button?: WhatsappMessageButtonPayload['button'];
    @prop({}) text?: WhatsappMessageTextPayload['text'];

    @prop({ required: true }) status: MessageStatus;
    @prop({}) error?: string;
    @prop({}) buttons?: MessageButton[];
    @prop({}) createdAt: Date;
    
    //* For incoming messages
    @prop({}) receivedAt?: Date;

    //* For outgoing messages
    @prop({}) sentAt?: Date;
    @prop({}) deliveredAt?: Date;
    @prop({}) failedAt?: Date;
}

export const MessageModel = getModelForClass(Message);