import Preloader from '../Comon/Preloader/preloader';
import Profile from './Profile';

const ProfileYou = (props) => {

    return (
        !props.profilePage ? <Preloader /> : (
            <Profile
                src={props.profilePage.photos.large}
                id={props.profilePage.userId}
                key={props.profilePage.userId}
                name={props.profilePage.fullName}
                aboutMe={props.profilePage.aboutMe}
                contacts={props.profilePage.contacts}
            />)

);
}

export default ProfileYou;
// aboutMe: "я круто чувак 1001%"
// contacts: {facebook: 'facebook.com', website: null, vk: 'vk.com/dimych', twitter: 'https://twitter.com/@sdf', instagram: 'instagra.com/sds', …}
// fullName: "samurai dimych"
// lookingForAJob: true
// lookingForAJobDescription: "не ищу, а дурачусь"
// photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0', large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'}
// userId: 2
