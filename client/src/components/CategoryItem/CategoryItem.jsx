import classes from "./CategoryItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCategory, setActiveCategoryButton } from "../../features/products/productsSlice";

const CategoryItem = ({ categoryItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();

    const { activeCategoryButton } = useSelector(
    state => state.products.productsSettings
  );

  const handleChangeCategory = e => {
    const currentCategoryId = e.target.id;
    const value = e.target.getAttribute("value").toLowerCase();
    dispatch(setCurrentCategory(currentCategoryId));
    dispatch(setActiveCategoryButton(currentCategoryId));
    router(`/categories/${value}`);
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
