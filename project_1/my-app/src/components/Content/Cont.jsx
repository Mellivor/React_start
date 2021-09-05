import stl from './Cont.module.css';
import Profile from './Profile/Profile';
import Posts from './Posts/Posts';
import Gearlogo from './Gearlogo/Gearlogo';

const Cont = (props) => {
  return (
    <div className={stl.cont}>
      <Gearlogo/>
      <Profile />
      <Posts posts={props.state.posts} newPostText={props.state.nevPostText} addPost={props.addPost} uppdatePost={props.uppdatePost }/>
  </div>   
);
}

export default Cont;