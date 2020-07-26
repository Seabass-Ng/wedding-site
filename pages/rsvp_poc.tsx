import { Card } from '@material-ui/core';

import React, { useState } from 'react';
import styled from 'styled-components';
import Allergies from '../components/rsvp/allergies';
import Attending from '../components/rsvp/attending';
import Layout from '../components/layout';
import List from '../components/rsvp/list';
import Passcode from '../components/rsvp/passcode';
import { PAGES } from '../components/nav-tabs';

const CenteredCards = styled(Card)`
  background: gray;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  position: relative;
`;

const FormContainer = styled.div`
  flex: 1 1 auto;
  left: 50%;
  padding: 1em;
  position: absolute;
  top: ${({ top }) => top};
  transform: translate(-50%, -50%);
  transition: top 0.2s ease-in;
  z-index: 1;
`;

const InnerFormContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  opacity: 1;
  padding: 2em;
  position: relative;
  z-index: 1;
`;

const RSVP_STATE = {
  PASSCODE: 'passcode',
  LIST: 'list',
  ATTENDING: 'attending',
  ALLERGIES: 'allergies',
};

const topState = {
  [RSVP_STATE.PASSCODE]: {
    [RSVP_STATE.PASSCODE]: '50%',
    [RSVP_STATE.LIST]: '150%',
    [RSVP_STATE.ATTENDING]: '150%',
    [RSVP_STATE.ALLERGIES]: '150%',
  },
  [RSVP_STATE.LIST]: {
    [RSVP_STATE.PASSCODE]: '-50%',
    [RSVP_STATE.LIST]: '50%',
    [RSVP_STATE.ATTENDING]: '150%',
    [RSVP_STATE.ALLERGIES]: '150%',
  },
  [RSVP_STATE.ATTENDING]: {
    [RSVP_STATE.PASSCODE]: '-50%',
    [RSVP_STATE.LIST]: '-50%',
    [RSVP_STATE.ATTENDING]: '50%',
    [RSVP_STATE.ALLERGIES]: '150%',
  },
  [RSVP_STATE.ALLERGIES]: {
    [RSVP_STATE.PASSCODE]: '-50%',
    [RSVP_STATE.LIST]: '-50%',
    [RSVP_STATE.ATTENDING]: '-50%',
    [RSVP_STATE.ALLERGIES]: '50%',
  },
};

const Container = ({ children, top }) => (
  <FormContainer top={top}>
    <InnerFormContainer>{children}</InnerFormContainer>
  </FormContainer>
);

const RSVP: React.FC = () => {
  const [rsvpState, setRsvpState] = useState(RSVP_STATE.PASSCODE);
  const [error, setError] = useState('');
  const [formTempState, setFormTempState] = useState({});
  const [rows, setRows] = useState([]);

  const modifyRow = formState => {
    const newRows = [...rows];
    newRows[formState.id] = {
      ...rows[formState.id],
      ...formState,
    };
    setRows(newRows);
  };
  const onPasscodeNextClick = async (code, lastName) => {
    const response = await fetch(`/api/rsvp?code=${code}&lastName=${lastName}`);
    const people = await response.json();

    if (people.length > 0) {
      setError('');
      setRsvpState(RSVP_STATE.LIST);
      setRows(people);
      setFormTempState({});
    } else {
      setError('Sorry, we could not find people matching that code and last name');
    }
  };
  const onListItemClick = (id: number) => () => {
    setRsvpState(RSVP_STATE.ATTENDING);
    setFormTempState({ ...rows[id], id });
  };
  const onAttendingClick = (attending: boolean) => async () => {
    if (attending) {
      setRsvpState(RSVP_STATE.ALLERGIES);
      setFormTempState({
        ...formTempState,
        attending,
      });
    } else {
      const formState = {
        ...formTempState,
        attending: false,
        allergies: '',
      };
      modifyRow(formState);
      setFormTempState({});
      setRsvpState(RSVP_STATE.LIST);
      await fetch('/api/rsvp', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(formState),
      });
    }
  };
  const onCancelClick = () => {
    setFormTempState({});
    setRsvpState(RSVP_STATE.LIST);
  };
  const onCompleteClick = async allergies => {
    const formState = {
      ...formTempState,
      allergies,
    };
    modifyRow(formState);
    setFormTempState({});
    setRsvpState(RSVP_STATE.LIST);
    await fetch('/api/rsvp', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formState),
    });
  };
  return (
    <Layout activeTab={PAGES.RSVP} withinPage>
      <CenteredCards>
        <Container top={topState[rsvpState][RSVP_STATE.PASSCODE]}>
          <Passcode error={error} onNextClick={onPasscodeNextClick} />
        </Container>
        <Container top={topState[rsvpState][RSVP_STATE.LIST]}>
          <List onListItemClick={onListItemClick} rows={rows} />
        </Container>
        <Container top={topState[rsvpState][RSVP_STATE.ATTENDING]}>
          <Attending onAttendingClick={onAttendingClick} />
        </Container>
        <Container top={topState[rsvpState][RSVP_STATE.ALLERGIES]}>
          <Allergies onCancelClick={onCancelClick} onCompleteClick={onCompleteClick} />
        </Container>
      </CenteredCards>
    </Layout>
  );
};

export default RSVP;
