import stl from './Newpost.module.css';
const Newpost = (props) => {
  return (
      <div className={stl.post}>
          <div className={stl.circle}>
          </div>
          <div className={stl.text}>
            {props.message}
          </div>
          <p>likes: {props.likes}</p>
      </div>
);
}

export default Newpost;