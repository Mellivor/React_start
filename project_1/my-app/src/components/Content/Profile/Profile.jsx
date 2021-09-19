import Avatar from './Avatar/Avatar';
import stl from './Profile.module.css';


const Profile = (props) => {
  return (
    <div className={stl.profile}>
      <Avatar/>
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

export default Profile;
