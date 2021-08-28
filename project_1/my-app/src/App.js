
import './App.css';
import Cont from './components/Content/Cont';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className = 'app_wrapper' >
      <Header />
      <div className='cont'> 
        <Route path='/profile' component={Cont} />
          <Route path='/dialogs' component={Dialogs} />
      </div>
      <Nav />
    </div>  
    </BrowserRouter>
  );
}

export default App;
