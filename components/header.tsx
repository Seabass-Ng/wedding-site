import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  > * {
    font-weight: 700;
    text-align: center;
    text-shadow: -1px 0 darkgray, 0 1px darkgray, 1px 0 darkgray, 0 -1px darkgray;
  }
`;

const StyledH1 = styled.h1`
  font-family: 'Norican';
  font-style: normal;
  font-weight: 400;
`;

const Header: React.FC = () => (
  <StyledHeader>
    <StyledH1>Alanna Wong and Sebastian Ng</StyledH1>
    <p>
      June 12<sup>th</sup>, 2021 - San Mateo, CA
    </p>
    <p>{moment('20210612', 'YYYYMMDD').fromNow()}</p>
  </StyledHeader>
);

export default Header;
