
import './App.css';
import Cont from './components/Content/Cont';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';




const App = (props) => {

  return (
    
    <div className = 'app_wrapper' >
      <Header dialog={props.store._state.messagesPage.dialogs} />
      <div className='cont'>
        <Route path='/profile' render={() => <Cont
          state={props.store.getState()}
          // state={props.store._state.profilePage}
          dispatch = {props.store.dispatch.bind(props.store)} />} />
        <Route path='/dialogs' render={() => < Dialogs
          state={props.store.getState()}
          dispatch = {props.store.dispatch.bind(props.store)}/>} />
      </div>
      <Nav />
    </div>
    
  );
}

export default App;
