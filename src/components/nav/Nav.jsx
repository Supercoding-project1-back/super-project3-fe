import React from 'react';
import styles from './Nav.module.scss';
import IconField from '../core/icon-feild/IconField';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <IconField type={'iconHome'} className={`${styles.icon} ${styles.iconHome}`} />
          <span className={styles.title}>홈</span>
        </li>
        <li>
          <IconField type={'iconChat'} className={`${styles.icon} ${styles.iconChat}`} />
          <span className={styles.title}>채팅</span>
        </li>
        <li>
          <IconField type={'iconUser'} className={`${styles.icon} ${styles.iconUser}`} />
          <span className={styles.title}>내정보</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
