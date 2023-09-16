import { type } from "os";
import { LIKE_POST , UNLIKE_POST } from "./actionTypes";

export const likePost = (postId) => ({
    type: LIKE_POST,
    postId,
})

export const unlikePost = (postId) => ({
    type: UNLIKE_POST,
    postId,
})