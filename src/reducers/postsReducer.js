import { ADD_POST, ADD_POSTS } from "../actions/actionTypes";

const _defaultState = []

const postsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state]
    case ADD_POSTS:
      return [...action.payload, ...state]
    default: 
      return state;
  }
};

export default postsReducer;
