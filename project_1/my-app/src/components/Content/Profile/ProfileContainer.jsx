import { connect } from "react-redux";
import ProfileYou from "./ProfileYou";
const mapStateToUserProps = (state) => {
    console.log(state.profilePage.usersList);
    return {
        profilePage: state.profilePage.usersList[0]
    }
};

const ProfileContainer = connect(mapStateToUserProps)(ProfileYou);

export default ProfileContainer;
