import stl from './Cont.module.css';
import Profile from './Profile/Profile';
import Gearlogo from './Gearlogo/Gearlogo';
import MyPostsContainer from './Posts/MyPostsContainer';

const Cont = (props) => {
  return (
    <div className={stl.cont}>
      <Gearlogo/>
      <Profile />
      <MyPostsContainer />
      {/* <Posts state={props.state} newPostText={props.state.newPostText} dispatch = {props.dispatch}/> */}
  </div>
);
}

export default Cont;
