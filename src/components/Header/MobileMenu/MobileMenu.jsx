import css from './MobileMenu.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import sprite from '../../../images/icons.svg';
import { useState } from 'react';

const MobileMenu = () => {
  const language = useSelector(state => state.language);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainPage =
    language === 'de' ? 'Startseite' : language === 'ua' ? 'Головна' : 'Main';
  const projectsPage =
    language === 'de' ? 'Projekte' : language === 'ua' ? 'Проєкти' : 'Projects';
  const contactsPage =
    language === 'de'
      ? 'Kontakte'
      : language === 'ua'
      ? 'Контакти'
      : 'Contacts';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <button
        type="button"
        className={css.openMobMenuBtn}
        onClick={toggleMobileMenu}
      >
        <svg width="40" height="30" className={css.openMobMenuIcon}>
          <use href={`${sprite}#open-menu`}></use>
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div
          className={`${css.mobMenu} ${isMobileMenuOpen ? 'is-hidden' : ''}`}
        >
          <button
            type="button"
            className={css.closeMobMenuBtn}
            onClick={toggleMobileMenu}
          >
            <svg width="40" height="40" className={css.closeMobMenuIcon}>
              <use href={`${sprite}#close-menu`}></use>
            </svg>
          </button>
          <nav className={css.mobMenuNav}>
            <NavLink className={css.mobMenuLink} to="/startseite">
              {mainPage}
            </NavLink>
            <NavLink className={css.mobMenuLink} to="/projekte">
              {projectsPage}
            </NavLink>
            <NavLink className={css.mobMenuLink} to="/kontakte">
              {contactsPage}
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
