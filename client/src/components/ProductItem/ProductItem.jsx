import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addDisabledButton, addItem } from "../../features/shoppingCart/shoppingCartSlice";

const CategoryItem = ({ productItem }) => {
  const dispatch = useDispatch();

  const { disabledButtons } = useSelector(
    state => state.shoppingCart.shoppingCartSettings
  );

  const handleAddToCart = categoryItem => {
    dispatch(addDisabledButton(categoryItem._id));
    if (!disabledButtons.includes(categoryItem._id)) {
      dispatch(addItem({ ...categoryItem, amount: 1 }));
    }
  };

  return (
    <li key={productItem._id} className={classes.productsItem}>
      <img
        className={classes.productImage}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKNtjOKhvykYbq33eNYtHOSIqP7N2klfNAw&usqp=CAU"
        alt={productItem.image}
      ></img>
      <div className={classes.productInfo}>
        <h3 className={classes.productName}>{productItem.name}</h3>
        <span className={classes.productPrice}>
          {productItem.price}uah/1pc
        </span>
      </div>
      <button
        className={classes.productButton}
        id={productItem._id}
        onClick={e => handleAddToCart(productItem, e)}
      >
        Add To Cart
      </button>
    </li>
  );
};

export default CategoryItem;
