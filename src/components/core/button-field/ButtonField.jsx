import React from "react";
import styles from "./ButtonField.module.scss";

const Button = ({ label, onClick, isActive, type, className }) => {
  const buttonClass = isActive ? styles.active : styles.inactive;

  return (
    <button
      className={`${styles.button} ${buttonClass} ${className}`}
      onClick={() => onClick(type)}
    >
      {label}
    </button>
  );
};

export default Button;
