import React, { memo } from 'react';
import styled from 'styled-components';
import moment from 'moment';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  > * {
    font-weight: 700;
    text-align: center;
  }
`;

const StyledH1 = styled.h1`
  font-family: 'Norican';
  font-style: normal;
  font-weight: 400;
`;

const Header: React.FC = memo(() => {
  const today = moment();
  return (
    <StyledHeader>
      <StyledH1>Alanna Wong and Sebastian Ng</StyledH1>
      <p>
        October 30<sup>th</sup>, 2021 - San Mateo, CA
      </p>
      <p>{moment('20211030', 'YYYYMMDD').from([today.year(), today.month(), today.date()])}</p>
    </StyledHeader>
  );
});

export default Header;
