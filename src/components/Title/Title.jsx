import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import en from '../../images/favicon_en.png';
import ua from '../../images/favicon_ua.png';
import de from '../../images/favicon_de.png';

const Title = () => {
  const language = useSelector(state => state.language);
  return (
    <Helmet>
      <title>
        {language === 'en'
          ? 'FUTURE GOALS'
          : language === 'ua'
          ? 'ЦІЛІ МАЙБУТНЬОГО'
          : 'ZIELE DER ZUKUNFT'}
      </title>
      <link
        rel="icon"
        type="image/svg"
        href={language === 'en' ? en : language === 'ua' ? ua : de}
        sizes="32x32"
      />
    </Helmet>
  );
};
export default Title;
