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
        {language === 'de'
          ? 'ZIELE DER ZUKUNFT'
          : language === 'ua'
          ? 'ЦІЛІ МАЙБУТНЬОГО'
          : 'FUTURE GOALS'}
      </title>
      <link
        rel="icon"
        type="image/svg"
        href={language === 'de' ? de : language === 'ua' ? ua : en}
        sizes="32x32"
      />
    </Helmet>
  );
};
export default Title;
