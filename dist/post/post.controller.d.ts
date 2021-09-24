import { GetPostDto } from "./dto/get-post.dto";
import { PostRepository } from "./post.repository";
export declare class PostController {
    private readonly _repo;
    constructor(_repo: PostRepository);
    getAllPosts(): Promise<GetPostDto[]>;
    publishPost(id: number): Promise<GetPostDto>;
}
