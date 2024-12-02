import withSession from "../../../../plugins/mongo/lib/withSession";
import { MessageModel, Message } from "../../models/message.mongo-model";
import { ClientSession, UpdateQuery, FilterQuery } from "mongoose";

export async function updateMessages (query: FilterQuery<Message>, updates: UpdateQuery<Message>, session?: ClientSession) {
    return await withSession(async (session?: ClientSession) => {
        return await MessageModel.updateMany(query, updates, {
            session
        });
    }, session);
}