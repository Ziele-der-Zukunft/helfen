import css from './Donations.module.css';
import sprite from '../../images/icons.svg';
import { useSelector } from 'react-redux';


const DonationItem = ({
  text,
  isActive,
  toggleTextVisibility,
}) => {
  const language = useSelector(state => state.language);
  const { id, photo, title, description, donate } = text;

  return (
    <li className={css.donationsListItem}>
      <div className={css.donationPhotoWrap}>
        <img src={photo} alt={title} className={css.donationPhoto} />
      </div>
      <div className={css.donationText}>
        <h3 className={css.donationTitle}>{title[language]}</h3>
        <svg
          className={css.iconDown}
          width="20"
          height="20"
          onClick={() => toggleTextVisibility(id)}
        >
          <use
            href={`${sprite}#${isActive ? 'icon-chevrons-up' : 'icon-chevrons-down'}`}
          ></use>
        </svg>
      </div>
      {isActive && (
        <p className={css.donationDiscription}>{description[language]}</p>
      )}
      <a
        href={donate.link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={css.donationLink}
      >
        {donate.label[language]}
      </a>
    </li>
  );
};

export default DonationItem;
