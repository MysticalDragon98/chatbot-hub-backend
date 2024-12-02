import verifyAdminToken from "../../../modules/auth/verifyAdminToken";
import { searchMessages } from "../../../mongo/crud/message/message.mongo-search";
import { MessageModel } from "../../../mongo/models/message.mongo-model";
import { AdminToken } from "../../../types/AdminToken.type";

export default async function getConversationMessagesHTTPEndpoint (conversationId: string, skip: number, limit: number, token: AdminToken) {
    verifyAdminToken(token);
    return await MessageModel.find({ conversationId }).sort({ createdAt: -1 }).skip(skip).limit(limit);
}