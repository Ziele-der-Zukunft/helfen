import css from './Projects.module.css';
import { useSelector } from 'react-redux';
import fallbackImageUrl from '../../images/logo.jpg';

const SlideHumanitarianAid = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Humanitäre Hilfe'
      : language === 'en'
      ? 'Humanitarian aid'
      : 'Гуманітарна допомога';
  const description =
    language === 'de'
      ? 'Humanitäre Hilfeяяяяяяяяяяяяяяяя'
      : language === 'en'
      ? 'Humanitarian aidяяяяяяяяяяяяяяяяяяя'
      : 'Гуманітарна допомогаяяяяяяяяяяяяяяяяяяяяяяя';

  return (
    <div className={css.slideWrap}>
      <div className={css.slideImgWrap}>
        <img
          className={css.slideImg}
          src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1710849960/Humanitarian_aid_5_accwqo.jpg"
          alt="Humanitäre Hilfe"
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

export default SlideHumanitarianAid;
