import firebase from 'firebase-admin';
import serviceAccount from '../firebase-secret.json';

try {
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://sebastian-alanna-wedding.firebaseio.com',
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const db = firebase.database();

export default {
  db,
};
