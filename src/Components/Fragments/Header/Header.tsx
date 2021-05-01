import React from 'react';
import { PageHeader } from 'antd';
import './Header.scss';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

type HeaderProps = { isAuth: boolean };
const Header: React.FC<HeaderProps> = ({ isAuth }: HeaderProps) => {
  const nonAuthLinks = [
    {
      path: 'signin',
      title: 'Вход',
    },
    {
      path: 'signup',
      title: 'Регистрация',
    },
  ];
  const authLinks = [
    {
      path: 'menuedit',
      title: 'Редактировать меню',
    },
  ];
  return (
    <PageHeader
      title={<Link to={'/'}>Lunch Web</Link>}
      className={'Header'}
      extra={<NavWithRouter isAuth={isAuth} links={isAuth ? authLinks : nonAuthLinks} />}
    />
  );
};

export default Header;

const Nav: React.FC<
  RouteComponentProps<any> & {
    children?: React.ReactNode;
    links: { path: string; title: string }[];
    isAuth: boolean;
  }
> = ({ history, links, isAuth }) => {
  return (
    <div className={'header-navigation'}>
      {links.map((link) => (
        <Link
          className={'header-navigation__link'}
          to={link.path}
          title={link.title}
          key={link.path}
        >
          {link.title}
        </Link>
      ))}
      {isAuth && (
        <LogoutOutlined
          onClick={() => {
            localStorage.removeItem('user');
            history.push('/');
          }}
          title={'Logout'}
        />
      )}
    </div>
  );
};

const NavWithRouter = withRouter(Nav);
