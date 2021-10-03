import { connect } from "react-redux";
import { CurrentPageAc, FollowAc, SetNextPagesAc, SetPreviousPagesAc, SetUsersAc, totalUsersCountAc, UnfollowAc } from "../../../redux/usersPage_reducer";
import UsersC from "./UsersС";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList.usersList,
        pageSize: state.usersList.pageSize,
        totalUsers: state.usersList.totalUsers,
        currentPage: state.usersList.currentPage,
        pageList: state.usersList.pageList
    }
};
// let users = {};


const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
                dispatch(FollowAc(userId));
        },

        unFollow: (userId) => {
                dispatch(UnfollowAc(userId));
        },

        setUsers: (users) => {
                dispatch(SetUsersAc(users));
        },

        setCurrentPage: (currentPage) => {
                dispatch(CurrentPageAc(currentPage));
        },

        setTotalUsersCount: (totalUsers) => {
                dispatch(totalUsersCountAc(totalUsers));
        },

        nextPagesList: () => {
                dispatch(SetNextPagesAc());
        },

        previousPagesList: () => {
                dispatch(SetPreviousPagesAc());
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
