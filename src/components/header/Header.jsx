import React from 'react';
import styles from './Header.module.scss';
import IconField from '../core/icon-feild/IconField';

const Header = () => {
  return (
    <div className={styles.wrap}>
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
    </div>
  );
}

export default Header;