import { useCallback, useState } from "react";
import ModalField from "../components/core/modal-field/ModalField";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = useCallback(() => setIsModalOpen(true), []);
  const closeModalHandler = useCallback(() => setIsModalOpen(false), []);

  const Modal = useCallback(({ children, variant, customClass }) => (
    <ModalField
      open={isModalOpen}
      onClose={closeModalHandler}
      variant={variant}
      customClass={customClass}
    >
      {children}
    </ModalField>
  ), [isModalOpen, closeModalHandler]);

  return { Modal, openModalHandler, closeModalHandler };
};

export default useModal;
