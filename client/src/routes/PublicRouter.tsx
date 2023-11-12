import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Plants from '../views/Plants';
import PlantInfo from '../views/PlantInfo';
import Blog from '../views/Blog';

const PublicRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/plants' element={<Plants />} />
      <Route path='/plants/:id' element={<PlantInfo />} />
      <Route path='/blog' element={<Blog />} />
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
    </Routes>
  );
};

export default PublicRouter;