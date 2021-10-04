import { connect } from "react-redux";
import { CurrentPageAc, FollowAc, SetNextPagesAc, SetPreviousPagesAc, SetUsersAc, stateIsLoadedAc, stateIsLoadingAc, totalUsersCountAc, UnfollowAc } from "../../../redux/usersPage_reducer";
import UsersC from "./UsersС";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList.usersList,
        pageSize: state.usersList.pageSize,
        totalUsers: state.usersList.totalUsers,
        currentPage: state.usersList.currentPage,
        pageList: state.usersList.pageList,
        loaded: state.usersList.loaded
    }
};


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
        },

        setloading: () => {
                dispatch(stateIsLoadingAc());
        },

        setloaded: () => {
                dispatch(stateIsLoadedAc());
        },

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
