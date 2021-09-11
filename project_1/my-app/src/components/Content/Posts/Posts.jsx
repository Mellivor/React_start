import Newpost from './Newpost';
import stl from './Posts.module.css';
import React from 'react';
import { actionCreaterAddPost, actionCreaterUpdatePost } from '../../../redux/profilePage_reducer';


const Posts = (props) => {
  let postElem = props.posts.map(m => <Newpost message={m.post} likes={m.likes} />)
  let addPosts = () => {
    props.dispatch(actionCreaterAddPost());
  };
  
  let newPostElement = React.createRef();
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(actionCreaterUpdatePost(text));
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