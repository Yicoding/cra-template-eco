import type { AppProps } from '@wonder-ui/core';

const routes: AppProps['routes'] = [
  {
    path: '/',
    async: () => import('../pages/home')
  },
  {
    path: '/order',
    async: () => import('../pages/order')
  },
];

export default routes;
