import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguage } from 'redux/languageSlice';
import css from "./LogoPage.module.css"
import sprite from '../../images/icons.svg'

const LogoPage = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };
  
  return (
    <section className={css.page}>
      <div className={css.logoPageContainer}>
        <ul className={css.logoPageList}>
          <li className={css.logoPageItem}>
          <Link className={css.logoPageLink} to='/startseite' onClick={() => handleLanguageChange('en')}>
            <svg className={css.logoPageIcons} width="40" height="30">
                <use href={`${sprite}#usunitedstatesflag`}></use>
              </svg>
              Future goals</Link>
          </li>
          <li className={css.logoPageItem}>
          <Link className={css.logoPageLink} to='/startseite' onClick={() => handleLanguageChange('ua')}>
            <svg className={css.logoPageIcons} width="40" height="30">
                <use href={`${sprite}#uaukraineflag`}></use>
              </svg>
              Цілі майбутнього</Link>
          </li>
          <li className={css.logoPageItem}>
          <Link className={css.logoPageLink} to='/startseite' onClick={() => handleLanguageChange('de')}>
            <svg className={css.logoPageIcons} width="40" height="30">
                <use href={`${sprite}#degermanyflag`}></use>
              </svg>
              Ziele der zukunft</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LogoPage;
