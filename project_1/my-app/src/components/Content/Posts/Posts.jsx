import Newpost from './Newpost';
import stl from './Posts.module.css';
const Posts = () => {
  return (
    <div className={stl.posts_wrapper}>
      <h2 className={stl.posts_wrapper_myposts}>My posts</h2>
      <textarea className={stl.posts_wrapper_textarea} id="post" name="post" placeholder="My news">
      </textarea>
      <div className={stl.posts_wrapper_button}>
        <button >Send</button>
      </div>
      <Newpost message="Atlas, I started a real job!!!" likescount="999" />
      <Newpost message="Second_post!!!" likescount="10" />
     
      
    </div>
);
}

export default Posts;