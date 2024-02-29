import css from './Partners.module.css';
import logo1 from '../../images/logo_house_of_resources.jpg';
import logo2 from '../../images/logo_bundesministerium_des_innern_und_fur_heimat.jpg';
import logo3 from '../../images/logo_securis.jpg';
import logo4 from '../../images/freistaat_thuringen.jpg';
import logo5 from '../../images/logo_iqonex.jpg';

const Partners = () => {
  return (
    <div className={css.partnersWrap}>
      <h2 className={css.partnersTitle}>Unsere Partner</h2>
      <ul className={css.partnersList}>
        <li className={css.partnersListItem}>
          <img src={logo1} alt="house of resources" className={css.partnerLogo} />
        </li>
        <li className={css.partnersListItem}>
          <img src={logo2} alt="bundesministerium des innern und fur heimat" className={css.partnerLogo} />
        </li>
       <li className={css.partnersListItem}>
          <img src={logo3} alt="securis" className={css.partnerLogo} />
        </li>
         <li className={css.partnersListItem}>
          <img src={logo4} alt="freistaat thuringen" className={css.partnerLogo} />
          <img src={logo5} alt="logo iqonex" className={css.partnerLogo} />
        </li>
      </ul>
    </div>
  );
};

export default Partners;