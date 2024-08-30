import { useState } from "react";
import ModalField from "../components/core/modal-field/ModalField";

const usePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopupHandler = () => setIsPopupOpen(true);
  const closePopupHandler = () => setIsPopupOpen(false);

  const Popup = ({ children, customClass }) => (
    <ModalField
      open={isPopupOpen}
      onClose={closePopupHandler}
      variant="popupModal"
      customClass={customClass}
    >
      {children}
    </ModalField>
  );

  return { Popup, openPopupHandler, closePopupHandler };
};

export default usePopup;
