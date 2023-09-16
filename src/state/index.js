import { createSlice } from "@reduxjs/toolkit";
import { Userpostinfo } from "../constants";


const initialState = {
    posts: Userpostinfo
};



export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        likePost: (state , action) => {
            const { postId } = action.payload;

           const updatedLikedPosts = state.posts.map((post) => {
             if(post.postId === postId){
                console.log("Hello")
                console.log(post)
                return {
                    ...post,
                    isLiked: true,
                    likes:post.likes + 1,
                } 
             }
             return post
           });
           state.posts = updatedLikedPosts
        },
        unlikePost:(state , action) => {
            const {postId} = action.payload;
            const updatedLikedPosts = state.posts.map((post) => {
                if(post.postId === postId){
                    return {
                        ...post,
                        isLiked: false,
                        likes:post.likes -1
                    }
                }
                return post
            })
            state.likedPosts = updatedLikedPosts
        }
    }
})

export const { likePost , unlikePost} = authSlice.actions;
export default authSlice.reducer;