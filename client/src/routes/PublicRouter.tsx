import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home';

const PublicRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
    </Routes>
  );
};

export default PublicRouter;