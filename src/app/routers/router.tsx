import { Navigate, createBrowserRouter } from 'react-router-dom';

import { HelloWorld, Layout } from '@/pages';
import { ROUTES_NAMES } from './types';

export const createRoutes = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: ROUTES_NAMES.SOME_NAME,
          element: <HelloWorld />,
        },
        {
          path: '*',
          element: <Navigate to={'/'} />,
        },
      ],
    },
  ]);
};
