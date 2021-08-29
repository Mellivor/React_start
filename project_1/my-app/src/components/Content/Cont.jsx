import stl from './Cont.module.css';
import Profile from './Profile/Profile';
import Posts from './Posts/Posts';

const Cont = () => {
  return (
  <div className={stl.cont}>
      <div className = {stl.gears}>
        <img className={stl.gearsimag} src='https://evolution.skf.com/wp-content/uploads/sites/5/2020/08/gears-top-image.jpg'></img>
      </div>
      <Profile />
      <Posts/>
           
  </div>
          
    
);
}

export default Cont;