import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import FormFooter from './form-footer';

interface IAllergies {
  onCancelClick: () => void;
  onCompleteClick(string): void;
}

const ALLERGIES: React.FC<IAllergies> = ({ onCancelClick, onCompleteClick }) => {
  const [textField, setTextField] = useState('');
  const onNextClick = () => {
    onCompleteClick(textField);
  };
  return (
    <>
      <h2>Do you have any food allergies that we need to be aware of</h2>
      <TextField
        label="List Allergies here"
        multiline
        value={textField}
        onChange={event => setTextField(event?.target?.value)}
      />
      <FormFooter>
        <Button color="primary" onClick={onCancelClick}>
          Cancel
        </Button>
        <Button color="primary" variant="contained" onClick={onNextClick}>
          {textField ? 'Submit' : 'Skip'}
        </Button>
      </FormFooter>
    </>
  );
};

export default ALLERGIES;
