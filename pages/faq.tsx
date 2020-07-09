import { Card, CardContent, useMediaQuery } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { PAGES } from '../components/nav-tabs';

const FlexCards = styled(Card)`
  ${({ ismobile }: { ismobile: boolean }) =>
    ismobile
      ? `
    display: flex;
    flex-direction: column;
`
      : `
    display: inline-grid;
    grid-template-columns: 1fr 4fr;
`}
  justify-items: flex-start;
  margin: 1.25em 0;
  opacity: 0.9;
  width: 100%;
`;

interface IQACard {
  children: React.ReactNode;
  isMobile: boolean;
  question: string;
}

const QACard: React.FC<IQACard> = ({ children, isMobile, question }: IQACard) => (
  <FlexCards ismobile={isMobile}>
    <CardContent>
      <h2>{question}</h2>
    </CardContent>
    <CardContent>{children}</CardContent>
  </FlexCards>
);

const FAQ: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px');
  return (
    <Layout activeTab={PAGES.FAQ}>
      <QACard isMobile={isMobile} question="Where is CuriOdyssey?">
        <p>
          CuriOdyssey is located within the picturesque Coyote Point Recreational Area in San Mateo,
          CA. The closest airport is SFO - a mere 10 minute drive.
        </p>
      </QACard>

      <QACard isMobile={isMobile} question="Parking">
        <p>
          There is plenty of parking in front of CuriOdyssey. If those fill up, there is plenty of
          parking around Coyote Point Recreational Area.
        </p>
        <p>Parking passes will be included with the invitation.</p>
        <p>
          Cars have to leave by midnight or you will have to wait until the morning to move it out.
        </p>
      </QACard>

      <QACard isMobile={isMobile} question="Accomodations">
        <p>
          We do not have rooms blocked at any particular hotel. There are many accommodation options
          at a variety of price points in the area. The closest accommodations to Coyote Point
          Recreation Area is along Airport Blvd.
        </p>
      </QACard>

      <QACard isMobile={isMobile} question="Are We Allowed to Smoke/Vape?">
        <p>Please do not smoke or vape at CuriOdyssey and Coyote Point Recreational Area.</p>
        <div>
          Quote from the venue contract:
          <blockquote>
            Smoking and vaping are not permitted in the Facility or anywhere in the Coyote Point
            Recreational Area at any time. This includes recreational use, even if the user has a
            permit. Evidence of smoking or vaping in the Facility, whether by the Render, its
            guests, its vendors, or its caterer, will lead to a forfiet of the entire cleaning
            deposit. Any person found to be knowingly violating the restriction will be asked to
            leave the Facility and vacate Coyote Park grounds.
          </blockquote>
        </div>
      </QACard>

      <QACard
        isMobile={isMobile}
        question="Are you registered somewhere? What gifts should we bring?"
      >
        Your presence is the present. If you want to celebrate us with a gift, we would appreciate a
        monetary contribution to our honeymoon fund or our house fund.
      </QACard>
      <QACard isMobile={isMobile} question="Will there be alcohol? Should we bring some cash?">
        Yes, there will be alcohol. Please drink responsibly - don’t make us worry about your
        livers. You do not need to bring cash for the alcohol.
      </QACard>
      <QACard isMobile={isMobile} question="Should we bring our children?">
        We encourage all parents to take this as an opportunity for a night out without your
        children, but you can definitely bring them along if you want.
      </QACard>
      <QACard isMobile={isMobile} question="What does an unplugged ceremony mean?">
        We would love for you to be fully present, physically and mentally during our ceremony. That
        means resisting the urge to look at your phone, other device or take pictures. We’ve hired
        professionals to handle the pictures - and they will be distributed to you. We want to see
        your smiling faces - not the top of your heads or the backs of your phones.
      </QACard>
      <QACard isMobile={isMobile} question="What should we wear?">
        Semi-formal, but ready to dance. Bring a jacket in case the fog rolls in.
      </QACard>
    </Layout>
  );
};

export default FAQ;
