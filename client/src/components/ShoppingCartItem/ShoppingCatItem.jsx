import classes from "./ShoppingCartItem.module.css";
import { useDispatch } from "react-redux";
import {
  removeItem,
  enableButton,
  changeAmount,
} from "../../features/shoppingCart/shoppingCartSlice";

const ShoppingCatItem = ({ shoppingCartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = id => {
    dispatch(removeItem(id));
    dispatch(enableButton(id));
  };

  const handleCangeAmount = (id, newAmount) => {
    dispatch(changeAmount({ id, newAmount }));
  };
  const reduceAmount = (id, newAmount, currentAmount) => {
    if (currentAmount > 0) {
      dispatch(changeAmount({ id, newAmount }));
    }
  };
  return (
    <li key={shoppingCartItem._id} className={classes.productsItem}>
      <img
        className={classes.productImage}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKNtjOKhvykYbq33eNYtHOSIqP7N2klfNAw&usqp=CAU"
        alt="Фото товару"/>
      <span>{shoppingCartItem.name} 1/pc</span>
      <div className={classes.amount}>
        <div className={classes.chooseAmount}>
          <input
            type="text"
            value={shoppingCartItem.amount}
            onChange={e => {
              const value = e.target.value.replace(/\D/g, "");
              handleCangeAmount(shoppingCartItem._id, +value);
            }}/>
          <a
            className={classes.changeAmount}
            onClick={() =>
              handleCangeAmount(
                shoppingCartItem._id,
                shoppingCartItem.amount + 1)}>
            +
          </a>
          <a
            className={classes.changeAmount}
            onClick={() =>
              reduceAmount(
                shoppingCartItem._id,
                shoppingCartItem.amount - 1,
                shoppingCartItem.amount)}>
            -
          </a>
        </div>
        <div className={classes.totalPriceContainer}>
          <span>* {shoppingCartItem.price}/1pc = </span>
          <span className={classes.totalCost}>
            {shoppingCartItem.amount * shoppingCartItem.price}
          </span>
          <span>UAH</span>
        </div>
        <div className={classes.deleteItem}>
          <a onClick={() => handleRemoveItem(shoppingCartItem._id)}>×</a>
        </div>
      </div>
    </li>
  );
};

export default ShoppingCatItem;
