import { connect } from "react-redux";
import { FollowAc, SetUsersAc, UnfollowAc } from "../../../redux/usersPage_reducer";
import UsersC from "./UsersС";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList.usersList
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
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
