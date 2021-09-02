import Newpost from './Newpost';
import stl from './Posts.module.css';


const Posts = (props) => {
  let postElem = props.posts.map (m =>  <Newpost message={m.post} likes = {m.likes}/> )
  return (
    <div className={stl.posts_wrapper}>
      <h2 className={stl.posts_wrapper_myposts}>My posts</h2>
      <textarea className={stl.posts_wrapper_textarea} id="post" name="post" placeholder="My news">
      </textarea>
      <div className={stl.posts_wrapper_button}>
        <button >Send</button>
      </div>
       {postElem}
    </div>
);
}

export default Posts;