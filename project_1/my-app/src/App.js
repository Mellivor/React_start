
import './App.css';
import Cont from './components/Content/Cont';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';

const App = (props) => {

  return (

    <div className = 'app_wrapper' >
      <Header />
      <div className='cont'>
        <Route path='/profile/:userId?' render={() => <Cont />} />
        <Route path='/dialogs' render={() => < DialogsContainer />}/>
        <Route path='/users' render={() => < UsersContainer />}/>
      </div>
      <Footer />
    </div>

  );
}

export default App;
