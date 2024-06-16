import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import text from '../Navigation/text.js';
import sprite from '../../images/icons.svg';

const Navigation = () => {
  const navRef = useRef(null);
  const language = useSelector(state => state.language);

  return (
    <nav className={css.nav}>
      <svg width="44" height="30" className={css.mobMenuIcon}>
        <use href={`${sprite}#open-menu`}></use>
      </svg>
      <ul className={css.navMenu} ref={navRef}>
        <li className={css.navMenuItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${css.navMenuLink} ${isActive ? css.active : ''}`
            }
          >
            {text.homePage[language]}
          </NavLink>
        </li>
        <li className={css.navMenuItem}>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              `${css.navMenuLink} ${isActive ? css.active : ''}`
            }
          >
            {text.projects[language]}
          </NavLink>
        </li>
        <li className={css.navMenuItem}>
          <NavLink
            to="donation"
            className={({ isActive }) =>
              `${css.navMenuLink} ${isActive ? css.active : ''}`
            }
          >
            {text.donate[language]}
          </NavLink>
        </li>
        <li className={css.navMenuItem}>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${css.navMenuLink} ${isActive ? css.active : ''}`
            }
          >
            {text.contacts[language]}
          </NavLink>
        </li>
        <li className={css.navMenuItem}></li>
      </ul>
    </nav>
  );
};

export default Navigation;
