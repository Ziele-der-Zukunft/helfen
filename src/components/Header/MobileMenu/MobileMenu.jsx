import css from './MobileMenu.module.css';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import sprite from '../../../images/icons.svg';
import { useEffect, useRef, useState } from 'react';

const MobileMenu = () => {
  const language = useSelector(state => state.language);
  const location = useLocation();
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
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const backdropRef = useRef(null);

  const handleBackdropClick = event => {
    if (event.target === backdropRef.current) {
      toggleMobileMenu();
    }
  };
  
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

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
          className={css.backdrop}
          ref={backdropRef}
          onClick={handleBackdropClick}
        >
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
        </div>
      )}
    </>
  );
};

export default MobileMenu;
