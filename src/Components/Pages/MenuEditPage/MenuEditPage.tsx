import React, { useEffect, useState } from 'react';
import './MenuEditPage.scss';
import { DishesListSideMenu } from '../../Fragments/DishesListSideMenu';
import LunchMenuCreateForm from '../../Fragments/Forms/MenuCreateForm';
import { CategoryCreateForm } from '../../Fragments/Forms/CategoryCreate';
import { getLunchMenus } from '../../../Utils/API';
import { database } from '../../../Utils/firebase';
import { DishCreateForm } from '../../Fragments/Forms/DishCreateForm';

export const MenuEditPage: React.FC<any> = ({}) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getLunchMenus().then((response) => {
      if (response) {
        const normalized = Object.entries(response).map((data) => ({
          menuId: data[0],
          menuDescription: data[1].menuDescription,
          menuName: data[1].menuName,
        }));
        console.log(normalized);

        database
          .ref('categories')
          .get()
          .then((res) => console.log(Object.values(res.toJSON() as Object)));
      }
    });
  }, []);

  return (
    <div className="MenuEditPage">
      <div className="MenuEditPage-content">
        <LunchMenuCreateForm />
        <CategoryCreateForm />
        <DishCreateForm />
      </div>

      <div className="MenuEditPage-side-col">
        <DishesListSideMenu />
      </div>
    </div>
  );
};
