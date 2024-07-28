import { useSelector } from 'react-redux';
import css from './Partners.module.css';
import logo1 from '../../images/logo_house_of_resources_thüringen.webp';
import logo2 from '../../images/logo_bundesministerium_des_innern_und_fur_heimat.webp';
import logo3 from '../../images/logo_sekuris.webp';
import logo4 from '../../images/logo_beauftragte_für_integration,_migration_und_flüchtlinge.webp';
import logo5 from '../../images/logo_iqonex.webp';

const Partners = () => {
  const language = useSelector(state => state.language);
  const title =
    language === 'de'
      ? 'Unsere PARTNER'
      : language === 'en'
      ? 'Our PARTNERS'
      : 'Наші ПАРТНЕРИ';

  return (
    <div className={css.partnersWrap}>
      <h2 className={css.partnersTitle}>{title}</h2>
      <ul className={css.partnersList}>
        <li className={css.partnersListItem}>
          <img
            src={logo1}
            alt="house of resources thüringen"
            className={css.partnerLogo}
          />
        </li>
        <li className={css.partnersListItem}>
          <img
            src={logo2}
            alt="bundesministerium des innern und fur heimat"
            className={css.partnerLogo}
          />
        </li>
        <li className={css.partnersListItem}>
          <img src={logo3} alt="securis" className={css.partnerLogo} />
        </li>
        <li className={css.partnersListItem}>
          <img
            src={logo4}
            alt="beauftragte für integration, migration und flüchtlinge"
            className={`${css.partnerLogo} ${css.additionalPartnerLogo}`}
          />
          <img src={logo5} alt="iqonex" className={css.partnerLogo} />
        </li>
        <li className={`${css.partnersListItem} ${css.additionalPartnersListItem}`}>
          <img
            src={logo4}
            alt="beauftragte für integration, migration und flüchtlinge"
            className={css.partnerLogo}
          />
        </li>
      </ul>
    </div>
  );
};

export default Partners;


// ----------------------- зміна мови інтерфейсу за допомогою props--------

// import css from './Partners.module.css';
// import logo1 from '../../images/logo_house_of_resources.jpg';
// import logo2 from '../../images/logo_bundesministerium_des_innern_und_fur_heimat.jpg';
// import logo3 from '../../images/logo_securis.jpg';
// import logo4 from '../../images/freistaat_thuringen.jpg';
// import logo5 from '../../images/logo_iqonex.jpg';

// const Partners = ({ language }) => {
//   const partner =
//     language === 'de'
//       ? 'Unsere Partner'
//       : language === 'en'
//       ? 'Our partners'
//       : 'Наші партнери';
//   return (
//     <div className={css.partnersWrap}>
//       <h2 className={css.partnersTitle}>{partner}</h2>
//       <ul className={css.partnersList}>
//         <li className={css.partnersListItem}>
//           <img src={logo1} alt="house of resources" className={css.partnerLogo} />
//         </li>
//         <li className={css.partnersListItem}>
//           <img src={logo2} alt="bundesministerium des innern und fur heimat" className={css.partnerLogo} />
//         </li>
//        <li className={css.partnersListItem}>
//           <img src={logo3} alt="securis" className={css.partnerLogo} />
//         </li>
//          <li className={css.partnersListItem}>
//           <img src={logo4} alt="freistaat thuringen" className={css.partnerLogo} />
//           <img src={logo5} alt="logo iqonex" className={css.partnerLogo} />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Partners;
