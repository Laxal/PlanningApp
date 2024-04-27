import styled from 'styled-components';
import { Themes } from '../redux/reducer';

const Container = styled.div<{ $theme: Themes }>`
  background: ${(props) => (props.$theme === 'light' ? 'white' : 'darkgray')};
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
`;

export { Container };
