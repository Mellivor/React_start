import { connect } from "react-redux";
import ProfileContainerClass from "./ProfileContainerClass";
import { setUserProfile } from "../../../redux/profilePage_reducer";

const mapStateToUserProps = (state) => {
    return {
        profilePage: state.profilePage.userok
    }
};

const ProfileContainer = connect(mapStateToUserProps, {setUserProfile})(ProfileContainerClass);

export default ProfileContainer;
