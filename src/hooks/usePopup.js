import { useContext } from "react";

const usePopup = () => {
  const context = useContext(PopupModalContext);
  return context;
};

export default usePopup;
