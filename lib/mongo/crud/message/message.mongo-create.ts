import withSession from "../../../../plugins/mongo/lib/withSession";
import { MessageModel, Message } from "../../models/message.mongo-model";
import { ClientSession } from "mongoose";

export async function createMessage (item: Partial<Message>, session?: ClientSession) {
    return await withSession(async (session?: ClientSession) => {
        if (session)
            return (await MessageModel.create([item], { session }))[0];
        else
            return await MessageModel.create(item);
    }, session);
}