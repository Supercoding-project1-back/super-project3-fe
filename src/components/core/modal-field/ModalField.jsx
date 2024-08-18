import React, { useEffect } from "react";
import Portal from "./Portal";
import styles from "./ModalField.module.scss";
import { useNavigate } from "react-router-dom";
import { Icon } from "..";

const ModalField = ({ open, onClose, children, variant, customClass }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      window.history.pushState(null, "", window.location.href);

      const preventGoBack = (event) => {
        event.preventDefault();
        onClose();
        navigate(1);
      };

      window.addEventListener("popstate", preventGoBack);

      return () => {
        window.removeEventListener("popstate", preventGoBack);
        document.body.style.overflow = "auto";
      };
    }
  }, [open, onClose, navigate]);

  if (!open) return null;

  let modalClass;
  if (variant === "fullscreenModal") {
    modalClass = styles.isFullScreen;
  } else if (variant === "popupModal") {
    modalClass = styles.popupModal;
  } else {
    modalClass = styles.defaultModal;
  }

  return (
    <Portal>
      <div
        className={`${styles.ModalWrapper} ${modalClass} ${customClass || ""}`}
      >
        <div className={styles.ModalOverlay} onClick={onClose} />
        <div className={styles.ModalContainer}>
          {variant !== "popupModal" && (
            <div className={styles.CloseButtonContainer} onClick={onClose} >
              <Icon type={'iconClose'} className={styles.icon} />
            </div>
          )}
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default ModalField;
