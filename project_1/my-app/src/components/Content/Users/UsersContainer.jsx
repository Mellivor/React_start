import { connect } from "react-redux";
import { CurrentPageAc, FollowAc, SetUsersAc, totalUsersCountAc, UnfollowAc } from "../../../redux/usersPage_reducer";
import UsersC from "./UsersС";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList.usersList,
        pageSize: state.usersList.pageSize,
        totalUsers: state.usersList.totalUsers,
        currentPage: state.usersList.currentPage

    }
};
// let users = {};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
                dispatch(FollowAc(userId));
        },

        unFolov: (userId) => {
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
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
