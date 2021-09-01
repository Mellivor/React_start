import Newpost from './Newpost';
import stl from './Posts.module.css';

let posts = [
    { id: 1, post: 'Atlas, I started a real job!!!', likes: 999},
    { id: 2, post: 'Second_post!!!', likes: 1},
    { id: 6, post: 'Third_post!!!', likes: -300},
];

let postElem = posts.map (m =>  <Newpost message={m.post} likes = {m.likes}/> )

const Posts = () => {
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