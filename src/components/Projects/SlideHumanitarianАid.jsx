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
      ? 'Die Gemeinnützige Vereine „Ziele der Zukunft e.V“ überträgt humanitäre Hilfe an die Ukrainische Landsleute in Thüringen e.V. für die weitere Entsendung und den Transfer an bedürftige Bürger in den betroffenen Regionen Ukraine.'
      : language === 'en'
      ? 'The non-profit organization "Ziele der Zukunft e.V" transfers humanitarian aid to the Ukrainische Landsleute in Thüringen e.V. for further dispatch and transfer to needy citizens in the affected regions of Ukraine.'
      : 'Благодійна організація "Ziele der Zukunft e.V." передає гуманітарну допомогу Українському земляцтву в Тюринґені для подальшої відправки та передачі нужденним громадянам у постраждалих регіонах України.';

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
