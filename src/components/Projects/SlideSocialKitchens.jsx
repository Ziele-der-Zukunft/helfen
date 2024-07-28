import css from './Projects.module.css';
import { useSelector } from 'react-redux';
import fallbackImageUrl from '../../images/logo.webp';

const SlideSocialKitchens = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Lebensmittel für Sozialküchen in der Ukraine'
      : language === 'en'
      ? 'Food for social kitchens in Ukraine'
      : 'Продукти харчування для соціальних кухонь в Україні';
  const description =
    language === 'de'
      ? 'Die Wohltätigkeitsorganisation Ziele der Zukunft e.V. hat eine Kampagne gestartet, um zehntausende Zivilisten in Frontstädten und Dörfern in der Ukraine mit warmen Mahlzeiten zu versorgen'
      : language === 'en'
      ? 'The charity organization Ziele der Zukunft e.V. has launched a campaign to organize hot meals for tens of thousands of civilians in frontline towns and villages in Ukraine'
      : `Благодійна організація "Ziele der Zukunft e.V." розпочала кампанію для організації гарячих обідів для десятків тисяч мирних жителів прифронтових міст і сіл України.`;

  return (
    <div className={css.slideWrap}>
      <div className={css.slideImgWrap}>
        <img
          className={css.slideImg}
          src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1722024007/Sozialk%C3%BCchen_in_der_Ukraine_devqqb.webp"
          alt={title}
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

export default SlideSocialKitchens;
