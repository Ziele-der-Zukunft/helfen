import { useSelector } from 'react-redux';
import css from './NotFound.module.css';
import FaviconAndTitle from 'components/FaviconAndTitle/FaviconAndTitle.jsx';
import Header from 'components/Header/Header.jsx';


const NotFound = () => {
  const language = useSelector((state) => state.language);

  const title =
    language === 'de'
      ? 'Falsche Strecke'
      : language === 'en'
      ? 'Wrong route'
      : 'Невірний маршрут';

  return (
    <>
    <FaviconAndTitle />
      <Header />
      <p className={css.notFoundMessage}>{title}</p>
    </>
  );
};

export default NotFound;