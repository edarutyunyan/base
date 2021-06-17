import React, { lazy } from 'react';

export type RouteType = {
  component: React.FunctionComponent;
  path: string;
};

const MainPage = lazy(() => import('../Components/Pages/MainPage'));
const RoadSVGPage = lazy(() => import('../Components/Pages/RoadSVG'));

const CommonRoutes = [
  {
    path: '/',
    component: () => <MainPage />,
  },
  {
    path: '/road',
    component: () => <RoadSVGPage />,
  },
];

export const Authenticated: RouteType[] = [
  ...CommonRoutes,
  {
    path: '/road',
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
