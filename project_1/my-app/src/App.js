
import './App.css';
import Cont from './components/Content/Cont';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';


const App = (props) => {

  return (
    
    <div className = 'app_wrapper' >
      <Header dialog={props.state.messagesPage.dialogs} />
      <div className='cont'> 
        <Route path='/profile' render={() => <Cont state={props.state.profilePage} addPost={props.addPost} uppdatePost={ props.uppdatePost}/>} />
          <Route path='/dialogs' render={() => < Dialogs state = {props.state.messagesPage} />} />
      </div>
      <Nav />
    </div>
    
  );
}

export default App;
