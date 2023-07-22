import { useSelector } from 'react-redux';
import css from './Contacts.module.css';
import sprite from '../../images/icons.svg'

const Contacts = () => {
  const language = useSelector(state => state.language);
  return (
    <address className={css.ourContacts}>
      <ul className={css.contactsList}>
        <li className={css.contactsListItem}>
          <a href="https://goo.gl/maps/mAYefMfu98Q5EfXE6" target="_blank" rel="noopener noreferrer nofollow" className={css.contactsListLink}>
            <svg width="16" height="22" className={css.contactsListIcon}>
              <use href={`${sprite}#geolocation`}></use>
            </svg> {language === 'de'
              ? `99084 Erfurt`
              : language === 'ua'
              ? `99084 Ерфурт, Німеччина`
              : `99084 Erfurt, Germany`}
          </a>
        </li>
        <li className={css.contactsListItem}>
          <a href="mailto:wiederaufbau.kh@yahoo.com"
            className={css.contactsListLink}>
            <svg width="16" height="12" className={css.contactsListIcon}>
              <use href={`${sprite}#mail`}></use>
            </svg>
            wiederaufbau.kh@yahoo.com
          </a>
        </li>
        <li className={css.contactsListItem}>
          <a href="tel:+491799569999" className={css.contactsListLink}>
            <svg width="12" height="16" className={css.contactsListIcon}>
              <use href={`${sprite}#phone`}></use>
            </svg>
            +49 (179) 956 9999
          </a>
        </li>
        <li className={css.contactsListItem}>
          <a href="tel:+4917673581817" className={css.contactsListLink}>
            <svg width="12" height="16" className={css.contactsListIcon}>
              <use href={`${sprite}#phone`}></use>
            </svg>
            +49 (176) 735 81817
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Contacts;
