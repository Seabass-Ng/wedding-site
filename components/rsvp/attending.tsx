import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.5em;
  > * {
    margin: 0.5em;
  }
`;

interface IAttending {
  onAttendingClick(boolean): () => void;
}

const ATTENDING: React.FC<IAttending> = ({ onAttendingClick }) => {
  return (
    <>
      <h2>Will you be attending?</h2>
      <CenteredContainer>
        <Button color="primary" size="large" variant="contained" onClick={onAttendingClick(true)}>
          Yes
        </Button>
        <Button color="primary" size="large" variant="contained" onClick={onAttendingClick(false)}>
          No
        </Button>
      </CenteredContainer>
    </>
  );
};

export default ATTENDING;
