"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostDto = void 0;
class GetPostDto {
    constructor(post) {
        this.title = post.title;
        this.content = post.content;
        this.published = post.published;
        this.authorId = post.authorId;
    }
}
exports.GetPostDto = GetPostDto;
//# sourceMappingURL=get-post.dto.js.map