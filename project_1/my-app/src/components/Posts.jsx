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
      <div className={stl.posts_wrapper_post}>
        <div className={stl.posts_wrapper_post_circle}>

        </div>
        <div className={stl.posts_wrapper_post_text}>
          Atlas, I started a real job!!!
        </div>
      </div>
      
      
    </div>
);
}

export default Posts;