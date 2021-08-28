import stl from './Profile.module.css';
const Profile = () => {
  return (
    <div className={stl.profile_wrapper}>
      <div className={stl.profile_wrapper_icon_wrapp}>
        <img className={stl.profile_wrapper_icon} src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="Profile icon" />
      </div>
      <div className={stl.profile_wrapper_text}>
        <h2 className={stl.profile_wrapper_text_name}>
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