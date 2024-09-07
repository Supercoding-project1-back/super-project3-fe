import { createContext, useCallback, useState } from "react";
import ModalField from "../components/core/modal-field/ModalField";

const PopupModalContext = createContext();

export const PopupModalProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupModalType, setPopupModalType] = useState(null);

  const openPopupHandler = useCallback(() => {
    setPopupModalType(type);
    setIsPopupOpen(true);
  }, [])

  const closePopupHandler = useCallback(() => {
    setIsPopupOpen(false);
    setPopupModalType(type);
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
  ), []);

  return (
    <PopupModalContext.Provider
      value={{ openPopupHandler, closePopupHandler, Popup, popupModalType }}>
      {children}
    </PopupModalContext.Provider>
  );
}