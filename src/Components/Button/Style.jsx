import styled from 'styled-components';

export const Button = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  padding: ${({ padding }) => padding};
  width: ${({ size }) =>
    (size === 'small' && '100px') || (size === 'large' && '300px') || (size === 'medium' && '200px')};
  height: ${({ size }) =>
    (size === 'small' && '100px') || (size === 'large' && '300px') || (size === 'medium' && '200px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
