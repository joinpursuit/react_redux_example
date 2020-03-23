import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addPosts } from "../actions/postActions";

const Posts = () => {
  const posts = useSelector(state => Object.values(state.posts));
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPosts = async () => {
      if (!posts.length) {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch(addPosts(res.data));
      }
    };
    fetchPosts()
  }, [])

  return (
    <>
    <Link to="/posts/new">Add New Post</Link>
    {posts.reverse().map(el => {
      return <li key={el.id}>{el.title}</li>;
    })}
  </>
  )

}

export default Posts;
