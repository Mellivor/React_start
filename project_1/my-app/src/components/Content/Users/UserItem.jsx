import Avatar from "../Profile/Avatar/Avatar";
import stl from './UserItem.module.css';

const UserItem = (props) => {
    console.log(props)
  return (
    <div className={stl.profile}>
        <div className = {stl.avaButton}>
            <Avatar />
            <div className = {stl.button}>
                  {props.followed ?
                      <button onClick={() => { props.unFolov(props.id) }} >Unfollow</button>:
                      <button onClick={ () => { props.folow(props.id) } } >Follow</button>}
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
