import { connect } from "react-redux";
import { setUserProfile, profileRequest } from "../../../redux/profilePage_reducer";
import WithRouterComponent from "./ProfileContainerClass";

const mapStateToUserProps = (state) => {
    return {
        profilePage: state.profilePage.userok
    }
};

const ProfileContainer = connect(mapStateToUserProps, {setUserProfile, profileRequest})(WithRouterComponent);

export default ProfileContainer;
