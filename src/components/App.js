import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants';

const HomePage = lazy(() => import('../layouts/SharedLayout'));
const AddBookPage = lazy(() => import('../layouts/AddBookLayout'));

export const App = () => {

  return (
    <Routes>
      <Route path={ ROUTES.HOME } element={ <HomePage /> } />
      <Route path={ `/${ROUTES.ADD_BOOK}` } element={ <AddBookPage /> } />
      <Route path={ `/${ROUTES.EDIT_BOOK}/:bookId` } element={ <AddBookPage /> } />
      <Route path={ `/${ROUTES.EDIT_BOOK}` } element={ <AddBookPage /> } />
    </Routes>
  );
};
