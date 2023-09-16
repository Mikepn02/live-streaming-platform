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
                        unlikes:post.unlikes + 1
                    }
                }
                return post
            })
            state.posts = updatedLikedPosts
        },
        decrementLike: (state , action) => {
            const { postId } = action.payload;
            const updatedLikedPosts = state.posts.map((post) => {
              if(post.postId === postId && post.likes > 0){
                 return {
                     ...post,
                     isLiked: true,
                     likes:post.likes - 1,
                 } 
              }
              return post
            });
            state.posts = updatedLikedPosts
         },
        decrementUnlike: (state , action) => {
            const { postId } = action.payload;
            const updatedLikedPosts = state.posts.map((post) => {
                if(post.postId === postId && post.unlikes > 0){
                    return {
                        ...post,
                        isLiked: true,
                        unlikes:post.unlikes -1
                    }
                }
                return post
            });
            state.posts = updatedLikedPosts;
        }
    }
})

export const { likePost , unlikePost ,decrementLike , decrementUnlike} = authSlice.actions;
export default authSlice.reducer;