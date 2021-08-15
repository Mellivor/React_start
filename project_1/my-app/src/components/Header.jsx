import stl from './Header.module.css';
import Herb from './Herb';
const Header = () => {
  return (
    <header className={stl.header}>
      <nav className={stl.top_nav}>
        <a href="#"><Herb /></a>
        <a href="#"><div>Profile</div></a>
        <a href="#"><div>Mellages</div></a>
        <a href="#"><div>News</div></a>
        <a href="#"><div>Music</div></a>
        <a href="#"><div>Setings</div></a>
      </nav>
    </header>
);
}

export default Header;