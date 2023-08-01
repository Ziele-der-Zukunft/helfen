import css from './ProjectFoodGallery.module.css'
import photo2 from "../../../images/photo_2.jpg"
import photo3 from "../../../images/photo_3.jpg"
import photo4 from "../../../images/photo_4.jpg"
import photo5 from "../../../images/russia_is_a_terrorist_state.jpg"

const ProjectFoodGallery = () => {
  return (
    <div className={css.galleryThumb}>
      <ul className={css.galleryList}>
        <li className={css.galleryItem}>
          <img
            src={photo2}
            alt="people lined up to get food"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photo3}
            alt="volunteers who distribute food"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photo4}
            alt="people waiting in line to receive assistance"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem 
            // css.desktop-hidden
            }>
          <img
            src={photo5}
            alt="a multi-storey building with traces of Russian missile hits"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProjectFoodGallery;
