import Avatar from './Avatar/Avatar';
import stl from './Profile.module.css';


const Profile = () => {
  return (
    <div className={stl.profile}>
      <Avatar/>
      <div className={stl.text}>
        <h2 className={stl.name}>
          Vasya ertertertert
        </h2>
        <div>Data of birdth:</div>
        <div>Cyty</div>
        <div>Education</div>
        <div>Web site:</div>
      </div>
    </div>
);
}

export default Profile;