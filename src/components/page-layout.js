import React from 'react';
import styled from 'styled-components';
import { Footer } from '../components/footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

export function PageLayout({ children }) {
  return (
    <Wrapper>
      <Main className='container'>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
