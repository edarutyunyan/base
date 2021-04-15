import React, { useRef } from 'react';
import { Button, Card, Form, FormInstance, Input } from 'antd';
import './LunchMenuCreateForm.scss';
import { database } from '../../../../Utils/firebase';
import { createLunchMenu } from '../../../../Utils/API';

type MenuCreateFormProps = {};

const LunchMenuCreateForm: React.FC<MenuCreateFormProps> = ({}: MenuCreateFormProps) => {
  const formRef = useRef<FormInstance<any>>(null);

  const onFormSubmit = (data: any) => {
    createLunchMenu({
      menuName: data.menuName,
      menuDescription: data.menuDesc,
    }).then((res) => formRef.current?.resetFields());
  };

  return (
    <Card hoverable>
      <Form
        name={'menuCreate'}
        className={'LunchMenuCreateForm'}
        labelCol={{ span: 24 }}
        onFinish={onFormSubmit}
        ref={formRef}
      >
        <Form.Item label={'Название меню'} name={'menuName'} initialValue={''}>
          <Input placeholder={'Например: "Основное" или "Бизнес ланч" или "Винная карта" '} />
        </Form.Item>

        <Form.Item label={'Описание'} name={'menuDesc'} initialValue={''}>
          <Input.TextArea rows={3} />
        </Form.Item>

        <Button htmlType={'submit'}>Submit</Button>
      </Form>
    </Card>
  );
};

export default LunchMenuCreateForm;
