import { ChangeStreamDocument } from "mongodb";
import { MongoConnection } from "..";

export function dbWatchStream<T> (collection: string, callback: (changes: ChangeStreamDocument<Document>) => void) {
    MongoConnection.connection.collection(collection).watch().on("change", callback);
}