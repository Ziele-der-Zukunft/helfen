import { Page, LogoPageContainer, LogoPageList, LogoPageItem, Link, LogoPageIcons, IconFlag } from './LogoPage.styled';
import sprite from '../../images/icons.svg'

const LogoPage = () => {
  return (
    <Page>
      <LogoPageContainer>
        <LogoPageList>
          <LogoPageItem>
          <Link to='/projekte' en="true">
            <LogoPageIcons width="40" height="30">
                <use href={`${sprite}#usunitedstatesflag`}></use>
              </LogoPageIcons>
              Future goals</Link>
          </LogoPageItem>
          <LogoPageItem>
          <Link to='/projekte' ua="true">
            <LogoPageIcons width="40" height="30">
                <use href={`${sprite}#uaukraineflag`}></use>
              </LogoPageIcons>
              Цілі майбутнього</Link>
          </LogoPageItem>
          <LogoPageItem>
          <Link to='/projekte' de="true">
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
