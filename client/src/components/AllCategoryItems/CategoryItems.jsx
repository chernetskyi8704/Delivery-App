import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../features/products/productsApiSlice";
import classes from "./CategoryItems.module.css";
import Loader from "../UI/loader/Loader";
import ProductItem from "../ProductItem/ProductItem";
import ModalWindow from "../UI/modalWindow/ModalWindow";
import { setIsCategorySelectionBlocked } from "../../features/products/productsSlice";

const AllCategoryItems = () => {
  const [isSkip, setIsSkip] = useState(true);
  const { currentCategory, isCategorySelectionBlocked } = useSelector(
    state => state.products.productsSettings
  );

  // If currentCategory is chosen we set isSkip flag to false that would allowed us to fetch the necessary data
  useEffect(() => {
    if (currentCategory) {
      setIsSkip(false);
    }
  }, [currentCategory]);

  // If the skip flag is active we didn't get the curent category items data
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
      <ModalWindow
        visible={isCategorySelectionBlocked}
        setVisible={setIsCategorySelectionBlocked}
      >
        <div
          className={classes.isCategorySelectionBlocked}
          onClick={e => e.stopPropagation()}
        >
          <h2>
            You can only order items from a single category at a time. Please
            complete or decline your current order before selecting items from a
            different category.
          </h2>
        </div>
      </ModalWindow>

      <div className={classes.pagination}>
        <button className={classes.active}>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </section>
  );
};

export default AllCategoryItems;
