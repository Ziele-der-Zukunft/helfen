import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import deFlag from "../../images/germany_flags_flag_17001.png"
import enFlag from "../../images/united_states_flags_flag_17080.png"
import uaFlag from "../../images/ukraine_flags_flag_17076.png"

const FaviconAndTitle = () => {
  
  const language = useSelector((state) => state.language);

  const title =
    language === 'de'
      ? 'ZIELE DER ZUKUNFT E.V.'
      : language === 'en'
      ? 'GOALS OF THE FUTURE'
      : 'ЦІЛІ МАЙБУТНЬОГО';
 
      useEffect(() => {
        document.title = title;
        changeFavicon(language);
      }, [title, language]);

      const changeFavicon = (language) => {
        let faviconPath;
        switch(language) {
          case 'de':
            faviconPath = deFlag;
            break;
          case 'en':
            faviconPath = enFlag;
            break;
          default:
            faviconPath = uaFlag;
        }
        
        const existingFavicon = document.querySelector('link[rel="icon"]');
        if (existingFavicon) {
          existingFavicon.href = faviconPath;
        } else {
          const favicon = document.createElement('link');
          favicon.rel = 'icon';
          favicon.href = faviconPath;
          document.head.appendChild(favicon);
        }
      };
  return null;
};

export default FaviconAndTitle;