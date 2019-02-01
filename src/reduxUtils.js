import { addPost, addPosts } from "./actions/postActions";

export const mapStateToProps = state => {
  return { posts: state.postsReducer.posts };
};

export const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addPost(post)),
    addPosts: posts => dispatch(addPosts(posts))
  };
};
