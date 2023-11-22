//Public router:
export const HOME = '/';
export const PLANTS = '/plants';
export const PLANT_INFO = '/plants/:id';
export const BLOG = '/blog';
export const BLOG_ARTICLES = '/blog/articles';
export const ARTICLE = '/blog/articles/:id';
export const ARTICLE_CREATE = '/blog/create';
export const USER = '/user/:id';
export const SIGNUP = '/signup';
export const LOGIN = '/login';

//Private router:
export const MY_ACCOUNT = '/myaccount';
export const MY_ARTICLES = '/myaccount/articles';
export const MY_REACTIONS = '/myaccount/reactions';
export const MY_INFORMATION = '/myaccount/information';
export const MY_PASSWORD = '/myaccount/password';

//Page paths:
export const HOME_PAGE = '/';
export const PLANTS_PAGE = '/plants';
export const PLANT_INFO_PAGE = (id: string) => `/plants/${id}`;
export const BLOG_PAGE = '/blog';
export const BLOG_ARTICLES_PAGE = '/blog/articles';
export const ARTICLE_PAGE = (id: string) => `/blog/articles/${id}`;
export const ARTICLE_CREATE_PAGE = '/blog/create';
export const USER_PAGE = (id: string) => `/user/${id}`;
export const SIGNUP_PAGE = '/signup';
export const LOGIN_PAGE = '/login';
export const MY_ACCOUNT_PAGE = '/private/myaccount';
export const MY_ARTICLES_PAGE = '/private/myaccount/articles';
export const MY_INFORMATION_PAGE = '/private/myaccount/information';
export const MY_PASSWORD_PAGE = '/private/myaccount/password';