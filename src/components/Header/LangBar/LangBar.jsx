import css from './LangBar.module.css';
import { Link } from 'react-router-dom';
import sprite from '../../../images/icons.svg'
import { useDispatch, 
    // useSelector 
} from 'react-redux';
import { setLanguage } from 'redux/languageSlice';

const LangBar = () => {
    const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };
//   const language = useSelector(state => state.language);
  return (
        <ul className={css.langList}>
                {/* <li className={css.langItem}>
                    {`${language}`}
                </li> */}
                <li className={css.langItem}>
                    <Link className={css.link} onClick={() => handleLanguageChange('en')}>
                        <svg className={css.langFlagIcon} width="30" height="20">
                            <use href={`${sprite}#usunitedstatesflag`}></use>
                        </svg>
                    </Link>
                </li>
                <li className={css.langItem} >
                    <Link className={css.link} onClick={() => handleLanguageChange('ua')}>
                        <svg className={css.langFlagIcon} width="30" height="20">
                            <use href={`${sprite}#uaukraineflag`}></use>
                        </svg>
                    </Link>
                </li>
                <li className={css.langItem} >
                    <Link className={css.link} onClick={() => handleLanguageChange('de')}>
                        <svg className={css.langFlagIcon} width="30" height="20">
                             <use href={`${sprite}#degermanyflag`}></use>
                        </svg>
                    </Link>
                </li>
            </ul>
  );
};
export default LangBar;