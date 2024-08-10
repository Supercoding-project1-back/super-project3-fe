import React from 'react';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.contentsContainer}>
          <Outlet />
        </div>
        <Nav />
      </div>
    </>
  );
};

export default Layout;