import React from "react";
import { ReactComponent as ChatIcon } from "../../../assets/imgs/homeLogo.svg";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <ChatIcon className={styles["svg-icon"]} />
      </div>
      <div>
        <h1>지금 시작하세요</h1>
      </div>
    </>
  );
};

export default Login;
