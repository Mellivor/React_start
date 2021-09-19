import Profile from "../Profile/Profile"


const Users = (props) => {

    let usersItem = props.usersList.map( u => <Profile id={u.id} key={u.id} name = {u.name} birdthDate = {u.birdthDate} sity = {u.sity} education = {u.education} webSite = {u.webSite}/>);

    return (
    <div> {usersItem}</div>
    );
};

export default Users;
