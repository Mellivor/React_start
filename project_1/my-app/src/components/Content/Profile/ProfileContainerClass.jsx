import React from "react";
import ProfileYou from "./ProfileYou";
import * as axios from 'axios'



class ProfileContainerClass extends React.Component {
    componentDidMount() {
            axios.get('https://social-network.samuraijs.com/api/1.0/profile/07024')
                .then(response => {
                    this.props.setUserProfile(response.data);
                    console.log(response.data);
                });
    }

    render() {
        return <ProfileYou {...this.props}/>
    }
}


export default ProfileContainerClass;
