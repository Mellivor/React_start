import UserItem from "./UserItem";



const Users = (props) => {
    let users = [
        { id: 1, name: 'Mila', followed: true, birdthDate: '22.05.2019', sity: 'Kamenets-Podolsky', education: 'Genius from birth', webSite: 'www.google.com' },
        { id: 5, name: 'Vasa', followed: false, birdthDate: '14.05.1999', sity: 'Lviv', education: 'none', webSite: 'www.???.?' },
        { id: 2, name: 'Peta', followed: false, birdthDate: '25.07.2000', sity: 'Yasina', education: 'none', webSite: 'www.???.?' },
        { id: 3, name: 'Lina', followed: true, birdthDate: '01.01.1000', sity: 'Balmorra', education: 'none', webSite: 'www.???.?' },
        { id: 4, name: 'Goga', followed: false, birdthDate: '07.07.0777', sity: 'Seyda Neen', education: 'none', webSite: 'www.???.?' },
    ];

    if (props.usersList.length === 0 ) {
        props.setUsers(users)
    }

    let usersItem = props.usersList.map( u => <UserItem folow = {props.folow}  unFolov  = {props.unFolov} id={u.id} followed= {u.followed} key={u.id} name = {u.name} birdthDate = {u.birdthDate} sity = {u.sity} education = {u.education} webSite = {u.webSite}/>);
console.log(props)
    return (
    <div> {usersItem}</div>
    );
};

export default Users;
