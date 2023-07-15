import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const LangList = styled.ul`
  display: flex;
  gap: 10px;
`;
export const LangItem = styled.li``;

export const Link = styled(NavLink)`
  color: var(--primary-text-color);
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: var(--timing-function);
  display: flex;
  align-items: center;
`;

export const LangFlagIcon = styled.svg`
  min-width: 40px;
  min-height: 30px;

  @include tablet {
    margin-right: 10px;
  }
`;