import React from 'react';
import styles from './Header.module.scss';
import IconField from '../core/icon-feild/IconField';

const Header = () => {
  return (
    <header>
      <div>
        <IconField
          type={'iconLogo'}
          className={`${styles.icon} ${styles.iconLogo}`}
        />
      </div>
      <div>
        <IconField
          type={'iconSearch'}
          className={`${styles.icon} ${styles.iconSearch}`}
        />
      </div>
    </header>
  );
}

export default Header;