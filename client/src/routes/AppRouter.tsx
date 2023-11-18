import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {

  return (
    <Routes>
      <Route
        element={
          <>
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