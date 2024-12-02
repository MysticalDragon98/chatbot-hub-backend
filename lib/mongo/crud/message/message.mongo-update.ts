import withSession from "../../../../plugins/mongo/lib/withSession";
import { MessageModel, Message } from "../../models/message.mongo-model";
import { ClientSession, UpdateQuery, Types, FilterQuery } from "mongoose";

export async function updateMessage (query: FilterQuery<Message>, updates: UpdateQuery<Message>, session?: ClientSession) {
    return await withSession(async (session?: ClientSession) => {
        return await MessageModel.updateOne(query, updates, {
            session
        });
    }, session);
}