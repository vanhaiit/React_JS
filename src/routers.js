import React from 'react';
import HomePage from './pages/home_page/HomePage';
import NotFound from './pages/not_found_page/NotFoundPage';
import ProductListPage from './pages/product_list_page/ProductListPage';
import ProductActionPage from './pages/product_action_page/ProductActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    }, {
        path: '/products',
        exact: true,
        main: () => <ProductListPage />
    }, {
        path: '/products/add',
        exact: true,
        main: ({ history }) => <ProductActionPage history={history} />
    }, {
        path: '/products/:id',
        exact: true,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]
export default routes;