import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Title from 'components/common/Title';
import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Title text="the Book Shelf" component="h1" className={ styles.title }/>
            </Header>
            <Dashboard />
            <Suspense fallback={ <Loader /> }>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout;