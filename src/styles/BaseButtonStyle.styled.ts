import styled from 'styled-components';

const Button = styled.button<{ width: string; height: string }>`
  max-width: ${(props) => props.width};
  width: 100%;
  height: ${(props) => props.height};
  border-radius: 5px;
  color: white;
  background-color: blueviolet;
  outline: transparent;
  border: none;
`;

export { Button };
