import stl from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
<footer className ={stl.footer}>
        prof
      <NavLink to="#">blablabla</NavLink>
        mess
      
</footer>
);
}

export default Nav;