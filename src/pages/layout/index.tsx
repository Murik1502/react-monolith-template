import { ROUTES_NAMES } from '@/app/routers';
import { Outlet, useNavigate } from 'react-router-dom';

export const Layout = () => {
  const nav = useNavigate();

  return (
    <div className="App">
      Layout
      <button onClick={() => nav(ROUTES_NAMES.SOME_NAME)}>Navigate</button>
      <Outlet />
    </div>
  );
};
