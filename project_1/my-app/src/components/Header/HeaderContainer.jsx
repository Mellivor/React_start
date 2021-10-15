import React from "react";
import Header from "./Header";
import { setloading, authorizedProfile, setUserProfile, login } from "../../redux/athor_reducer";
import { connect } from "react-redux";



class ClassHeaderContainer extends React.Component{

    componentDidMount() {
        login();
        // userAPI.login()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let { id, login, email } = response.data.data
        //             this.props.authorizedProfile(id, login, email)
        //         }
        //     });
    };

    render() {
       return <Header {...this.props} />
    };
}

const mapStateToUserProps = (state) => {
    return {
    id:state.auth.id,
    login:state.auth.login,
    authorized:state.auth.authorized,
    }
};

export default connect(mapStateToUserProps,{setloading, authorizedProfile, setUserProfile})(ClassHeaderContainer);
