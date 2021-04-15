import React from 'react';
import { Button, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { Auth } from '../../../Utils/API';

export const LoginPage: React.FC<any> = () => {
  const handleSubmit = (data: any) => {
    const email = data.email;
    const pass = data.pass;
    console.log({ email, pass });
    Auth.SignUp(email, pass)
      .then((res) => console.log(res))
      .catch((err) => console.error('fckng error:', err.toJSON()));
  };
  return (
    <div className="LoginPage">
      <Form onFinish={handleSubmit} labelCol={{ span: 24 }} wrapperCol={{ span: 16 }}>
        <Form.Item name={'email'} label={'Email'}>
          <Input type={'email'} placeholder={'Email'} />
        </Form.Item>
        <Form.Item name={'pass'} label={'Password'}>
          <Password minLength={6} placeholder={'Password'} />
        </Form.Item>
        <Button htmlType={'submit'} type={'primary'} size={'small'}>
          Sign
        </Button>
      </Form>
    </div>
  );
};
