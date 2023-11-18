import { Routes, Route, Navigate } from 'react-router-dom';
import MyAccount from '../views/MyAccount';
import MyArticles from '../views/MyArticles';
import MyReactions from '../views/MyReactions';
import MyInformation from '../views/MyInformation';
import MyPassword from '../views/MyPassword';

const PrivateRouter = () => {

  return (
    <Routes>
      <Route path='/myaccount' element={<MyAccount />} />
      <Route path='/myaccount/articles' element={<MyArticles />} />
      <Route path='/myaccount/reactions' element={<MyReactions />} />
      <Route path='/myaccount/information' element={<MyInformation />} />
      <Route path='/myaccount/password' element={<MyPassword />} />
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
    </Routes>
  );
};

export default PrivateRouter;