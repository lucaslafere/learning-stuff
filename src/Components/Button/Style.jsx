import styled from 'styled-components';

export const Button = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  padding: ${(props) => props.padding};
`;
