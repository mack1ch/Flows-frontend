import { IPost } from "@/shared/interface/post";

export function checkIfUserLiked(post: IPost | null | undefined, userID: number): boolean {
    if (!post) return false;
    return post.user_likes.includes(userID);
}