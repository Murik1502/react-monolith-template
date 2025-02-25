import { RouterProvider } from 'react-router';
import './index.css';
import { createRoutes } from './routers';

export const App = () => {
  const router = createRoutes();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
