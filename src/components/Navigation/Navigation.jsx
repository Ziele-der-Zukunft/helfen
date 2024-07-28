// import React, { 
//   // useEffect, useState, 
//   useRef,  useMemo } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import css from './Navigation.module.css';
// import text from '../Navigation/text.js';
// import sprite from '../../images/icons.svg';

// const Navigation = ({ isOverflowing }) => {
//   const language = useSelector((state) => state.language);
//   // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navRef = useRef(null);
//   // const moreButtonRef = useRef(null);

//   const menuItems = useMemo(() => 
//     text.map((item) => ({
//       to: item.path,
//       text: item[language],
//     })),
//     [language]
//   );

//   // useEffect(() => {
//   //   const updateMenuItems = () => {
//   //     if (!navRef.current || !moreButtonRef.current) {
//   //       return;
//   //     }

//   //     const navRect = navRef.current.getBoundingClientRect();
//   //     const navWidth = navRect.width;
//   //     const moreButtonWidth = moreButtonRef.current.getBoundingClientRect().width;

//   //     if (!isOverflowing) {
//   //       setMenuItemsState(menuItems.map(item => ({...item, visible: true})));
//   //       return;
//   //     }

//   //     const newMenuItemsState = [];
//   //     let totalWidth = 0;

//   //     for (let item of menuItems) {
//   //       const tempLi = document.createElement('li');
//   //       tempLi.className = css.navMenuItem;
//   //       tempLi.style.display = 'inline-block';

//   //       const tempNavLink = document.createElement('a');
//   //       tempNavLink.innerText = item.text;
//   //       tempLi.appendChild(tempNavLink);
//   //       navRef.current.appendChild(tempLi);

//   //       const itemWidth = tempLi.getBoundingClientRect().width;
//   //       navRef.current.removeChild(tempLi);

//   //       if (totalWidth + itemWidth + moreButtonWidth <= navWidth - 40) {
//   //         totalWidth += itemWidth;
//   //         newMenuItemsState.push({ ...item, visible: true });
//   //       } else {
//   //         newMenuItemsState.push({ ...item, visible: false });
//   //       }
//   //     }

//   //     setMenuItemsState(newMenuItemsState);
//   //   };

//   //   const rafUpdateMenuItems = () => {
//   //     requestAnimationFrame(updateMenuItems);
//   //   };

//   //   rafUpdateMenuItems();
//   //   window.addEventListener('resize', rafUpdateMenuItems);

//   //   return () => {
//   //     window.removeEventListener('resize', rafUpdateMenuItems);
//   //   };
//   // }, [menuItems, language, isOverflowing]);

//   // const handleMoreButtonClick = () => {
//   //   setIsDropdownOpen(!isDropdownOpen);
//   // };

//   return (
//     <nav className={css.nav} ref={navRef}>
//       <svg width="44" height="30" className={css.mobMenuIcon}>
//         <use href={`${sprite}#open-menu`}></use>
//       </svg>
//       <ul className={css.navMenu}>
//         {menuItems.map((item, index) => 
//             <li key={index} className={css.navMenuItem}>
//               <NavLink
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `${css.navMenuLink} ${isActive ? css.active : ''}`
//                 }
//               >
//                 {item.text}
//               </NavLink>
//             </li>
//         )}
//         {/* {menuItems.some(item => !item.visible) && (
//           <li className={css.navMenuItem} ref={moreButtonRef}>
//             <div className={css.moreMenu}>
//               <button
//                 className={css.moreButton}
//                 onClick={handleMoreButtonClick}
//               >
//                 ...
//               </button>
//               {isDropdownOpen && (
//                 <ul className={css.moreDropdown}>
//                   {menuItems.map((item, index) => 
//                     !item.visible ? (
//                       <li key={index} className={css.navMenuItem}>
//                         <NavLink
//                           to={item.to}
//                           className={({ isActive }) =>
//                             `${css.navMenuLink} ${isActive ? css.active : ''}`
//                           }
//                         >
//                           {item.text}
//                         </NavLink>
//                       </li>
//                     ) : null
//                   )}
//                 </ul>
//               )}
//             </div>
//           </li>
//         )} */}
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;



import React, { useRef, useMemo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import text from '../Navigation/text.js';
import sprite from '../../images/icons.svg';

const Navigation = ({ isOverflowing, overflowAmount, freeSpace }) => {
  const language = useSelector((state) => state.language);
  const navRef = useRef(null);  // посилання на navMenu
  const ulRef = useRef(null);  // посилання на navMenu

  const menuItems = useMemo(() => 
    text.map((item) => ({
      to: item.path,
      text: item[language],
    })),
    [language]
  );

  useEffect(() => {
    if (ulRef.current) {
      const childrenSizes = Array.from(ulRef.current.children).map(child => child.getBoundingClientRect().width);
      console.log('%cNavigation | element sizes:', 'color: blue; font-weight: bold;', childrenSizes);
    }
    if (navRef.current) {
      const navSize = navRef.current.getBoundingClientRect().width;
      console.log('%cNavigation | navRef size:', 'color: purple; font-weight: bold;', navSize);
    }
  }, [isOverflowing, overflowAmount, freeSpace]);

  return (
    <nav className={css.nav} ref={navRef}>
      <svg width="44" height="30" className={css.mobMenuIcon}>
        <use href={`${sprite}#open-menu`}></use>
      </svg>
      <ul className={css.navMenu} ref={ulRef}>
        {menuItems.map((item, index) => 
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
      </ul>
    </nav>
  );
};

export default Navigation;


// import React, { useEffect, useRef, useState, useMemo } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import css from './Navigation.module.css';
// import text from '../Navigation/text.js';
// import sprite from '../../images/icons.svg';

// const Navigation = ({ isOverflowing }) => {
//   const navRef = useRef(null);
//   const language = useSelector(state => state.language);
//   const [visibleItems, setVisibleItems] = useState([]);
//   const [hiddenItems, setHiddenItems] = useState([]);

//   const menuItems = useMemo(() => [
//     { to: "/", text: text.homePage[language] },
//     { to: "/projects", text: text.projects[language] },
//     { to: "/donation", text: text.donate[language] },
//     { to: "/contacts", text: text.contacts[language] },
//   ], [language]);

//   useEffect(() => {
//     const updateMenuItems = () => {
//       if (navRef.current) {
//         const navWidth = navRef.current.clientWidth;
//         let totalWidth = 0;
//         const visible = [];
//         const hidden = [];

//         for (let i = 0; i < menuItems.length; i++) {
//           const item = menuItems[i];
//           const menuItem = navRef.current.children[i];

//           if (menuItem) {
//             const itemWidth = menuItem.offsetWidth;
//             if (totalWidth + itemWidth <= navWidth) {
//               totalWidth += itemWidth;
//               visible.push(item);
//             } else {
//               hidden.push(item);
//             }
//           }
//         }

//         setVisibleItems(visible);
//         setHiddenItems(hidden);
//       }
//     };

//     updateMenuItems();
//     window.addEventListener('resize', updateMenuItems);

//     return () => {
//       window.removeEventListener('resize', updateMenuItems);
//     };
//   }, [menuItems]);

//   return (
//     <nav className={css.nav} ref={navRef}>
//       <svg width="44" height="30" className={css.mobMenuIcon}>
//         <use href={`${sprite}#open-menu`}></use>
//       </svg>
//       <ul className={css.navMenu}>
//         {visibleItems.map((item, index) => (
//           <li key={index} className={css.navMenuItem}>
//             <NavLink
//               to={item.to}
//               className={({ isActive }) =>
//                 `${css.navMenuLink} ${isActive ? css.active : ''}`
//               }
//             >
//               {item.text}
//             </NavLink>
//           </li>
//         ))}
//         {hiddenItems.length > 0 && (
//           <li className={css.navMenuItem}>
//             <div className={css.moreMenu}>
//               <button className={css.moreButton}>...</button>
//               <ul className={css.moreDropdown}>
//                 {hiddenItems.map((item, index) => (
//                   <li key={index} className={css.navMenuItem}>
//                     <NavLink
//                       to={item.to}
//                       className={({ isActive }) =>
//                         `${css.navMenuLink} ${isActive ? css.active : ''}`
//                       }
//                     >
//                       {item.text}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

// import React, { useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import css from './Navigation.module.css';
// import text from '../Navigation/text.js';
// import sprite from '../../images/icons.svg';

// const Navigation = () => {
//   const navRef = useRef(null);
//   const language = useSelector(state => state.language);

//   return (
//     <nav className={css.nav}>
//       <svg width="44" height="30" className={css.mobMenuIcon}>
//         <use href={`${sprite}#open-menu`}></use>
//       </svg>
//       <ul className={css.navMenu} ref={navRef}>
//         <li className={css.navMenuItem}>
//           <NavLink
//             to={text.homePage.path}
//             className={({ isActive }) =>
//               `${css.navMenuLink} ${isActive ? css.active : ''}`
//             }
//           >
//             {text.homePage[language]}
//           </NavLink>
//         </li>
//         <li className={css.navMenuItem}>
//           <NavLink
//             to={text.projects.path}
//             className={({ isActive }) =>
//               `${css.navMenuLink} ${isActive ? css.active : ''}`
//             }
//           >
//             {text.projects[language]}
//           </NavLink>
//         </li>
//         <li className={css.navMenuItem}>
//           <NavLink
//             to={text.donate.path}
//             className={({ isActive }) =>
//               `${css.navMenuLink} ${isActive ? css.active : ''}`
//             }
//           >
//             {text.donate[language]}
//           </NavLink>
//         </li>
//         <li className={css.navMenuItem}>
//           <NavLink
//             to={text.contacts.path}
//             className={({ isActive }) =>
//               `${css.navMenuLink} ${isActive ? css.active : ''}`
//             }
//           >
//             {text.contacts[language]}
//           </NavLink>
//         </li>
//         <li className={css.navMenuItem}></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;
