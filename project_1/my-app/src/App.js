
import React from "react";
import './App.css';
import Cont from './components/Content/Cont';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, withRouter } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import { LoginContainer } from './components/Content/login/login';
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app_reducer";
import Preloader from "./components/Content/Comon/Preloader/preloader";


class App extends React.Component {
    // const App = (props) => {
    componentDidMount() {
        this.props.initializeApp();
    }



    render() {
        if (!this.props.authorized) {
            return <Preloader />
        }
        return (

            <div className='app_wrapper' >
                <HeaderContainer />
                <div className='cont'>
                    <Route path='/profile/:userId?' render={() => <Cont />} />
                    <Route path='/dialogs' render={() => < DialogsContainer />} />
                    <Route path='/users' render={() => < UsersContainer />} />
                    <Route path='/login' render={() => < LoginContainer />} />
                </div>
                <Footer />
            </div>

        );
    }
};

const mapStateToUserProps = (state) => {
    return {
    id:state.auth.id,
    login:state.auth.login,
    authorized:state.app.authorized,
    }
}
export default compose(
    withRouter,
    connect(mapStateToUserProps, { initializeApp }))(App);
