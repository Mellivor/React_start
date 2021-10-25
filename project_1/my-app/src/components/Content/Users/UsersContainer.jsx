import { connect } from "react-redux";
import { compose } from "redux";
import { widthAuthRedirect } from "../../../HOC/WithAuthRedirect";
import {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount,
    nextPagesList, previousPagesList, setloading, setloaded,
    updateStatusAC, togleIsFolowingAC, getUsers,
} from "../../../redux/usersPage_reducer";
import UsersC from "./UsersС";


const mapStateToProps = (state) => {
    return {
        usersList: state.usersList.usersList,
        pageSize: state.usersList.pageSize,
        totalUsers: state.usersList.totalUsers,
        currentPage: state.usersList.currentPage,
        pageList: state.usersList.pageList,
        loaded: state.usersList.loaded,
        changingStatus: state.usersList.changingStatus,
        loadedButtons: state.usersList.loadedButtons,
    }
};


const UsersContainer = compose(
    connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage,setTotalUsersCount, nextPagesList,
    previousPagesList, setloading, setloaded, updateStatusAC, togleIsFolowingAC, getUsers}),
    widthAuthRedirect
)(UsersC);

export default UsersContainer;
