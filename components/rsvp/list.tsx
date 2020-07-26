import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

interface IRow {
  id: number;
  allergies: string;
  attending: boolean;
  FirstName: string;
  LastName: string;
}

interface IList {
  onListItemClick(number): () => void;
  rows: IRow[];
}

const AttendeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AttendeeCard = styled(Card)`
  margin: 1em;
  min-height: 100px;
  width: 300px;
`;

const Title = styled.h2`
  padding-bottom: 16px;
`;

const List: React.FC<IList> = ({ onListItemClick, rows }) => (
  <>
    <Title>List of Attendees</Title>
    <AttendeeContainer>
      {rows.map((row, index) => (
        <AttendeeCard onClick={onListItemClick(index)} key={`${row.LastName}, ${row.FirstName}`}>
          <CardContent>
            <h3>
              {row.LastName}, {row.FirstName}
            </h3>
            <p>
              <b>Attending</b>: {row.attending ? 'YES' : 'NO'}
            </p>
            <p>
              <b>Allergies</b>: {row.allergies}
            </p>
          </CardContent>
        </AttendeeCard>
      ))}
    </AttendeeContainer>
  </>
);

export default List;
