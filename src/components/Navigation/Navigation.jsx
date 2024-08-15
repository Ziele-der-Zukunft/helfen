import React, { useRef, useMemo, useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import text from '../Navigation/text.js';
import sprite from '../../images/icons.svg';


const Navigation = ({ freeSpace }) => {
  const [visibleMenuItems, setVisibleMenuItems] = useState([]);
  const [hiddenMenuItems, setHiddenMenuItems] = useState([]);
  const language = useSelector((state) => state.language);
  const navRef = useRef(null);  // посилання на navMenu

  const menuItems = useMemo(() => 
    text.map((item) => ({
      to: item.path,
      text: item[language],
    })),
    [language]
  );

  useLayoutEffect(() => {
    if (navRef.current && menuItems.length > 0) {
      // Створюємо віртуальні елементи для перевірки розмірів
      const testContainer = document.createElement('div');
      testContainer.style.position = 'absolute';
      testContainer.style.visibility = 'hidden';
      testContainer.style.overflow = 'hidden';
      testContainer.style.whiteSpace = 'nowrap'; // Додаємо, щоб уникнути переносів
      document.body.appendChild(testContainer);

      let totalWidth = 0;
      const visibleItems = [];
      const hiddenItems = [];

      menuItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.style.display = 'inline-block';
        itemElement.style.padding = '5px 20px'; // Припускаємо, що padding = 5px 20px
        itemElement.style.boxSizing = 'border-box'; // Враховуємо padding і border у ширині
        itemElement.textContent = item.text;
        testContainer.appendChild(itemElement);
        
        const itemWidth = itemElement.getBoundingClientRect().width;

        console.log(`Item: ${item.text}, Width: ${itemWidth}, Total Width: ${totalWidth}, Free Space: ${freeSpace - totalWidth}`);

        if (totalWidth + itemWidth <= freeSpace) {
          visibleItems.push(item);
          totalWidth += itemWidth;
        } else {
          hiddenItems.push(item);
        }
      });

      // Оновлюємо стани
      setVisibleMenuItems(visibleItems);
      setHiddenMenuItems(hiddenItems);

      // Логування масивів
      console.log('%cNavigation | visibleItems:', 'color: green; font-weight: bold;', visibleItems);
      console.log('%cNavigation | hiddenItems:', 'color: red; font-weight: bold;', hiddenItems);
      
      // Прибираємо тестовий контейнер
      document.body.removeChild(testContainer);
    }
  }, [freeSpace, menuItems]);

  return (
    <nav className={css.nav} ref={navRef}>
      <svg width="44" height="30" className={css.mobMenuIcon}>
        <use href={`${sprite}#open-menu`}></use>
      </svg>
      <ul className={css.navMenu}>
        {visibleMenuItems.map((item, index) => 
          <li key={index} className={css.navMenuItem}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `${css.navMenuLink} ${isActive ? css.active : ''}`
              }
            >
              {item.text}
            </NavLink>
          </li>
        )}
        {hiddenMenuItems.length > 0 && (
          <li className={css.navMenuItem}>
            <div className={css.dropdown}>
              <button className={css.dropdownButton}>...</button>
              <ul className={css.dropdownMenu}>
                {hiddenMenuItems.map((item, index) => (
                  <li key={index} className={css.dropdownMenuItem}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `${css.navMenuLink} ${isActive ? css.active : ''}`
                      }
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;