import verifyAdminToken from "../../../modules/auth/verifyAdminToken";
import { aggregateConversation } from "../../../mongo/crud/conversation/conversation.mongo-aggregate";
import { AdminToken } from "../../../types/AdminToken.type";

export default async function getRecentConversationsHTTPEndpoint (limit: number, token: AdminToken) {
    await verifyAdminToken(token);
    return await aggregateConversation([
        { $sort: { lastConversationMessage: -1 }},
        { $limit: limit ?? 10 },
        { $lookup: {
            from: "messages",
            let: { conversationId: "$accountId" },
            pipeline: [
              { $match: { $expr: {
                $eq: ["$conversationId", "$$conversationId"]
              }}},
              { $sort: { createdAt: -1 }},
              { $limit: 1 }
            ],
            as: "messages"
          }
        },
        { $project: {
            accountId: 1,
            state: 1,
            context: 1,
            lastMessageReceivedAt: 1,
            lastMessageSentAt: 1,
            lastConversationMessage: 1,
            lastMessage: {
              $arrayElemAt: ["$messages", 0]
            }
        }}
    ]);
}