import classes from "./ShoppingCartItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice } from "../../features/shoppingCart/shoppingCartSlice";
import ShoppingCatItem from "../ShoppingCartItem/ShoppingCatItem";
import { changeIsModalOrderPlacement } from "../../features/shoppingCart/shoppingCartSlice";

const ShoppingCartItems = () => {
  const dispatch = useDispatch();
  const { orderedItems } = useSelector(
    state => state.shoppingCart.shoppingCartSettings
  );
  const totalPrice = orderedItems
    .map(({ price, amount }) => Number(price) * amount)
    .reduce((acc, i) => {
      return (acc += i);
    }, 0);
  const shoppingCartItems = orderedItems?.map(shoppingCartItem => (
    <ShoppingCatItem
      key={shoppingCartItem._id}
      shoppingCartItem={shoppingCartItem}
    />
  ));

  const handleSubmitOrder = () => {
    dispatch(setTotalPrice(totalPrice));
    dispatch(changeIsModalOrderPlacement(true));
  };
  return (
    <>
      {orderedItems.length ? (
        <>
          <div className={classes.cartItemsContainer}>
            <section>
              <ul className={classes.productItems}>{shoppingCartItems}</ul>
            </section>
          </div>
          <div className={classes.totalPriceContainer}>
            <h1>Total Price: {totalPrice} UAH</h1>
            <button
              className={classes.submitButton}
              onClick={handleSubmitOrder}
              type="submit"
            >
              Place order
            </button>
          </div>
        </>
      ) : (
        <h2 className={classes.emptyShoppingCart}>
          Your shopping cart is empty :(
        </h2>
      )}
    </>
  );
};

export default ShoppingCartItems;
