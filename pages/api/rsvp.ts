import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../lib/firebase';

const getRSVPs = (req, res) => {
  const {
    query: { code, lastName },
  } = req;
  const rsvpConn = db.ref(`rsvp/${code}`);
  rsvpConn.once('value', snapshot => {
    const people = snapshot.val();
    if (people?.filter && people.filter(person => person.LastName === lastName).length > 0) {
      res.end(JSON.stringify(people.map(person => ({ ...person, code }))));
    } else {
      res.end(JSON.stringify([]));
    }
  });
};

const postRSVPs = (req, res) => {
  const { body } = req;
  const { code, LastName, FirstName, allergies, attending } = body;
  const rsvpConn = db.ref(`rsvp/${code}`);
  rsvpConn.once('value', snapshot => {
    const people = snapshot.val();
    if (people?.find) {
      const matchingPerson = people.find(
        person => person.LastName === LastName && person.FirstName === FirstName,
      );
      if (
        matchingPerson &&
        (matchingPerson.allergies !== allergies || matchingPerson.attending !== attending)
      ) {
        matchingPerson.allergies = allergies;
        matchingPerson.attending = attending;
        try {
          db.ref().update({
            [`rsvp/${code}`]: people,
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
    res.end();
  });
};

export default (req: NextApiRequest, res: NextApiResponse): void => {
  switch (req.method) {
    case 'GET':
      getRSVPs(req, res);
      break;
    case 'POST':
      postRSVPs(req, res);
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
};
