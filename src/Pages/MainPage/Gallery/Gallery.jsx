import css from './Gallery.module.css'
import photo1 from "../../../images/russia_is_a_terrorist_state.jpg"
import photo2 from "../../../images/123.jpg"

const Gallery = () => {
  return (
    <div className={css.galleryThumb}>
      <ul className={css.galleryList}>
        <li className={css.galleryItem 
            // css.desktop-hidden
            }>
          <img
            src={photo1}
            alt="a multi-storey building with traces of Russian missile hits"
            className={css.galleryPhoto}
            width="350" height="500"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photo2}
            alt="house destroyed by Russian terrorists"
            className={css.galleryPhoto}
            width="350" height="500"
          />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
