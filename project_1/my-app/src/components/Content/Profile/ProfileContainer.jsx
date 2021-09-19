import { connect } from "react-redux";
import ProfileYou from "./ProfileYou";
const mapStateToUserProps = (state) => {
    console.log(state.usersList.usersList[0]);
    return {
        profilePage: state.usersList.usersList[0]
    }
};

const ProfileContainer = connect(mapStateToUserProps)(ProfileYou);

export default ProfileContainer;
