import css from './Gallery.module.css'
import photo2 from "../../../images/photo_2.jpg"
import photo3 from "../../../images/photo_3.jpg"
import photo4 from "../../../images/photo_4.jpg"
import photo7 from "../../../images/photo_7.jpg"

const Gallery = () => {
  return (
    <div className={css.galleryThumb}>
      <ul className={css.galleryList}>
        <li className={css.galleryItem}>
          <img
            src={photo2}
            alt="люди вишикувались в чергу щоб отримати їжу"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photo3}
            alt="волонтери, які роздають їжу"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photo4}
            alt="люди в черзі для отримання допомоги"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photo7}
            alt="мітинг на підтримку україни"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
