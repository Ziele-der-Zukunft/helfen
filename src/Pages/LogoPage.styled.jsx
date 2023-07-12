import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import worldUkraine from "../images/world_ukraine.svg"

export const Page = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: var(--bg-color);
`;

export const LogoPageContainer = styled.div`
  padding-top: 20vh;
  padding-bottom: 25vh;
  display: flex;
  justify-content: center;
  background: url(${worldUkraine}) no-repeat center;
  background-size: contain;
`;

export const LogoPageList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
export const LogoPageItem = styled.li``;

export const Link = styled(NavLink)`
  color: var(--primary-text-color);
  // font-weight: 500;
  // font-size: 14px;
  // line-height: 1.14;
  // letter-spacing: 0.02em;
  text-decoration: none;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: var(--timing-function);
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 23px;
  line-height: calc(28 / 23);
  color: var(--black-text-color);
  letter-spacing: 0.02em;

  @media screen and (min-width: 380px) {
    font-size: 26px;
    line-height: calc(30 / 26);
    letter-spacing: 0.03em;
  }
  @media screen and (min-width: 480px) {
    font-size: 32px;
    line-height: calc(36 / 32);
    letter-spacing: 0.05em;
  }

  &:hover,
  &:focus {
    color: var(--accent-color-1);
  }
`;

export const LogoPageIcons = styled.svg`
    min-width: 40px;
    min-height: 30px;
    margin-right: 6px;

    @include tablet {
        margin-right: 10px;
    }
`
// export const IconFlag = styled.use`

// `

// .page-language {
//     @extend %list;
//     display: flex;
//     gap: 5px;

//     @include tablet {
//         flex-direction: row;
//         column-gap: 5px;
//         row-gap: 0;
//     }
// }
// .page-language__link {
//     @extend %link;
// }
