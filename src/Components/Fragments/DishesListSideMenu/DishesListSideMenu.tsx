import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export const DishesListSideMenu: React.FC<any> = ({}) => {
  return (
    <Menu style={{ width: 250 }} mode={'inline'}>
      <SubMenu title={'Основное меню'} key={'sub1'}>
        <Menu.ItemGroup title={'Горячее'} key={'g1'}>
          <Menu.Item>Стейк из свинины</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title={'Салаты'} key={'g2'}>
          <Menu.Item>Цезарь</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title={'Десерты'} key={'g3'}>
          <Menu.Item>Шоколадный чизкейк</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};
