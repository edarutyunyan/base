import React from 'react';
import { PageHeader } from 'antd';
import './Header.scss';

type HeaderProps = {};
const Header: React.FC<HeaderProps> = ({}: HeaderProps) => {
  return <PageHeader title={'Lunch Web'} className={'Header'} />;
};

export default Header;
