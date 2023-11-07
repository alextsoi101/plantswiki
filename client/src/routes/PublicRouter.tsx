import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Plants from '../views/Plants';

const PublicRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/plants' element={<Plants />} />
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
    </Routes>
  );
};

export default PublicRouter;