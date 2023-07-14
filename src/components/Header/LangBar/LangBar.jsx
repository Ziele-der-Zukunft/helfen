import { LangList, LangItem, Link, LangFlagIcon } from './LangBar.styled';
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
        <LangList>
                {/* <LangItem>
                    {`${language}`}
                </LangItem> */}
                <LangItem>
                    <Link onClick={() => handleLanguageChange('en')}>
                        <LangFlagIcon width="30" height="20">
                            <use href={`${sprite}#usunitedstatesflag`}></use>
                        </LangFlagIcon>
                    </Link>
                </LangItem>
                <LangItem >
                    <Link onClick={() => handleLanguageChange('ua')}>
                        <LangFlagIcon width="30" height="20">
                            <use href={`${sprite}#uaukraineflag`}></use>
                        </LangFlagIcon>
                    </Link>
                </LangItem>
                <LangItem >
                    <Link onClick={() => handleLanguageChange('de')}>
                        <LangFlagIcon width="30" height="20">
                             <use href={`${sprite}#degermanyflag`}></use>
                        </LangFlagIcon>
                    </Link>
                </LangItem>
            </LangList>
  );
};
export default LangBar;