import css from './Gallery.module.css'
import photo7 from "../../../images/photo_7.jpg"

const Gallery = () => {
  return (
    <div className={css.galleryThumb}>
      <ul className={css.galleryList}>
      <li className={css.galleryItem}>
          <img
            src={photo7}
            alt="a rally in support of ukraine"
            className={css.galleryPhoto}
            width="400"
          />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
