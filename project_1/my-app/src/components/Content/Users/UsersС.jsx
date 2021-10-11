import * as axios from 'axios'
import React from 'react';
import Users from './Users';

class UsersC extends React.Component {

    componentDidMount() {
        this.props.setloading()

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true})
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    console.log(response.data.items.photos)
                    this.props.setloaded()
                });
        }

    onPageChanged = (p) => {
        this.props.setloading()
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, { withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setloaded()

            })
    }
    render() {
        return (
            <Users
                loaded = {this.props.loaded}
                totalUsers={this.props.totalUsers}
                usersList={this.props.usersList}
                // follow={this.followApi.bind(UsersC)}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                nextPagesList={this.props.nextPagesList}
                previousPagesList={this.props.previousPagesList}
                pageList={this.props.pageList}

            />)
}
}

export default UsersC;
