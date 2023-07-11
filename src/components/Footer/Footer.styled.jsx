import styled from '@emotion/styled';

export const FooterComponent = styled.div`
  position: fixed;
  bottom: 10px;
  right: 15px;
  left: 15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  width: auto;
  border-radius: 5px;
  background-color: green;
  /* background-color: var(--background-color-component); */
  box-shadow: var(--box-shadow);
  opacity: 0.9;
  z-index: 2;
`;