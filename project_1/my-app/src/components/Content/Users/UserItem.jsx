import Avatar from "../Profile/Avatar/Avatar";
import stl from './UserItem.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'


const UserItem = (props) => {

  return (
    <div className={stl.profile}>
        <div className = {stl.avaButton}>
              <NavLink to={`/profile/${props.id}`} >
                    <Avatar src={props.src} />
              </NavLink>
            <div className = {stl.button}>
                  {props.followed ?
                      <button onClick={() => {
                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                              {
                                  withCredentials: true,
                                  headers: { 'API-KEY': '8475436c-fdbb-4932-80c1-47139984e4a1' }
                              })
                              .then(response => {
                                  console.log(response.data)
                                  if (response.data.resultCode === 0) {
                                      props.unFollow(props.id)
                                    }
                                })

                            }} >Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},
                                    {
                                        withCredentials: true,
                                        headers: {'API-KEY': '8475436c-fdbb-4932-80c1-47139984e4a1'}
                                    })
                                .then(response => {
                                    console.log(response.data)
                                    if (response.data.resultCode === 0) {
                                        props.follow(props.id)
                                    }
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
