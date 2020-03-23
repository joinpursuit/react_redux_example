import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../actions/postActions";

const Form = () => {
  const [title, setTitle] = useState("")
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    dispatch(addPost({ title, id }))
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <button type="submit">Save</button>
      </div>
    </form>
  );
  
}

export default Form;
