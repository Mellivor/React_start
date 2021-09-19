import { connect } from "react-redux";
import { FollowAc, SetUsersAc, UnfollowAc } from "../../../redux/usersPage_reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList.usersList
    }
};
// let users = {};

const mapDispatchToProps = (dispatch) => {
    return {
        folow: (userId) => {
                dispatch(FollowAc(userId));
        },

        unFolov: (userId) => {
                dispatch(UnfollowAc(userId));
        },

        setUsers: (users) => {
                dispatch(SetUsersAc(users));
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
