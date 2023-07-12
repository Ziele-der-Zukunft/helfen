import { Page, LogoPageContainer, LogoPageList, LogoPageItem, Link, LogoPageIcons } from './LogoPage.styled';

const LogoPage = () => {
  return (
    <Page>
      <LogoPageContainer>
        <LogoPageList>
          <LogoPageItem>
          <Link to='/projekte' en="true"><LogoPageIcons width="40" height="30">
                <use href="./images/icons.svg#usunitedstatesflag"></use>
              </LogoPageIcons>
              Future goals</Link>
          </LogoPageItem>
          <LogoPageItem>
          <Link to='/projekte' ua="true"><LogoPageIcons width="40" height="30">
                <use href="./images/icons.svg#uaukraineflag"></use>
              </LogoPageIcons>
              Цілі майбутнього</Link>
          </LogoPageItem>
          <LogoPageItem>
          <Link to='/projekte' de="true"><LogoPageIcons width="40" height="30">
                <use href="./images/icons.svg#degermanyflag"></use>
              </LogoPageIcons>
              Ziele der zukunft</Link>
          </LogoPageItem>
        </LogoPageList>
      </LogoPageContainer>
    </Page>
  );
};

export default LogoPage;
