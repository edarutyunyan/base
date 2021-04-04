import { database } from './database';

const addQuery = () => {
  const res = database
    .ref('users/')
    .get()
    .then((data) => console.log(data.toJSON()));
};
