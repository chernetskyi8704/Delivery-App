import classes from "./CategoriesItems.module.css";
import { useGetAllCategoriesQuery } from "../../features/products/productsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCategorySelectionBlocked, setCurrentCategory, setActiveCategoryButton } from "../../features/products/productsSlice";
import Loader from "../UI/loader/Loader";
import CategoryItem from "../CategoryItem/CategoryItem";

const AllCategoriesItems = () => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const {
    data: allCategories,
    isSuccess: isAllCategoriesSuccess,
    isLoading: isAllCategoriesLoading,
  } = useGetAllCategoriesQuery();

  const { orderedItems } = useSelector(
    state => state.shoppingCart.shoppingCartSettings
  );

  const { currentCategory } = useSelector(
    state => state.products.productsSettings
  );

  const handleChangeCategory = e => {
    const currentCategoryId = e.target.id;
    if (currentCategoryId) {
      const value = e.target.getAttribute("value").toLowerCase();
      if (orderedItems.length === 0) {
        dispatch(setCurrentCategory(currentCategoryId));
        dispatch(setActiveCategoryButton(currentCategoryId));
        router(`/categories/${value}`);
      } else if (currentCategoryId !== currentCategory) {
        dispatch(setIsCategorySelectionBlocked(true));
      }
    }
  };

  return (
    <section className={classes.categoriesContainer}>
      <h2>Categories:</h2>
      <ul className={classes.categoryItems} onClick={handleChangeCategory}>
        {isAllCategoriesLoading && <Loader />}
        {isAllCategoriesSuccess &&
          allCategories?.map(categoryItem => {
            return (
              <CategoryItem
                key={categoryItem._id}
                categoryItem={categoryItem}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default AllCategoriesItems;
