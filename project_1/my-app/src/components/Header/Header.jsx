import { NavLink } from 'react-router-dom';
import stl from './Header.module.css';
import Logo from './Logo/Logo';

const Header = (props) => {
    console.log(props)
    debugger;
  return (
    <header className={stl.header}>
      <nav className={stl.nav}>
        <NavLink to="/home"><Logo/></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/dialogs"><div >Messages.</div></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/news"><div >News.</div></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/music"><div >Music.</div></NavLink>
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/users"><div >Users.</div></NavLink>
            {props.authorized ?
        <NavLink className={stl.linnks} activeClassName={stl.active} to={`/profile/${props.id}`}><div >{props.login}.</div></NavLink>:
        <NavLink className={stl.linnks} activeClassName={stl.active} to="/login"><div >Login.</div></NavLink>
            }
      </nav>

    </header>
);
}

export default Header;
