import stl from './Header.module.css';
import Herb from './Herb';
const Header = () => {
  return (
    <header className={stl.header}>
      <nav className={stl.top_nav}>
        <a href="#"><Herb /></a>
        <a className={stl.linnks} href="#"><div >Profile.</div></a>
        <a className={stl.linnks} href="#"><div >Messages.</div></a>
        <a className={stl.linnks} href="#"><div >News.</div></a>
        <a className={stl.linnks} href="#"><div >Music.</div></a>
        <a className={stl.linnks} href="#"><div >Setings.</div></a>
      </nav>
    </header>
);
}

export default Header;