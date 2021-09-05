import Newpost from './Newpost';
import stl from './Posts.module.css';
import React from 'react';

const Posts = (props) => {
  let postElem = props.posts.map(m => <Newpost message={m.post} likes={m.likes} />)
  let addPosts = () => {
    props.addPost();
  };
  let newPostElement = React.createRef();
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.uppdatePost(text);
  };
  return (
    <div className={stl.posts_wrapper}>
      <h2 className={stl.posts_wrapper_myposts}>My posts</h2>
      <textarea ref={newPostElement} onChange={ onPostChange } className={stl.posts_wrapper_textarea} value={ props.newPostText}/>
      <div className={stl.posts_wrapper_button}>
        <button onClick={addPosts} >Send</button>
      </div>
       {postElem}
    </div>
);
}

export default Posts;