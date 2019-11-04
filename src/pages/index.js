import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import { Metatags } from '../components/metatags';
import { PageLayout } from '../components/page-layout';

const query = graphql`
  query {
    allContentfulConcert(sort: { fields: date, order: DESC }) {
      nodes {
        id
        name
        location
        days {
          date
          bands
        }
      }
    }
  }
`;

const ConcertsListItem = styled.li`
  &::before {
    content: '';
    background-color: white;
    display: block;
    height: 1px;
    width: 100%;
    margin: var(--medium-space) 0;
  }
`;

const ConcertTitle = styled.h2`
  margin-bottom: 0;
`;

const DaysList = styled.ol`
  display: flex;
  flex-flow row wrap;
  gap: var(--small-space);
  justify-content: center;

  ${({ numberOfDays }) => {
    if (numberOfDays % 4 === 0) {
      return css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
      `;
    }
  }}
`;

const DaysListItem = styled.li`
  flex: 1 0 184px;
  white-space: nowrap;
`;

function HomePage() {
  const data = useStaticQuery(query);

  return (
    <PageLayout>
      <Metatags />
      <h1>Concerts</h1>

      <ol>
        {data.allContentfulConcert.nodes.map(concert => (
          <ConcertsListItem key={concert.id}>
            <ConcertTitle>{concert.name}</ConcertTitle>
            <p>{concert.location}</p>

            <DaysList numberOfDays={concert.days.length}>
              {concert.days.map(day => (
                <DaysListItem key={day.date}>
                  <p>{day.date}</p>
                  <ol>
                    {day.bands.map(band => (
                      <li key={band}>{band}</li>
                    ))}
                  </ol>
                </DaysListItem>
              ))}
            </DaysList>
          </ConcertsListItem>
        ))}
      </ol>
    </PageLayout>
  );
}

export default HomePage;
