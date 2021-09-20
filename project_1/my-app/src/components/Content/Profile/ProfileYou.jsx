import Profile from './Profile';

const ProfileYou = (props) => {
  return (
    <Profile id={props.profilePage.id} key={props.profilePage.id} name = {props.profilePage.name} birdthDate = {props.profilePage.birdthDate} sity = {props.profilePage.sity} education = {props.profilePage.education} webSite = {props.profilePage.webSite}/>
);
}

export default ProfileYou;
