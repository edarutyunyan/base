import React from 'react';
import { Form, Input } from 'antd';
import './MenuCreateForm.scss';
import { AddButton } from '../../Buttons/AddButton';

type MenuCreateFormProps = {};

const MenuCreateForm: React.FC<MenuCreateFormProps> = ({}: MenuCreateFormProps) => {
  return (
    <>
      <Form className={'LunchMenuCreateForm'} labelCol={{ span: 24 }}>
        <Form.Item label={'Название меню'}>
          <Input placeholder={'Например: "Основное" или "Бизнес ланч" или "Винная карта" '} />
        </Form.Item>

        <Form.Item label={'Описание'}>
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>

      <div>
        <AddButton onClick={() => null} title={'Добавить категорию'} />
      </div>
    </>
  );
};

export default MenuCreateForm;
