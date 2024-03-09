import css from './SlideBooks.module.css';
import { useSelector } from 'react-redux';

const SlideBooks = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Bücher für sehbehinderte Kinder'
      : language === 'en'
      ? 'Books for visually impaired children'
      : 'Книги для дітей з порушеннями зору';
  // const content =
  //   language === 'de'
  //     ? 'Die Wohltätigkeitsorganisation „Ziele der Zukunft“ und die ukrainische Organisation ROCOOMB „Tag“ (Regionale Organisation Cherkassy „Öffentliche Organisation von Menschen mit Behinderungen “Tag“) haben sich zusammengeschlossen, um eine Spendenkampagne zu initiieren. Ziel dieser Aktion ist es, die Finanzierung für die Herstellung von 1200 Fachbüchern in Braille-Schrift sicherzustellen. Diese Bücher sind für sehbehinderte und blinde Kinder in 56 Bildungseinrichtungen in der Ukraine bestimmt.'
  //     : language === 'en'
  //     ? 'The charity organization "Goals of the Future" and the Ukrainian organization ROCPOPD "Day" (Regional Organization Cherkassy "Public Organization of People with Disabilities "Day") have joined forces to initiate a fundraising campaign. The aim of this initiative is to secure funding for the production of 1200 specialized books in Braille script. These books are intended for visually impaired and blind children in 56 educational institutions in Ukraine.'
  //     : `Благодійна організація "Цілі майбутнього" та українська організація ЧООГОЛОМ "День" (Черкаська обласна організація "Громадська організація людей з обмеженими можливостями "День") об'єднали зусилля, щоб ініціювати кампанію зі збору пожертв. Метою цієї акції є забезпечення фінансування для виготовлення 1200 спеціалізованих книг у шрифті Брайля. Ці книги призначені для слабозорих та незрячих дітей в 56 навчальних закладах України.`;
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
    <div className={css.slideBooksWrap}>
      <div className={css.slideBooksImgWrap}>
        {/* <img
              src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-4_vwjha5.jpg"
              alt="Bücher für sehbehinderte Kinder 2"
              width="100%"
            /> */}
        <img
              src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-1_baqc22.jpg"
              alt="Bücher für sehbehinderte Kinder 1"
              width="100%"
            />
        {/* <img
              src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-3_r5nlpu.jpg"
              alt="Bücher für sehbehinderte Kinder 2"
              width="100%"
            /> */}
        {/* <img
              src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-2_fcaajy.jpg"
              alt="Bücher für sehbehinderte Kinder 2"
              width="100%"
            /> */}
        </div> 
      <div className={css.slideBooksTextWrap}>
        <h3 className={css.slideBooksTitle}>{title}</h3>
        {/* <p className={css.slideBooksText}>{content}</p> */}
      </div>
    </div>
  );
};

export default SlideBooks;
