import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/profilePage_reducer";
import WithRouterComponent from "./ProfileContainerClass";

const mapStateToUserProps = (state) => {
    return {
        profilePage: state.profilePage.userok
    }
};

const ProfileContainer = connect(mapStateToUserProps, {setUserProfile})(WithRouterComponent);

export default ProfileContainer;
