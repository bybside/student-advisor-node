"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const get_post_dto_1 = require("./dto/get-post.dto");
const post_repository_1 = require("./post.repository");
let PostController = class PostController {
    constructor(_repo) {
        this._repo = _repo;
    }
    async getAllPosts() {
        const posts = await this._repo.getAllPosts();
        return posts.map((p) => new get_post_dto_1.GetPostDto(p));
    }
    async publishPost(id) {
        const publishedPost = await this._repo.publishPost(id);
        return new get_post_dto_1.GetPostDto(publishedPost);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Patch)("publish/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "publishPost", null);
PostController = __decorate([
    (0, common_1.Controller)("posts"),
    __metadata("design:paramtypes", [post_repository_1.PostRepository])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map