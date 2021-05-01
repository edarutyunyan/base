import React from 'react';
import { Button, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { Auth } from '../../../Utils/API';

export const LoginPage: React.FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const handleSubmit = (data: any) => {
    const email = data.email;
    const pass = data.pass;
    console.log({ email, pass });
    if (mode === 'signin') {
      Auth.SignIn(email, pass)
        .then((res) => localStorage.setItem('user', JSON.stringify(res.user)))
        .catch((err) => console.error('error:', err.toJSON()));
    } else {
      Auth.SignUp(email, pass)
        .then((res) => localStorage.setItem('user', JSON.stringify(res.user)))
        .catch((err) => console.error('error:', err.toJSON()));
    }
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
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </Button>
      </Form>
    </div>
  );
};
