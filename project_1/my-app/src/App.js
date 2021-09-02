
import './App.css';
import Cont from './components/Content/Cont';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className = 'app_wrapper' >
      <Header dialog = {props.dialog}/>
      <div className='cont'> 
          <Route path='/profile' render={() => <Cont post = {props.posts} />} />
        <Route path='/dialogs' render ={ () => < Dialogs dialog = {props.dialog}  message = {props.message}/> } />
      </div>
      {console.log(props)}
      <Nav />
    </div>  
    </BrowserRouter>
  );
}

export default App;
