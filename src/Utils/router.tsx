import React, { lazy } from 'react';

export type RouteType = {
  component: React.FunctionComponent;
  path: string;
};

const MainPage = lazy(() => import('../Components/Pages/MainPage'));

const CommonRoutes = [
  {
    path: '/',
    component: () => <MainPage />,
  },
];

export const Authenticated: RouteType[] = [
  ...CommonRoutes,
  {
    path: '/menuedit',
    component: () => <></>,
  },
];

const Login = lazy(() => import('../Components/Pages/Login'));

export const NonAuthenticated: RouteType[] = [
  ...CommonRoutes,
  {
    path: '/signin',
    component: () => <Login mode={'signin'} />,
  },
  {
    path: '/signup',
    component: () => <Login mode={'signup'} />,
  },
];
