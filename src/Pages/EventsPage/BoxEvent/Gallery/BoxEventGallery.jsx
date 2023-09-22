import css from './BoxEventGallery.module.css'

import BoxEventPhoto from "../../../../images/SportEvent.jpg"

const ProjectBooksGallery = () => {
  return (
    <div className={css.galleryThumb}>
      <ul className={css.galleryList}>
        <li className={css.galleryItem}>
          <img
            src={BoxEventPhoto}
            alt="box-event"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProjectBooksGallery;
