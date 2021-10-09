import { connect } from "react-redux";
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, nextPagesList,previousPagesList, setloading, setloaded,} from "../../../redux/usersPage_reducer";
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


// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//                 dispatch(follow(userId));
//         },

//         unFollow: (userId) => {
//                 dispatch(unFollow(userId));
//         },

//         setUsers: (users) => {
//                 dispatch(setUsers(users));
//         },

//         setCurrentPage: (currentPage) => {
//                 dispatch(setCurrentPage(currentPage));
//         },

//         setTotalUsersCount: (totalUsers) => {
//                 dispatch(setTotalUsersCount(totalUsers));
//         },

//         nextPagesList: () => {
//                 dispatch(nextPagesList());
//         },

//         previousPagesList: () => {
//                 dispatch(previousPagesList());
//         },

//         setloading: () => {
//                 dispatch(setloading());
//         },

//         setloaded: () => {
//                 dispatch(setloaded());
//         },

//     }
// };


const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage,setTotalUsersCount, nextPagesList,
    previousPagesList, setloading, setloaded,
})(UsersC);

export default UsersContainer;
