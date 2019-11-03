import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Metatags } from '../components/metatags';
import { PageLayout } from '../components/page-layout';

const query = graphql`
  query {
    allContentfulConcert(sort: { fields: date, order: DESC }) {
      nodes {
        id
        name
        date
        bands
        location
      }
    }
  }
`;

const ListItem = styled.li`
  &::before {
    content: '';
    background-color: white;
    display: block;
    height: 1px;
    width: 100%;
    margin: var(--medium-space) 0;
  }
`;

function HomePage() {
  const data = useStaticQuery(query);

  return (
    <PageLayout>
      <Metatags />
      <h1>Concerts</h1>

      <ol>
        {data.allContentfulConcert.nodes.map(concert => (
          <ListItem key={concert.id}>
            <h2>{concert.name}</h2>
            <p>
              {concert.date} - {concert.location}
            </p>

            <ul>
              {concert.bands.map(band => (
                <li key={band}>{band}</li>
              ))}
            </ul>
          </ListItem>
        ))}
      </ol>
    </PageLayout>
  );
}

export default HomePage;
