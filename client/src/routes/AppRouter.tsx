import { Routes, Route, Outlet } from 'react-router-dom';
import { Header, Footer, SideMenuModal } from '../components';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {

  return (
    <Routes>
      <Route
        element={
          <>
            {/* <SideMenuModal /> */}
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path='/*' element={<PublicRouter/>} />
        <Route path='/private/*' element={<PrivateRouter/>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;