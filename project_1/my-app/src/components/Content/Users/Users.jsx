import UserItem from './UserItem';
import stl from './Users.module.css';

let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];

    let pagesPpackage = props.pageList*10

    for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
    };

    let userItems = props.usersList.map(u => <UserItem follow={props.follow} unFollow={props.unFollow}
        id={u.id} followed={u.followed} key={u.id} name={u.name} birdthDate={u.birdthDate} sity={u.sity} education={u.education} webSite={u.webSite} />);

        let pageList = pages.slice(pagesPpackage-10, pagesPpackage).map(p => <span key={p} className={props.currentPage === p ? stl.selectedPage : undefined}
            onClick={() => props.onPageChanged(p)}>{p} </span>);
    return (
        <div>
            {userItems}

            {pageList}
            <div>
                {props.pageList > 1 ? <button onClick={props.previousPagesList} >Previous 20 lists</button> : undefined}
                <button onClick={ props.nextPagesList } >Next 20 lists</button>
            </div>

        </div >
    );


}

export default Users;
