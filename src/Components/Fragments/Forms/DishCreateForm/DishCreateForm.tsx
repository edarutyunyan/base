import React from 'react';
import { Button, Form, Input } from 'antd';

export const DishCreateForm = () => {
  return (
    <Form className="create-dish-form">
      <Form.Item label={'Название блюда'}>
        <Input />
      </Form.Item>
      <Form.Item label={'Вес / Цена'}>
        <Input />
      </Form.Item>

      <Form.Item label={'Описание блюда'}>
        <Input.TextArea />
      </Form.Item>
      <Button htmlType={'submit'}>Добавить блюдо</Button>
    </Form>
  );
};
