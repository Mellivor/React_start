import React from "react";
import ProfileYou from "./ProfileYou";
import * as axios from 'axios'
import { withRouter } from "react-router";



class ProfileContainerClass extends React.Component {

    componentDidMount() {
        let userId
        !this.props.match.params.userId ? userId = '07024' : userId = this.props.match.params.userId
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data);
                    console.log(response.data);
                });
    }



    render() {
        return <ProfileYou {...this.props}/>
    }
}


let WithRouterComponent = withRouter(ProfileContainerClass);

export default WithRouterComponent;
