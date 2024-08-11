import React from 'react';
import styles from './PostDetail.module.scss';
import { IconField } from '../../components/core/icon-field';
import { CommentField } from './commets';

const PostDetail = () => {
  return (
    <>
      {/* 게시글 : 카테고리 */}
      <div className={styles.wrap}>
        <button>일상</button>
      </div>

      {/* 게시글 : 제목 */}
      <div className={styles.wrap}>
        <h1>집에 에어컨이 없어요</h1>
      </div>

      {/* 게시글 : 게시글정보 */}
      <div className={`${styles.wrap} ${styles.postInfo}`}>
        <IconField
          type={'iconUserCircle'}
          className={`${styles.iconUserCircle}`}
        />
        <div>
          <div className={styles.nickname}>에어컨없인못살아</div>
          <div className={styles.details}>
            <div className={`${styles.detailInfos} timeInfo`}>
              <IconField
                type={'iconTime'}
                className={styles.iconTime}
              />
              <span>6분전</span>
            </div>
            <div className={`${styles.detailInfos} viewsInfo`}>
              <IconField
                type={'iconViews'}
                className={styles.iconViews}
              />
              <span>10</span>
            </div>
          </div>
        </div>
      </div >

      {/* 게시글 : 작성된내용 */}
      <div className={styles.wrap}>
        <div className={styles.contents}>
          에어컨 있는 방에서 자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~에어컨 있는 방에서 자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~자취하고 싶어요호호호오오오~~~~~~자취할래~~~~~
        </div>
        <div>투표영역</div>
        <div>지도영역</div>
      </div>

      {/* 댓글 영역 */}
      <div className={styles.wrap}>
        <CommentField />
      </div>
    </>
  );
};

export default PostDetail;