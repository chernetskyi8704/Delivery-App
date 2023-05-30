import classes from "./CategoryItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCategory, setActiveCategoryButton } from "../../features/products/productsSlice";
import { setIsCategorySelectionBlocked } from "../../features/products/productsSlice";

const CategoryItem = ({ categoryItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const { currentCategory, activeCategoryButton } = useSelector(
    state => state.products.productsSettings
  );

  const { orderedItems } = useSelector(
    state => state.shoppingCart.shoppingCartSettings
  );

  const handleChangeCategory = e => {
    const currentCategoryId = e.target.id;
    const value = e.target.getAttribute("value").toLowerCase();
    if (orderedItems.length === 0) {
      dispatch(setCurrentCategory(currentCategoryId));
      dispatch(setActiveCategoryButton(currentCategoryId));
      router(`/categories/${value}`);
    } else if (currentCategoryId !== currentCategory) {
      dispatch(setIsCategorySelectionBlocked(true));
    }
  };

  return (
    <li
      key={categoryItem._id}
      value={categoryItem.categoryName}
      id={categoryItem._id}
      className={`${classes.categoryItem} ${
        activeCategoryButton === categoryItem._id ? classes.active : ""
      }`}
      onClick={handleChangeCategory}
    >
      {categoryItem.categoryName}
    </li>
  );
};

export default CategoryItem;
