import Avatar from './Avatar/Avatar';
import stl from './Profile.module.css';
import ProfileStatus from './ProfileStatus';


const Profile = (props) => {
  return (
    <div className={stl.profile}>
      <Avatar src={props.src} />
          <div className={stl.text}>
        <ProfileStatus status ='hello'/>
        <h2 className={stl.name}>
          {props.name}
        </h2>
            {!props.aboutMe ?undefined:<div>About me:   {props.aboutMe}</div>}
            {!props.contacts.facebook ?undefined:<div>facebook:   {props.contacts.facebook}</div>}
            {!props.contacts.website ?undefined:<div>website:   {props.contacts.website}</div>}
            {!props.contacts.vk ?undefined:<div>vk:   {props.contacts.vk}</div>}
            {!props.contacts.twitter ?undefined:<div>twitter:   {props.contacts.twitter}</div>}
            {!props.contacts.instagram ?undefined:<div>instagram:   {props.contacts.instagram}</div>}
      </div>
    </div>
);
}

export default Profile;
