import Avatar from "../Profile/Avatar/Avatar";
import stl from './UserItem.module.css';
import { NavLink } from 'react-router-dom';


const UserItem = (props) => {
  return (
    <div className={stl.profile}>
        <div className = {stl.avaButton}>
              <NavLink to={`/profile/${props.id}`} >
                    <Avatar src={props.src} />
              </NavLink>
            <div className = {stl.button}>
                  {props.followed ?
                      <button onClick={() => { props.unFollow(props.id) }} >Unfollow</button>:
                      <button onClick={ () => { props.follow(props.id) } } >Follow</button>}
            </div>
        </div>
      <div className={stl.text}>
        <h2 className={stl.name}>
          {props.name}
        </h2>
            <div>Data of birdth:  {props.birdthDate }</div>
            <div>Cyty:  { props.sity }</div>
            <div>Education:   { props.education}</div>
            <div>Web site: {props.webSite }</div>
      </div>
    </div>
);
}

export default UserItem;
