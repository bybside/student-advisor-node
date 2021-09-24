import { Post } from "@prisma/client";
import { DbService } from "src/data/db.service";
export declare class PostRepository {
    private readonly _client;
    constructor(_client: DbService);
    getAllPosts(): Promise<Post[]>;
    publishPost(id: number): Promise<Post>;
}
