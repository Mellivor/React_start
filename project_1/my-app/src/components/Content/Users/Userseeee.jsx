import UserItem from './UserItem';
import * as axios from 'axios'


const Userssssss = (props) => {
    // let users = [
    //     { id: 1, name: 'Mila', followed: true, birdthDate: '22.05.2019', sity: 'Kamenets-Podolsky', education: 'Genius from birth', webSite: 'www.google.com' },
    //     { id: 5, name: 'Vasa', followed: false, birdthDate: '14.05.1999', sity: 'Lviv', education: 'none', webSite: 'www.???.?' },
    //     { id: 2, name: 'Peta', followed: false, birdthDate: '25.07.2000', sity: 'Yasina', education: 'none', webSite: 'www.???.?' },
    //     { id: 3, name: 'Lina', followed: true, birdthDate: '01.01.1000', sity: 'Balmorra', education: 'none', webSite: 'www.???.?' },
    //     { id: 4, name: 'Goga', followed: false, birdthDate: '07.07.0777', sity: 'Seyda Neen', education: 'none', webSite: 'www.???.?' },
    // ];
    let uppdate = () => {
        if (props.usersList.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // debugger;
            props.setUsers(response.data.items);
        })

            // 'API-KEY':8475436c-fdbb-4932-80c1-47139984e4a1
        //
    }
     };


    let usersItem = props.usersList.map( u => <UserItem folow = {props.folow}  unFollow  = {props.unFollow} id={u.id} followed= {u.followed} key={u.id} name = {u.name} birdthDate = {u.birdthDate} sity = {u.sity} education = {u.education} webSite = {u.webSite}/>);
console.log(props)
    return (
        <div> {usersItem}
        <button onClick = {uppdate}>Uppdate</button>
        </div>
    );
};

export default Userssssss;
