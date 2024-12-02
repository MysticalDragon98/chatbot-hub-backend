export interface MongoSearch {
    skip?: number;
    sort?: { [key: string]: 1 | -1 };
    limit?: number;
}