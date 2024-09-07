import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const modalRoot = document.getElementById("modal");
  // console.log(modalRoot);
  return ReactDOM.createPortal(children, modalRoot);
};

export default Portal;
