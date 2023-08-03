import css from './BooksGallery.module.css'
import photoBooks1 from "../../../../images/project-books-1.jpg"
import photoBooks2 from "../../../../images/project-books-2.jpg"
import photoBooks3 from "../../../../images/project-books-3.jpg"
import photoBooks4 from "../../../../images/project-books-4.jpg"

const ProjectBooksGallery = () => {
  return (
    <div className={css.galleryThumb}>
      <ul className={css.galleryList}>
        <li className={css.galleryItem}>
          <img
            src={photoBooks2}
            alt="alphabet-arithmetic book"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photoBooks3}
            alt="open book alphabet-arithmetic"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
      <li className={css.galleryItem}>
          <img
            src={photoBooks1}
            alt="Braille letters and numbers"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
        <li className={css.galleryItem}>
          <img
            src={photoBooks4}
            alt="text on the page in Braille"
            className={css.galleryPhoto}
            width="600"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProjectBooksGallery;
