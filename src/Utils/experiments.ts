import { database } from './firebase';
import axios from 'axios';

const getData = (endpoint: string) => {
  return database
    .ref(endpoint)
    .get()
    .then((res) => res.toJSON());
};

const createData = (endpoint: string, data: { [key: string]: any }) => {
  return database
    .ref(endpoint)
    .push(data)
    .then((response) => response);
};

const createDataInDatabase = () => {
  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((num) => {
    axios
      .post('https://ed-artn-lunch-project-default-rtdb.firebaseio.com/users.json', {
        username: `userId${num}`,
        cashBalance: 10000 * (Math.random() * num),
      })
      .then((res) => console.log(res.data));
  });
};

export { getData, createData, createDataInDatabase };

/* WORKED */
/*
* .patch('https://ed-artn-lunch-project-default-rtdb.firebaseio.com/users.json', {
        '-MXhOXbwFdrMfj02OMzP/userName': 'userId1234',
      })
*
* axios
      .delete(
        'https://ed-artn-lunch-project-default-rtdb.firebaseio.com/users/-MXhQUb-Ost6A5Xm-6f9.json'
      )
*
*
* */
