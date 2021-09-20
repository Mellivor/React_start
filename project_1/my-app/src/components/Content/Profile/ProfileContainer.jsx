import { connect } from "react-redux";
import ProfileYou from "./ProfileYou";
const mapStateToUserProps = (state) => {
    return {
        profilePage: state.profilePage.userok
    }
};

const ProfileContainer = connect(mapStateToUserProps)(ProfileYou);

export default ProfileContainer;
