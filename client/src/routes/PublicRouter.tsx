import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  HOME,
  PLANTS,
  PLANT_INFO,
  BLOG,
  BLOG_ARTICLES,
  ARTICLE,
  ARTICLE_CREATE } from './consts';
import Home from '../views/Home';
import Plants from '../views/Plants';
import PlantInfo from '../views/PlantInfo';
import Blog from '../views/Blog';
import BlogArticles from '../views/BlogArticles';
import Article from '../views/Article';
import ArticleCreate from '../views/ArticleCreate';

const PublicRouter = () => {

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={PLANTS} element={<Plants />} />
      <Route path={PLANT_INFO} element={<PlantInfo />} />
      <Route path={BLOG} element={<Blog />} />
      <Route path={BLOG_ARTICLES} element={<BlogArticles />} />
      <Route path={ARTICLE} element={<Article />} />
      <Route path={ARTICLE_CREATE} element={<ArticleCreate />} />
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
    </Routes>
  );
};

export default PublicRouter;