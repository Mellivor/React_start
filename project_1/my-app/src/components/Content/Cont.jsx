import stl from './Cont.module.css';
import Profile from './Profile';
import Posts from './Posts/Posts';
import Dialogs from '../Dialogs/Dialogs';
const Cont = () => {
  return (
  <div className={stl.cont}>
      <div className = {stl.gears_place}>
        <img className={stl.imag_set} src='https://evolution.skf.com/wp-content/uploads/sites/5/2020/08/gears-top-image.jpg'></img>
      </div>
      <Profile />
      <Posts/>
           
  </div>
          
    
);
}

export default Cont;