import Newpost from './Newpost';
import stl from './Posts.module.css';
import React from 'react';

const Posts = (props) => {
  let postElem = props.posts.map(m => <Newpost message={m.post} likes={m.likes} />)
  let addPosts = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };
  let newPostElement = React.createRef();
  
  return (
    <div className={stl.posts_wrapper}>
      <h2 className={stl.posts_wrapper_myposts}>My posts</h2>
      <textarea ref = {newPostElement} className={stl.posts_wrapper_textarea} id="post" name="post" placeholder="My news">
      </textarea>
      <div className={stl.posts_wrapper_button}>
        <button onClick={addPosts} >Send</button>
      </div>
       {postElem}
    </div>
);
}

export default Posts;