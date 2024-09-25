import { createContext, useCallback, useEffect, useState } from "react";
import ModalField from "../components/core/modal-field/ModalField";

export const PopupModalContext = createContext();

export const PopupModalProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('');


  const openPopupHandler = (type) => {
    setPopupType(type);
    setIsPopupOpen(true);
  }

  const closePopupHandler = () => {
    setIsPopupOpen(false);
    setPopupType('');
  }

  useEffect(() => {
    if (isPopupOpen) {
      closePopupHandler();
    }
  }, []);

  const Popup = useCallback(({ children, customClass }) => (
    <ModalField
      open={isPopupOpen}
      onClose={closePopupHandler}
      variant="popupModal"
      customClass={customClass}
    >
      {children}
    </ModalField>
  ), [isPopupOpen, closePopupHandler]);

  return (
    <PopupModalContext.Provider
      value={{ openPopupHandler, closePopupHandler, Popup, popupType }}
    >
      {children}
    </PopupModalContext.Provider>
  );
}
