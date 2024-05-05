import { useSelector } from 'react-redux';
import css from './Contacts.module.css';

const Contacts = () => {
  const language = useSelector(state => state.language);
  const land =
    language === 'de'
      ? 'Land: Deutschland'
      : language === 'en'
      ? 'Country: Germany'
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
      ? 'Adresse:'
      : language === 'en'
      ? 'Address:'
      : 'Адреса:';
  const strasse =
    language === 'de'
      ? 'Kronenburggasse 7'
      : language === 'en'
      ? 'Kronenburggasse 7'
      : 'Kronenburggasse 7';
  const telefon =
    language === 'de' ? 'Telefon:' : language === 'en' ? 'Phone:' : 'Телефон:';
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
        <li className={css.contact}>
          {adresse}
          <a className={css.adresseLinks} href="https://www.google.com/maps/place/Kronenburggasse+7,+99084+Erfurt/@50.984321,11.0282117,3a,75y,278.16h,78.65t/data=!3m7!1e1!3m5!1s_7c7TFLGhpbIwAyxAMnBCQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D_7c7TFLGhpbIwAyxAMnBCQ%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D245.75061%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m15!1m8!3m7!1s0x47a47299e9ce5435:0x7651116a84cce86d!2sKronenburggasse+7,+99084+Erfurt!3b1!8m2!3d50.9842841!4d11.0280831!16s%2Fg%2F11c225sghy!3m5!1s0x47a47299e9ce5435:0x7651116a84cce86d!8m2!3d50.9842841!4d11.0280831!16s%2Fg%2F11c225sghy?entry=ttu" target="_blank" rel="noopener noreferrer nofollow">
            {strasse}
          </a>
          </li>
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



// ---------- зміна мови за допомогою прокидування props-----------

// import css from './Contacts.module.css';

// const Contacts = ({ language }) => {
//   const land =
//     language === 'de' ? 'Land: Deutschland'
//       : language === 'en' ? 'Country: Germany'
//       : 'Країна: Німеччина';
//   const plz =
//     language === 'de'
//       ? 'PLZ: 99084'
//       : language === 'en'
//       ? 'ZIP Code: 99084'
//       : 'Поштовий індекс: 99084';
//   const stadt =
//     language === 'de'
//       ? 'Stadt: Erfurt'
//       : language === 'en'
//       ? 'City: Erfurt'
//       : 'Місто: Ерфурт';
//   const adresse =
//     language === 'de'
//       ? 'Adresse: Kronenburggasse 7'
//       : language === 'en'
//       ? 'Address: Kronenburggasse 7'
//       : 'Адреса: Kronenburggasse 7';
//   const telefon =
//     language === 'de'
//       ? 'Telefon:'
//       : language === 'en'
//       ? 'Phone:'
//       : 'Телефон:';
//   const gerichtsstand =
//     language === 'de'
//       ? 'Gerichtsstand: Amtsgericht Erfurt'
//       : language === 'en'
//       ? 'Jurisdiction: Erfurt'
//       : 'Реєстратор: Місцевий суд Ерфурта';
//   const registerzeichen =
//     language === 'de'
//       ? 'Registerzeichen:'
//       : language === 'en'
//       ? 'Registration number:'
//       : 'Реєстраційний номер:';
//   const bank =
//     language === 'de'
//       ? 'Bank: Sparkasse Mittelthüringen'
//       : language === 'en'
//       ? 'Bank: Sparkasse Mittelthüringen'
//       : 'Банк: Sparkasse Mittelthüringen';

//   return (
//     <div className={css.contactsWrap}>
//       <ul className={css.contacts}>
//         <li className={css.contact}>{land}</li>
//         <li className={css.contact}>{plz}</li>
//         <li className={css.contact}>{stadt}</li>
//         <li className={css.contact}>{adresse}</li>
//         <li className={css.contact}>
//           E-Mail:
//           <a className={css.emailLinks} href="mailto:office@zielederzukunft.de">
//             office@zielederzukunft.de
//           </a>
//         </li>
//         <li className={css.contact}>
//           {telefon}
//           <a className={css.phoneLinks} href="tel:+4917662721299">
//             +49 176 62721299
//           </a>
//         </li>
//         <li className={css.contact}>{gerichtsstand}</li>
//         <li className={css.contact}>{registerzeichen} VR 163184</li>
//         <li className={css.contact}>{bank}</li>
//         <li className={css.contact}>IBAN: DE 1282 0510 0001 6315 1105</li>
//         <li className={css.contact}>BIC: HELADEF1WEM</li>
//       </ul>
//     </div>
//   );
// };

// export default Contacts;
