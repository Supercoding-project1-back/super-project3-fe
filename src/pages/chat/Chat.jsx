import React from "react";
import styles from "./Chat.module.scss";

const Chat = () => {
  const chatList = [
    {
      id: 1,
      name: "상대방닉네임1",
      message: "앗 정말 오늘은 너무 더운날이예요~~~",
      time: "오전 11:25",
    },
    {
      id: 2,
      name: "프로자취러",
      message: "앗 정말 오늘은 너무 더운날이예요~~~",
      time: "오전 11:25",
    },
    {
      id: 3,
      name: "퇴사를 꿈꾸는",
      message: "앗 정말 오늘은 너무 더운날이예요~~~",
      time: "오전 11:25",
    },
    {
      id: 4,
      name: "상대방닉네임777",
      message: "앗 정말 오늘은 너무 더운날이예요~~~",
      time: "오전 11:25",
    },
  ];

  return (
    <div className={styles.chatContainer}>
      <header className={styles.header}>
        <div className={styles.homeIcon}></div>
      </header>
      <div className={styles.chatList}>
        {chatList.map((chat) => (
          <div key={chat.id} className={styles.chatItem}>
            <div className={styles.profileImage}></div>
            <div className={styles.chatInfo}>
              <span className={styles.chatName}>{chat.name}</span>
              <span className={styles.chatMessage}>{chat.message}</span>
              <span className={styles.chatTime}>{chat.time}</span>
            </div>
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        <div className={styles.chatIcon}></div>
        <div className={styles.searchIcon}></div>
      </footer>
    </div>
  );
};

export default Chat;
