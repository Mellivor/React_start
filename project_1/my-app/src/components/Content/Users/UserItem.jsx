import Avatar from "../Profile/Avatar/Avatar";
import stl from './UserItem.module.css';
import { NavLink } from 'react-router-dom';
import { userAPI } from "../../../API/API";


const UserItem = (props) => {

  return (
    <div className={stl.profile}>
        <div className = {stl.avaButton}>
              <NavLink to={`/profile/${props.id}`} >
                    <Avatar src={props.src} />
              </NavLink>
            <div className = {stl.button}>
                  {props.followed ?
                      <button disabled = {props.loadedButtons.some(id => id === props.id)} onClick={() => {
                            props.togleIsFolowingAC(true, props.id)
                            userAPI.unfollow(props.id).then(response => {
                                if (response === 0) {
                                    props.unFollow(props.id)
                                }
                                props.togleIsFolowingAC(false, props.id)
                            })

                        }} >Unfollow</button> :
                        <button disabled = {props.loadedButtons.some(id => id === props.id)} onClick={() => {
                            props.togleIsFolowingAC(true, props.id)
                                userAPI.follow(props.id).then(response => {
                                    if (response === 0) {
                                        props.follow(props.id)
                                    }
                                    props.togleIsFolowingAC(false, props.id)
                                })

                      }} >Follow</button>}
            </div>
        </div>
      <div className={stl.text}>
        <h2 className={stl.name}>
          {props.name}
              </h2>
            <div>Id:  {props.id }</div>
      </div>
    </div>
);
}

export default UserItem;

// let followApi = (id) => {

//     }
// let unFollowApi = (id) =>{


// }
