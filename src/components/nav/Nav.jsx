import React from 'react';
import styles from './Nav.module.scss';
import { Icon } from '../core';
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
          <Icon
            type={'IconHome'}
            className={styles.icon}
          />
          <span className={styles.title}>홈</span>
        </li>
        <li onClick={handleClickChat}>
          <Icon
            type={'IconChat'}
            className={styles.icon}
          />
          <span className={styles.title}>채팅</span>
        </li>
        <li onClick={handleClickProfile}>
          <Icon
            type={'IconUser'}
            className={styles.icon}
          />
          <span className={styles.title}>내정보</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;