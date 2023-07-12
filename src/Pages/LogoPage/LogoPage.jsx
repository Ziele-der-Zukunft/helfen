import { useDispatch } from 'react-redux';
import { Page, LogoPageContainer, LogoPageList, LogoPageItem, Link, LogoPageIcons } from './LogoPage.styled';
import { setLanguage } from 'redux/languageSlice';
import sprite from '../../images/icons.svg'

const LogoPage = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <Page>
      <LogoPageContainer>
        <LogoPageList>
          <LogoPageItem>
          <Link to='/projekte' onClick={() => handleLanguageChange('en')}>
            <LogoPageIcons width="40" height="30">
                <use href={`${sprite}#usunitedstatesflag`}></use>
              </LogoPageIcons>
              Future goals</Link>
          </LogoPageItem>
          <LogoPageItem>
          <Link to='/projekte' onClick={() => handleLanguageChange('ua')}>
            <LogoPageIcons width="40" height="30">
                <use href={`${sprite}#uaukraineflag`}></use>
              </LogoPageIcons>
              Цілі майбутнього</Link>
          </LogoPageItem>
          <LogoPageItem>
          <Link to='/projekte' onClick={() => handleLanguageChange('de')}>
            <LogoPageIcons width="40" height="30">
                <use href={`${sprite}#degermanyflag`}></use>
              </LogoPageIcons>
              Ziele der zukunft</Link>
          </LogoPageItem>
        </LogoPageList>
      </LogoPageContainer>
    </Page>
  );
};

export default LogoPage;
