import React from "react";
import ProfileYou from "./ProfileYou";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { setUserProfile, profileRequest } from "../../../redux/profilePage_reducer";

class ProfileContainerClass extends React.Component {

    componentDidMount() {
        this.props.profileRequest(this.props.match.params.userId);
    }



    render() {
        return <ProfileYou {...this.props}/>
    }
}

// compose(

//     withRouter
// )(ProfileContainerClass)

// let WithRouterComponent = withRouter(ProfileContainerClass);

// export default compose(withRouter)(ProfileContainerClass);
// export default WithRouterComponent;


const mapStateToUserProps = (state) => {
    return {
        profilePage: state.profilePage.userok
    }
};

const ProfileContainer = compose(
    connect(mapStateToUserProps, { setUserProfile, profileRequest }),
    withRouter
)(ProfileContainerClass);

    // connect(mapStateToUserProps, { setUserProfile, profileRequest })(WithRouterComponent);

export default ProfileContainer;
