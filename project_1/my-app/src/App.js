
import './App.css';
import Cont from './components/Content/Cont';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';




const App = (props) => {
   
  return (
    
    <div className = 'app_wrapper' >
      <Header name={props.state.messagesPage.dialogs[0].name} />
      <div className='cont'>
        <Route path='/profile' render={() => <Cont
          state={props.state.profilePage}
          dispatch = {props.dispatch} />} />
        <Route path='/dialogs' render={() => < Dialogs
          state={props.state.messagesPage}
          dispatch = {props.dispatch}/>} />
      </div>
      <Nav />
    </div>
    
  );
}

export default App;
