import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Metatags } from '../components/metatags';
import { PageLayout } from '../components/page-layout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

function NotFoundPage() {
  return (
    <PageLayout>
      <Metatags />
      <Wrapper>
        <h1>NOT FOUND</h1>
        <Link to='/'>Go home</Link>
      </Wrapper>
    </PageLayout>
  );
}

export default NotFoundPage;
