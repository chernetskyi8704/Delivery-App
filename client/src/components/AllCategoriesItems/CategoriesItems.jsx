import classes from "./CategoriesItems.module.css";
import { useGetAllCategoriesQuery } from "../../features/products/productsApiSlice";
import Loader from "../UI/loader/Loader";
import CategoryItem from "../CategoryItem/CategoryItem";

const AllCategoriesItems = () => {
  const {
    data: allCategories,
    isSuccess: isAllCategoriesSuccess,
    isLoading: isAllCategoriesLoading,
  } = useGetAllCategoriesQuery();

  return (
    <section className={classes.categoriesContainer}>
      <h2>Categories:</h2>
      <ul className={classes.categoryItems}>
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
