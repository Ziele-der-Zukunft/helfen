import css from './Contacts.module.css';

const Contacts = ({ language }) => {
  const land =
    language === 'de' ? 'Land: Deutschland'
      : language === 'en' ? 'Country: Germany'
      : 'Країна: Німеччина';
  const plz =
    language === 'de'
      ? 'PLZ: 99084'
      : language === 'en'
      ? 'ZIP Code: 99084'
      : 'Поштовий індекс: 99084';
  const stadt =
    language === 'de'
      ? 'Stadt: Erfurt'
      : language === 'en'
      ? 'City: Erfurt'
      : 'Місто: Ерфурт';
  const adresse =
    language === 'de'
      ? 'Adresse: Kronenburggasse 7'
      : language === 'en'
      ? 'Address: Kronenburggasse 7'
      : 'Адреса: Kronenburggasse 7';
  const telefon =
    language === 'de'
      ? 'Telefon:'
      : language === 'en'
      ? 'Phone:'
      : 'Телефон:';
  const gerichtsstand =
    language === 'de'
      ? 'Gerichtsstand: Amtsgericht Erfurt'
      : language === 'en'
      ? 'Jurisdiction: Erfurt'
      : 'Реєстратор: Місцевий суд Ерфурта';
  const registerzeichen =
    language === 'de'
      ? 'Registerzeichen:'
      : language === 'en'
      ? 'Registration number:'
      : 'Реєстраційний номер:';
  const bank =
    language === 'de'
      ? 'Bank: Sparkasse Mittelthüringen'
      : language === 'en'
      ? 'Bank: Sparkasse Mittelthüringen'
      : 'Банк: Sparkasse Mittelthüringen';

  return (
    <div className={css.contactsWrap}>
      <ul className={css.contacts}>
        <li className={css.contact}>{land}</li>
        <li className={css.contact}>{plz}</li>
        <li className={css.contact}>{stadt}</li>
        <li className={css.contact}>{adresse}</li>
        <li className={css.contact}>
          E-Mail:
          <a className={css.emailLinks} href="mailto:office@zielederzukunft.de">
            office@zielederzukunft.de
          </a>
        </li>
        <li className={css.contact}>
          {telefon}
          <a className={css.phoneLinks} href="tel:+4917662721299">
            +49 176 62721299
          </a>
        </li>
        <li className={css.contact}>{gerichtsstand}</li>
        <li className={css.contact}>{registerzeichen} VR 163184</li>
        <li className={css.contact}>{bank}</li>
        <li className={css.contact}>IBAN: DE 1282 0510 0001 6315 1105</li>
        <li className={css.contact}>BIC: HELADEF1WEM</li>
      </ul>
    </div>
  );
};

export default Contacts;
