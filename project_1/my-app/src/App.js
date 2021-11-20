
import './App.css';
import Cont from './components/Content/Cont';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import Login, { LoginContainer } from './components/Content/login/login';

const App = (props) => {

  return (

    <div className = 'app_wrapper' >
      <HeaderContainer />
      <div className='cont'>
        <Route path='/profile/:userId?' render={() => <Cont />} />
        <Route path='/dialogs' render={() => < DialogsContainer />}/>
        <Route path='/users' render={() => < UsersContainer />}/>
        <Route path='/login' render={() => < LoginContainer />}/>
      </div>
      <Footer />
    </div>

  );
}

export default App;
