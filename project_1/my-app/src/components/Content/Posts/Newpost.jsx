import stl from './Newpost.module.css';
const Newpost = (props) => {
  return (
      <div className={stl.posts_wrapper_post}>
        <div className={stl.posts_wrapper_post_circle}>
        </div>
        <div className={stl.posts_wrapper_post_text}>
        
        {props.message}
      </div>
      <p>likes: {props.likescount}</p>
      </div>
);
}

export default Newpost;