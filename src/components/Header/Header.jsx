import css from './Header.module.css';
import Navbar from 'components/Header/NavBar/NavBar';
import LangBar from 'components/Header/LangBar/LangBar';

const Header = () => {
  return (
    <div className={css.headerComponent}>
        <Navbar />
        <LangBar />
    </div>
  );
};
export default Header;
