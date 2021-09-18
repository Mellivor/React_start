import Newpost from './Newpost';
import stl from './Posts.module.css';


const Posts = (props) => {


  let postElem = props.posts.posts.map(m => <Newpost message={m.post} likes={m.likes} />)
  let postsAdd = () => {
      props.addPost();
  };



  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };
  return (
    <div className={stl.posts_wrapper}>
      <h2 className={stl.posts_wrapper_myposts}>My posts</h2>
      <textarea onChange={ onPostChange } className={stl.posts_wrapper_textarea} value={ props.posts.newPostText }/>
      <div className={stl.posts_wrapper_button}>
        <button onClick={postsAdd} >Send</button>
      </div>
       {postElem}
    </div>
);
}

export default Posts;
