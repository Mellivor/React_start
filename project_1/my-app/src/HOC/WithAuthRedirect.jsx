import React from 'react';
import { Redirect } from 'react-router';

export const widthAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.authorized) return <Redirect to='/login' />

            return < Component {...this.props} />
        }
    }
    return RedirectComponent;
}
