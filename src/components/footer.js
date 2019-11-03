import React from 'react';
import styled from 'styled-components';

const getCurrentYear = () => new Date().getFullYear();

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  &::before {
    content: '';
    background-color: white;
    height: 1px;
    position: absolute;
    top: 0;
    right: var(--medium-space);
    left: var(--medium-space);
  }

  > small:not(:last-child) {
    margin-right: var(--small-space);
  }
`;

export function Footer() {
  return (
    <Wrapper className='container'>
      <small>
        © {getCurrentYear()} <a href='https://bsonntag.me'>Benjamim Sonntag</a>
      </small>

      <small>
        {'Built with '}
        <a
          href='https://www.gatsbyjs.org/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Gatsby
        </a>
        {' and hosted on '}
        <a
          href='https://www.netlify.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Netlify
        </a>
      </small>
    </Wrapper>
  );
}
