import { database } from './firebase';
import axios from 'axios';
import firebase from 'firebase';

const createLunchMenu = async (data: { menuName: string; menuDescription: string }) => {
  return await database
    .ref('menus')
    .push(data)
    .then((response) => response.toJSON());
};

const getLunchMenus = async () => {
  return await database
    .ref('menus')
    .get()
    .then((res) => res.toJSON());
};
const createMenuCategory = async (data: { categoryName: string; menuId: string }) => {
  return await database
    .ref('categories')
    .push(data)
    .then((response) => response.toJSON());
};

export { createLunchMenu, getLunchMenus, createMenuCategory };

class Auth {
  static async SignUp(email: string, password: string) {
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  static async SignIn(email: string, password: string) {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

export { Auth };
