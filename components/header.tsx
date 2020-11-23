import React, { memo } from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

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
  return (
    <StyledHeader>
      <StyledH1>Alanna Wong and Sebastian Ng</StyledH1>
      <p>
        October 30<sup>th</sup>, 2021 - San Mateo, CA
      </p>
      <p>{formatDistanceToNow(new Date(2021, 9, 30))}</p>
    </StyledHeader>
  );
});

export default Header;
