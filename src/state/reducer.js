import { LIKE_POST , UNLIKE_POST } from "./actionTypes";

const initialState = {
    likedPost: [],
};

const rootReducer = (state=initialState , action) => {
    switch (action.type) {
        case LIKE_POST:
            return{
                ...state,
                likedPost:[...state.likedPost,action.postId]
            };
        case UNLIKE_POST:
            return {
                ...state,
                likedPost:state.likedPost.filter((postId) => postId !== action.postId),
            };
        default:
            return state;      
    }
}

export default rootReducer;