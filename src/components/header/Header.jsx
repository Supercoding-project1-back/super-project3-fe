import React from 'react';
import styles from './Header.module.scss';
import IconField from '../core/icon-field/IconField';
import { useNavigate } from 'react-router';

const Header = ({ type, location }) => {
  const navigate = useNavigate();
  // console.log(window.history);


  const handleClickBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  const handleClickLogo = () => {
    navigate('/');
  }

  const headerContent = () => {
    switch (type) {
      case 'main':
        // 메인페이지 헤더 : 위치+검색
        return (
          <header className={`${styles.header} ${styles.mainHeader}`}>
            <div className={styles.leftWrap}>
              <span>{location}</span>
              <IconField
                type={'iconLocation'}
                className={`${styles.icon} ${styles.iconLocation}`}
              />
            </div>
            <div className={styles.rightWrap}>
              <IconField
                type={'iconSearch'}
                className={`${styles.icon} ${styles.iconSearch}`}
              />
            </div>
          </header>
        );
        break;

      // 게시글상세페이지 헤더 : 뒤로가기+(더보기-user에따라)
      case 'detail':
        return (
          <header className={`${styles.header} ${styles.detailHeader}`}>
            <div
              className={styles.leftWrap}
              onClick={handleClickBack}
            >
              <IconField
                type={'iconBack'}
                className={`${styles.icon} ${styles.iconBack}`}
              />
            </div>
            <div className={styles.rightWrap}>
              <IconField
                type={'iconMore'}
                className={`${styles.icon} ${styles.iconMore}`}
              />
            </div>
          </header>
        );
        break;

      // 글쓰기페이지 헤더 : 뒤로가기+등록
      case 'write':
        return (
          <header className={`${styles.header} ${styles.writeHeader}`}>
            <div
              className={styles.leftWrap}
              onClick={handleClickBack}
            >
              <IconField
                type={'iconBack'}
                className={`${styles.icon} ${styles.iconBack}`}
              />
            </div>
            <div className={styles.rightWrap}>
              <button>등록</button>
            </div>
          </header>
        );
        break;

      // 채팅방페이지 : 뒤로가기+닉네임
      case 'chat':
        return (
          <header className={`${styles.header} ${styles.chatHeader}`}>
            <div
              className={styles.leftWrap}
              onClick={handleClickBack}
            >
              <IconField
                type={'iconBack'}
                className={`${styles.icon} ${styles.iconBack}`}
              />
            </div>
            <div>
              <span>상대방 닉네임1</span>
            </div>
            <div className={styles.rightWrap}>
              {null}
            </div>
          </header>
        );
        break;

      default:
        // 기본 헤더 : 로고+검색
        return (
          <header className={styles.header}>
            <div className={styles.leftWrap} onClick={handleClickLogo}>
              <IconField
                type={'iconLogo'}
                className={`${styles.icon} ${styles.iconLogo}`}
              />
            </div>
            <div className={styles.rightWrap}>
              <IconField
                type={'iconSearch'}
                className={`${styles.icon} ${styles.iconSearch}`}
              />
            </div>
          </header>
        )
    }
  }

  return <>{headerContent()}</>;
}

export default Header;