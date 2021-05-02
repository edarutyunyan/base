import React, { useContext } from 'react';
import { Button, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { Auth } from '../../../Utils/API';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppContext } from '../../../App';

type LoginPageProps = RouteComponentProps<any> & {
  children?: React.ReactNode;
  mode: 'signin' | 'signup';
};

const LoginPage: React.FC<LoginPageProps> = ({ history, mode }) => {
  const { setUser } = useContext(AppContext);

  const handleSubmit = (data: any) => {
    const email = data.email;
    const pass = data.pass;
    (mode === 'signin' ? Auth.SignIn : Auth.SignUp)(email, pass)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        setUser && setUser(res.user);
        history.push('/');
      })
      .catch((err) => console.error('error:', err.toJSON()));
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
export default withRouter(LoginPage);
