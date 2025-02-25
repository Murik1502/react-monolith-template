import { ROUTES_NAMES } from '@/app/routers';
import { Outlet, useNavigate } from 'react-router-dom';
import s from './layout.module.scss';

export const Layout = () => {
  const nav = useNavigate();

  return (
    <div className={s.layout}>
      Layout
      <button onClick={() => nav(ROUTES_NAMES.SOME_NAME)}>Navigate</button>
      <Outlet />
    </div>
  );
};
