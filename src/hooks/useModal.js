import { useState } from "react";
import ModalField from "../components/core/modal-field/ModalField";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => setIsModalOpen(false);

  const Modal = ({ children, variant, customClass }) => (
    <ModalField
      open={isModalOpen}
      onClose={closeModalHandler}
      variant={variant}
      customClass={customClass}
    >
      {children}
    </ModalField>
  );

  return { Modal, openModalHandler, closeModalHandler };
};

export default useModal;
