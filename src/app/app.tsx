import { RouterProvider } from 'react-router';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { createRoutes } from './routers';
import { useEffect, useState } from 'react';
import { QueryClientProvider } from './configs';
import { toast, ToastContainer } from 'react-toastify';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = createRoutes();

  const checkIsAuth = async () => {
    try {
      setTimeout(() => {
        setIsAuth(true);
      }, 500);
    } catch {
      toast(`Произошла ошибка, повторите позже.`, { type: 'error' });
    }
  };

  useEffect(() => {
    checkIsAuth();
  }, []);

  if (!isAuth) {
    return <>Loading...</>;
  }

  return (
    <>
      <QueryClientProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};
