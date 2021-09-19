import { connect } from "react-redux";
import Users from "./Users";

const mapStateToUsersProps = (state) => {
    return {
        usersList: state.usersList.usersList
    }
};

const UsersContainer = connect(mapStateToUsersProps)(Users);

export default UsersContainer;
