import React, { useContext } from 'react';
import { PageHeader } from 'antd';
import './Header.scss';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { AppContext } from '../../../App';

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

  const authLinks: { title: string; path: string }[] = [];

  return (
    <PageHeader
      title={<Link to={'/'}>Base</Link>}
      className={'Header'}
      extra={<NavWithRouter isAuth={isAuth} links={isAuth ? authLinks : nonAuthLinks} />}
    />
  );
};

export default Header;

type NavPropsType = RouteComponentProps<any> & {
  links: { path: string; title: string }[];
  isAuth: boolean;
};

const Nav: React.FC<NavPropsType> = ({ history, links, isAuth }) => {
  const { setUser } = useContext(AppContext);
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
            setUser && setUser(null);
            history.push('/');
          }}
          title={'Logout'}
        />
      )}
    </div>
  );
};

const NavWithRouter = withRouter(Nav);
