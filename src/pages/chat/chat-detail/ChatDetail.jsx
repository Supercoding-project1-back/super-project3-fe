import React, { useState } from "react";
import styles from "./ChatDetail.module.scss";

const ChatDetail = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      // 여기에 메시지를 전송하는 로직 추가 (API 호출 등)
      console.log("Message sent:", message);
      setMessage(""); // 메시지 전송 후 입력창 초기화
    }
  };

  return (
    <div className={styles.chatDetailContainer}>
      <div className={styles.backIcon}></div>
      <div className={styles.chatMessages}>
        <div className={styles.messageContainer}>
          <div className={styles.messageLeft}>
            <div className={styles.profileImage}></div>
            <div className={styles.message}>
              <span>안녕하세요~</span>
            </div>
          </div>
          <span className={styles.time}>2024.07.29 월요일 오전 10:22</span>
        </div>
        <div className={styles.messageContainer}>
          <div className={styles.messageRight}>
            <div className={styles.message}>
              <span>네~ 안녕하세요~</span>
            </div>
          </div>
          <span className={styles.time}>2024.07.29 월요일 오전 10:24</span>
        </div>
      </div>
      <footer className={styles.footer}>
        <input
          className={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="댓글을 입력해주세요"
        />
        <button className={styles.sendButton} onClick={handleSend}></button>
      </footer>
    </div>
  );
};

export default ChatDetail;
