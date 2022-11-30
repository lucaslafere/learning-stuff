import styled from 'styled-components';
import React, { useState } from 'react';

export default function App() {
  const [estado, setEstado] = useState('estadinho');

  return (
    <>
      <Container onClick={() => setEstado('kkkkkk mudei')}>
        oiiii, esse é o meu estado: {estado}, mas se vc clicar aqui eu vou mudar de nome
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: red;
  background-color: #f5f5f5;
`;
