import React from "react";
import ProfileYou from "./ProfileYou";
import { withRouter } from "react-router";
import { userAPI } from "../../../API/API";


class ProfileContainerClass extends React.Component {

    componentDidMount() {
        this.props.profileRequest(this.props.match.params.userId);
    }



    render() {
        return <ProfileYou {...this.props}/>
    }
}


let WithRouterComponent = withRouter(ProfileContainerClass);

export default WithRouterComponent;
