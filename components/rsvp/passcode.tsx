import { Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import FormFooter from './form-footer';

interface IPasscode {
  error: string;
  onNextClick(string, string): void;
}

const RSVP_PASSCODE: React.FC<IPasscode> = ({ error, onNextClick }) => {
  const [code, setCode] = useState('');
  const [lastName, setLastName] = useState('');
  const [nextAble, setNextAble] = useState(false);
  const updateNextAble = (newCode, newLastName) => {
    if (newCode && newLastName) {
      setNextAble(true);
    } else {
      setNextAble(false);
    }
  };
  const onCodeChange = ev => {
    setCode(ev?.target?.value);
    updateNextAble(ev?.target?.value, lastName);
  };
  const onLastNameChange = ev => {
    setLastName(ev?.target?.value);
    updateNextAble(code, ev?.target?.value);
  };
  const onClick = () => onNextClick(code, lastName);
  return (
    <>
      <h2>Please enter code in the invitation with your last name</h2>
      {error && (
        <Alert elevation={6} severity="error" variant="filled">
          {error}
        </Alert>
      )}
      <TextField label="Code" onChange={onCodeChange} value={code} />
      <TextField label="Last Name" onChange={onLastNameChange} value={lastName} />
      <FormFooter>
        <Button color="primary" variant="outlined" onClick={onClick} disabled={!nextAble}>
          Next
        </Button>
      </FormFooter>
    </>
  );
};

export default RSVP_PASSCODE;
