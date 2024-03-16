import css from './Projects.module.css';
import { useSelector } from 'react-redux';
import fallbackImageUrl from "../../images/logo.jpg";

const SlideHumanitarianAid = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Humanitäre Hilfe'
      : language === 'en'
      ? 'Humanitarian aid'
      : 'Гуманітарна допомога';

  return (
    <div className={css.slideWrap}>
      <div className={css.slideImgWrap}>
        <img
              src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1709746744/project-books-1_baqc222.jpg"
              alt="Humanitäre Hilfe"
              width="100%"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImageUrl;
              }}
            />
        </div> 
      <div className={css.slideTextWrap}>
        <h3 className={css.slideTitle}>{title}</h3>
        {/* <p className={css.slideBooksText}>{content}</p> */}
      </div>
    </div>
  );
};

export default SlideHumanitarianAid;
