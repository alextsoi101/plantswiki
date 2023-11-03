import {Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import PublicRouter from './PublicRouter';

const AppRouter = () => {

  return (
    <Routes>
      <Route
        element={
          <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
          </>
        }
      >
        <Route path='/*' element={<PublicRouter/>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;