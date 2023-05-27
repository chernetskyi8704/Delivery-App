import classes from "./ModalWindow.module.css";
import { useDispatch } from "react-redux";

const ModalWindow = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];
  const dispatch = useDispatch();

  if (visible) {
    rootClasses.push(classes.active);
  }

  const handleCloseModal = () => {
    dispatch(setVisible(false));
  };

  return (
    <div className={rootClasses.join(" ")} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default ModalWindow;
