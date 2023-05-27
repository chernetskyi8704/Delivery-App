import React from "react";
import classes from "./OrderConfirmation.module.css";
import { changeIsOrderConfirmModalOpen } from "../../features/shoppingCart/shoppingCartSlice";
import { useDispatch } from "react-redux";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(changeIsOrderConfirmModalOpen(false));
  };
  return (
    <div
      className={classes.orderConfirmation}
      onClick={e => e.stopPropagation()}
    >
      <h1 className={classes.title}>Thank you for your order!</h1>
      <div className={classes.messageContainer}>
        <p className={classes.message}>
          Your order has been successfully placed.
        </p>
        <p className={classes.message}>We greatly appreciate your purchase.</p>
        <button className={classes.button} onClick={handleCloseModal}>
          Have a nice day
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
