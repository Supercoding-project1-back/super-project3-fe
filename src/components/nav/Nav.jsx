import React from 'react';
import styles from './Nav.module.scss';
import IconField from '../core/icon-field/IconField';
import { useNavigate } from 'react-router';

const Nav = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/');
  }

  const handleClickChat = () => {
    navigate('/chat');
  }

  const handleClickProfile = () => {
    navigate('/profile');
  }

  return (
    <nav>
      <ul>
        <li onClick={handleClickLogo}>
          <IconField
            type={'iconHome'}
            className={`${styles.icon} ${styles.iconHome}`}
          />
          <span className={styles.title}>홈</span>
        </li>
        <li onClick={handleClickChat}>
          <IconField type={'iconChat'} className={`${styles.icon} ${styles.iconChat}`} />
          <span className={styles.title}>채팅</span>
        </li>
        <li onClick={handleClickProfile}>
          <IconField type={'iconUser'} className={`${styles.icon} ${styles.iconUser}`} />
          <span className={styles.title}>내정보</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;