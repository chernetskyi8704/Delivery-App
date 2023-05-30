import classes from "./CategoryItem.module.css";
import { useSelector } from "react-redux";

const CategoryItem = ({ categoryItem }) => {
  const { activeCategoryButton } = useSelector(
    state => state.products.productsSettings
  );

  return (
    <li
      key={categoryItem._id}
      value={categoryItem.categoryName}
      id={categoryItem._id}
      className={`${classes.categoryItem} ${
        activeCategoryButton === categoryItem._id ? classes.active : ""
      }`}
    >
      {categoryItem.categoryName}
    </li>
  );
};

export default CategoryItem;
