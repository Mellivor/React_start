import { NavLink } from 'react-router-dom';
import stl from './Header.module.css';
import Herb from './Herb';
const Header = () => {
  return (
    <header className={stl.header}>
      <nav className={stl.top_nav}>
        <a href="#"><Herb className = {stl.img} /></a>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/dialogs"><div >Messages.</div></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/profile"><div >Profile.</div></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/news"><div >News.</div></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/music"><div >Music.</div></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/setings"><div >Setings.</div></NavLink>
      </nav>
    </header>
);
}

export default Header;