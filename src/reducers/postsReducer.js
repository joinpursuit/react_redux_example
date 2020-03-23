import { ADD_POST, ADD_POSTS } from "../actions/actionTypes";

const _defaultState = {}

const normalize = (arr) => {
  arr = Array.isArray(arr) ? arr : Object.values(arr);
  let output = {};
  arr.forEach(el => {
    output[el.id] = el;
  })
  return output; 
}

const postsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_POST:
      return { ...{[action.payload.id]: action.payload }, ...state}
    case ADD_POSTS:
      return {...normalize(action.payload), ...normalize(state)}
    default: 
      return state;
  }
};

export default postsReducer;
