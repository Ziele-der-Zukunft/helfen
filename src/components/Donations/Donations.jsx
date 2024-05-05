import { useSelector } from 'react-redux';
import css from './Donations.module.css';
import photo1 from '../../images/ambulance_car_300x192.jpg';
import photo2 from '../../images/food_for_the_social_kitchen_300x225.jpg';
import photo3 from '../../images/equipment_for_a_rehabilitation_center_300x189.jpg';

const Donations = () => {
  const language = useSelector(state => state.language);
  const wheels =
    language === 'de'
      ? 'Räder für Krankenwagen in der Ukraine'
      : language === 'en'
      ? 'Wheels for ambulances in Ukraine'
      : 'Колеса для автомобілів швидкої допомоги в Україні';
  const food =
    language === 'de'
      ? 'Lebensmittel für Sozialküchen'
      : language === 'en'
      ? 'Food for social kitchens'
      : 'Продукти для соціальних кухонь';
  const equipment =
    language === 'de'
      ? 'Geräte für ein Rehabilitationszentrum'
      : language === 'en'
      ? 'Equipment for a rehabilitation centre'
      : 'Обладнання для реабілітаційного центру';
  const donate =
    language === 'de'
      ? 'Jetzt spenden'
      : language === 'en'
      ? 'Donate now'
      : 'Пожертвувати зараз';

  return (
    <div className={css.donationsWrap}>
      <ul className={css.donationsList}>
        <li className={css.donationsListItem}>
          <div className={css.donationPhotoWrap}>
            <img src={photo1} alt={wheels} className={css.donationPhoto} />
          </div>
          <h3 className={css.donationsListTitle}>{wheels}</h3>
          <a
            href="https://www.betterplace.org/de/projects/130144?utm_campaign=user_share&utm_medium=ppp_sticky&utm_source=Link"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={css.donationLink}
          >
            {donate}
          </a>
        </li>
        <li className={css.donationsListItem}>
          <div className={css.donationPhotoWrap}>
            <img src={photo2} alt={food} className={css.donationPhoto} />
          </div>
          <h3 className={css.donationsListTitle}>{food}</h3>
          <a
            href="https://www.betterplace.org/de/projects/117908?utm_campaign=email-notifications&utm_medium=betterplace-org--p117908&utm_source=project_manager_notifier-project_activated_message"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={css.donationLink}
          >
            {donate}
          </a>
        </li>
        <li className={css.donationsListItem}>
          <div className={css.donationPhotoWrap}>
            <img src={photo3} alt={equipment} className={css.donationPhoto} />
          </div>
          <h3 className={css.donationsListTitle}>{equipment}</h3>
          <a
            href="https://secure.betterplace.org/de/donate/platform/projects/131089"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={css.donationLink}
          >
            {donate}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Donations;
