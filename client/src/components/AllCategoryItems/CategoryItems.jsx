import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../features/products/productsApiSlice";
import classes from "./CategoryItems.module.css";
import Loader from "../UI/loader/Loader";
import ProductItem from "../ProductItem/ProductItem";

const AllCategoryItems = () => {
  const [isSkip, setIsSkip] = useState(true);
  const { currentCategory } = useSelector(
    state => state.products.productsSettings
  );

  useEffect(() => {
    if (currentCategory) {
      setIsSkip(false);
    }
  }, [currentCategory]);

  const {
    data: allCategoryItems,
    isSuccess: allCategoryItemsSuccess,
    isLoading: allCategoryItemsLoading,
  } = useGetAllProductsQuery(
    {
      categoryId: currentCategory,
    },
    { skip: isSkip }
  );

  const categoryItems = allCategoryItems?.map(productItem => (
    <ProductItem key={productItem._id} productItem={productItem} />
  ));

  return (
    <section className={classes.productsContainer}>
      <ul className={classes.productsItems}>
        {!allCategoryItems && (
          <h1 className={classes.noChoosedCategory}>
            Choose category to display the products.
          </h1>
        )}
        {allCategoryItemsLoading && <Loader />}
        {allCategoryItemsSuccess && categoryItems}
      </ul>
      <div className={classes.pagination}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </section>
  );
};

export default AllCategoryItems;
