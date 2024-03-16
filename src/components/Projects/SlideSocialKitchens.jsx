import css from './Projects.module.css';
import { useSelector } from 'react-redux';
import fallbackImageUrl from "../../images/logo.jpg";

const SlideSocialKitchens = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Lebensmittel für Sozialküchen in der Ukraine'
      : language === 'en'
      ? 'Food for social kitchens in Ukraine'
      : 'Продукти харчування для соціальних кухонь в Україні';

  return (
    <div className={css.slideWrap}>
      <div className={css.slideImgWrap}>
        <img
              src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1710253599/Sozialk%C3%BCchen_in_der_Ukraine_islrfp.jpg"
              alt="Lebensmittel für Sozialküchen in der Ukraine"
              width="100%"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImageUrl;
              }}
            />
        </div> 
      <div className={css.slideTextWrap}>
        <h3 className={css.slideTitle}>{title}</h3>
        {/* <p className={css.slideText}>{content}</p> */}
      </div>
    </div>
  );
};

export default SlideSocialKitchens;
