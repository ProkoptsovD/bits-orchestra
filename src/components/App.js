import { lazy, createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants';
import Toaster from './common/Toaster';

const HomePage = lazy(() => import('../layouts/SharedLayout'));
const AddBookPage = lazy(() => import('../layouts/AddBookLayout'));

export const ToasterContext = createContext(null)

export const App = () => {
  const [ toasts, setToasts ] = useState([]);

  const createToast = (toast) => setToasts(prevToasts => [...prevToasts, toast]);
  const removeToast = (toastId) => {
    const afterRemove = toasts.filter(({ id }) => id !== toastId) ?? [];
    setToasts(afterRemove)
  }
  const clearAllToasts = () => setToasts([]);

  return (
    <ToasterContext.Provider value={{ toasts, createToast, removeToast, clearAllToasts }}>
      <Routes>
        <Route path={ ROUTES.HOME } element={ <HomePage /> } />
        <Route path={ `/${ROUTES.ADD_BOOK}` } element={ <AddBookPage /> } />
        <Route path={ `/${ROUTES.EDIT_BOOK}/:bookId` } element={ <AddBookPage /> } />
        <Route path={ `/${ROUTES.EDIT_BOOK}` } element={ <AddBookPage /> } />
      </Routes>
      <Toaster />
    </ToasterContext.Provider>
  );
};
