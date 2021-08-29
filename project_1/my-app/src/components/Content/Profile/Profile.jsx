import stl from './Profile.module.css';
const Avatar = () => {
  return (
      <div>
        <img className={stl.awatar} src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="Profile icon" />
      </div>
      
);
}
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