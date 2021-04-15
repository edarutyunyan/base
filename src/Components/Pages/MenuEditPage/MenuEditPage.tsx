import React, { useEffect, useState } from 'react';
import './MenuEditPage.scss';
import { DishesListSideMenu } from '../../Fragments/DishesListSideMenu';
import LunchMenuCreateForm from '../../Fragments/Forms/MenuCreateForm';
import { CategoryCreateForm } from '../../Fragments/Forms/CategoryCreate';
import { getLunchMenus } from '../../../Utils/API';
import { database } from '../../../Utils/firebase';

export const MenuEditPage = () => {
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
        console.log(Object.entries(response));
        database
          .ref('categories/-MY66wnjrc8CovJizl9R')
          .get()
          .then((res) => console.log(res.toJSON()));
      }
    });
  }, []);

  return (
    <div className="MenuEditPage">
      <div className="MenuEditPage-content">
        <LunchMenuCreateForm />
        <CategoryCreateForm />
      </div>

      <div className="MenuEditPage-side-col">
        <DishesListSideMenu />
      </div>
    </div>
  );
};