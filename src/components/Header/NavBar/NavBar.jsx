import { useSelector } from 'react-redux';
import { Navbar, Link } from './NavBar.styled';

const NavBar = () => {
  const language = useSelector(state => state.language);
  return (
    <Navbar>
      <Link to="/startseite">
        {language === 'en'
          ? `Main`
          : language === 'ua'
          ? `Головна`
          : `Startseite`}
      </Link>
      <Link to="/projekte">{language === 'en'
          ? `Projects`
          : language === 'ua'
          ? `Проєкти`
          : `Projekte`}</Link>
      <Link to="/kontakte">{language === 'en'
          ? `Contacts`
          : language === 'ua'
          ? `Контакти`
          : `Kontakte`}</Link>
    </Navbar>
  );
};
export default NavBar;
