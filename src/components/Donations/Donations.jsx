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

  return (
    <div className={css.donationsWrap}>
      <ul className={css.donationsList}>
        <li className={css.donationsListItem}>
          <div className={css.donationPhotoWrap}>
            <img
              src={photo1}
              alt={wheels}
              className={css.donationPhoto}
            />
          </div>
          <h3 className={css.donationsListTitle}>{wheels}</h3>
        </li>
        <li className={css.donationsListItem}>
          <div className={css.donationPhotoWrap}>
            <img
              src={photo2}
              alt={food}
              className={css.donationPhoto}
            />
          </div>
          <h3 className={css.donationsListTitle}>
            {food}
          </h3>
        </li>
        <li className={css.donationsListItem}>
          <div className={css.donationPhotoWrap}>
            <img
              src={photo3}
              alt={equipment}
              className={css.donationPhoto}
            />
          </div>
          <h3 className={css.donationsListTitle}>
            {equipment}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Donations;
