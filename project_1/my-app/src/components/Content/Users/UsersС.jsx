import * as axios from 'axios'
import React from 'react';
import Users from './Users';

class UsersC extends React.Component {

    // constructor(props) {
        //     super(props);
        // }
    componentDidMount() {
        this.props.setloading()

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setloaded()
                    console.log(response.data.items.photos)
                    // console.log(response.data.items.photos.large)
                });
        }




    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.props.setloading()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
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
