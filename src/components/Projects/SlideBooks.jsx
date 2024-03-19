import css from './Projects.module.css';
import { useSelector } from 'react-redux';
import fallbackImageUrl from '../../images/logo.jpg';

const SlideBooks = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Bücher für sehbehinderte Kinder'
      : language === 'en'
      ? 'Books for visually impaired children'
      : 'Книги для дітей з порушеннями зору';
  const description =
    language === 'de'
      ? `Der gemeinnützige Verein Ziele der Zukunft e.V. und die ukrainische Organisation ROTÖOMB "Tag" (Regionale Organisation von Tscherkassy "Öffentliche Organisation von Menschen mit Behinderungen "Tag") haben sich zusammengetan, um 1200 Fachbücher in Braille-Schrift herzustellen. Diese Bücher sind für sehbehinderte und blinde Kinder in 56 Bildungseinrichtungen in der Ukraine bestimmt.`
      : language === 'en'
      ? `The charitable organization Ziele der Zukunft e.V. and the Ukrainian organization CROPOPD "Day" (Cherkasy Regional Organization "Public Organization of People with Disabilities "Day") have joined forces to produce 1200 specialized books in Braille. These books are intended for visually impaired and blind children in 56 educational institutions in Ukraine.`
      : `Благодійна організація Ziele der Zukunft e.V. та українська організація ЧООГОЛОМ "День" (Черкаська обласна організація "Громадська організація людей з обмеженими можливостями "День") об'єднали зусилля, щоб випустити 1200 спеціалізованих книг шрифтом Брайля. Ці книги призначені для слабозорих та незрячих дітей у 56 навчальних закладах України.`;
  // const projectBooksPhotos = {
  //   project: "books",
  //   photos: [
  //     {
  //       id: 1,
  //       url: "https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-3_r5nlpu.jpg"
  //     },
  //     {
  //       id: 2,
  //       url: "https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-1_baqc22.jpg"
  //     },
  //     {
  //       id: 3,
  //       url: "https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-2_fcaajy.jpg"
  //     },
  //     {
  //       id: 4,
  //       url: "https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-4_vwjha5.jpg"
  //     }
  //   ]
  // };
  return (
    <div className={css.slideWrap}>
      <div className={css.slideImgWrap}>
        <img
          className={css.slideImg}
          src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-1_baqc22.jpg"
          alt="Bücher für sehbehinderte Kinder"
          width="100%"
          onError={e => {
            e.target.onerror = null;
            e.target.src = fallbackImageUrl;
          }}
        />
        <div className={css.overlay}>
          <p className={css.slideDescription}>{description}</p>
        </div>
      </div>
      <div className={css.slideTextWrap}>
        <h3 className={css.slideTitle}>{title}</h3>
      </div>
    </div>
  );
};

export default SlideBooks;
