
import './App.css';
import Cont from './components/Cont';
import Nav from './components/Nav';
import Header from './components/Header';



const App = () => {
  return (
    <div className = 'app_wrapper' >
      
      <Header />
      
      <Cont />
      <Nav />
    </div>  
    
  );
}

export default App;
