import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToProps = (state) => {
    return {

        authorized:state.auth.authorized,
    }
};
export const widthAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.authorized) return <Redirect to='/login' />

            return < Component {...this.props} />
        }
    }
    let RedirectComponentConected =connect(mapStateToProps)(RedirectComponent)
    return RedirectComponentConected;
}
