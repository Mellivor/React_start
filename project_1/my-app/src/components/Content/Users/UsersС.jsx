import React from 'react';
import { userAPI } from '../../../API/API';
import Users from './Users';

class UsersC extends React.Component {

    componentDidMount() {
        this.props.setloading()

                userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                    this.props.setUsers(response.items);
                    this.props.setTotalUsersCount(response.totalCount);
                    console.log(response.items.photos)
                    this.props.setloaded()
                });
        }

    onPageChanged = (p) => {
        this.props.setloading()
        this.props.setCurrentPage(p)
            userAPI.getUsers(p, this.props.pageSize).then(response => {
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
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
                changingStatus={this.props.changingStatus}
                loadedButtons={this.props.loadedButtons}
                togleIsFolowingAC={this.props.togleIsFolowingAC}
            />)
}
}

export default UsersC;
