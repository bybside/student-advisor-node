import { Post } from "@prisma/client";
export declare class GetPostDto {
    title: string;
    content: string;
    published: boolean;
    authorId: number;
    constructor(post: Post);
}
