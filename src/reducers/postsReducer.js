import { ADD_POST, ADD_POSTS } from "../actions/actionTypes";

const initialState = {
  posts: []
};

const postsReducer = (state = initialState, action) => {
  let newState = { ...state };

  if (action.type === ADD_POST) {
    newState.posts = newState.posts.concat(action.payload);
  }
  if (action.type === ADD_POSTS) {
    newState.posts = [...newState.posts, ...action.payload];
  }

  return newState;
};

export default postsReducer;
