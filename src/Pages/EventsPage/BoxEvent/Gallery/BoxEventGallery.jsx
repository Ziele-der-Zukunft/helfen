import css from './BoxEventGallery.module.css'
import { useSelector } from 'react-redux';

import BoxEventPhoto from "../../../../images/SportEvent.jpg"
import BoxEventDePhoto from "../../../../images/SportEventDe.jpg"
import BoxEventEnPhoto from "../../../../images/SportEventEn.jpg"

const BoxEventGallery = () => {
  let language = useSelector(state => state.language);
  let selectedImage = language === 'de' ? BoxEventDePhoto : language === 'ua' ? BoxEventPhoto : BoxEventEnPhoto;
  return (
    <div className={css.galleryThumb}>
      <ul className={css.galleryList}>
        <li className={css.galleryItem}>
          <img
            src={selectedImage}
            alt="box-event"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
      </ul>
    </div>
  );
};

export default BoxEventGallery;
