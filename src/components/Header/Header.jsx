import css from './Header.module.css';
import Navbar from 'components/Header/NavBar/NavBar';
import LangBar from 'components/Header/LangBar/LangBar';
import MobileMenu from './MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';


const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    // Функція, яка буде викликатись при зміні розміру вікна
    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 500);

    // Додаю подію "resize" для вікна, щоб реагувати на зміни розміру
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={css.headerComponent}>
      {isMobile ? <MobileMenu /> : <Navbar />}
      <LangBar />
    </div>
  );
};
export default Header;
