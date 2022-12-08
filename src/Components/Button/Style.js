import styled from "styled-components";

export const Button = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #000;
  border-radius: 10px;
  padding: ${({ padding }) => padding};
  width: ${({ size }) =>
    (size === "small" && "100px") ||
    (size === "medium" && "140px") ||
    (size === "large" && "180px")};
  height: ${({ size }) =>
    (size === "small" && "40px") ||
    (size === "medium" && "60px") ||
    (size === "large" && "80px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
