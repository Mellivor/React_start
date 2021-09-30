import UserItem from './UserItem';
import * as axios from 'axios'
import React from 'react';
import stl from './UserC.module.css';

class UsersC extends React.Component {

    // constructor(props) {
        //     super(props);
        // }
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }




    onPageChanged = (p) => {
    this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                // this.props.setUsers(response.data.items);

            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

            return(
                <div>
                    {this.props.usersList.map(u => <UserItem folow={this.props.follow} unFolov={this.props.unFolov} id={u.id} followed={u.followed} key={u.id} name={u.name} birdthDate={u.birdthDate} sity={u.sity} education={u.education} webSite={u.webSite} />)}
                    {pages.map(p => {
                        return <span key = {p} className={this.props.currentPage === p && stl.selectedPage}
                            onClick={() => this.onPageChanged(p) }>{p}, </span>

                    })}
        </div>
    );
}
}

export default UsersC;
