import React from 'react';
import { Card, Form, Input } from 'antd';

export const CategoryCreateForm: React.FC<any> = () => {
  return (
    <Card hoverable>
      <Form className={'LunchMenuCreateForm'} labelCol={{ span: 24 }}>
        <Form.Item label={'Категория'}>
          <Input placeholder={'Например: "Горячее" или "Закуски"'} />
        </Form.Item>

        <div className="create-dish-form">
          <Form.Item label={'Название блюда'}>
            <Input />
          </Form.Item>
          <Form.Item label={'Вес / Цена'}>
            <Input />
          </Form.Item>

          <Form.Item label={'Описание блюда'}>
            <Input.TextArea />
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};
