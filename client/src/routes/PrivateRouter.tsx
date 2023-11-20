import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  MY_ACCOUNT,
  MY_ARTICLES,
  MY_REACTIONS,
  MY_INFORMATION,
  MY_PASSWORD } from './consts';
import MyAccount from '../views/MyAccount';
import MyArticles from '../views/MyArticles';
import MyReactions from '../views/MyReactions';
import MyInformation from '../views/MyInformation';
import MyPassword from '../views/MyPassword';

const PrivateRouter = () => {

  return (
    <Routes>
      <Route path={MY_ACCOUNT} element={<MyAccount />} />
      <Route path={MY_ARTICLES} element={<MyArticles />} />
      <Route path={MY_REACTIONS} element={<MyReactions />} />
      <Route path={MY_INFORMATION} element={<MyInformation />} />
      <Route path={MY_PASSWORD} element={<MyPassword />} />
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
    </Routes>
  );
};

export default PrivateRouter;