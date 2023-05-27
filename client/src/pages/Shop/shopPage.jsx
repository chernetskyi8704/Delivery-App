import classes from "./shopPage.module.css";
import { changeIsOrderConfirmModalOpen } from "../../features/shoppingCart/shoppingCartSlice";
import { useSelector } from "react-redux";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import AllCategoriesItems from "../../components/AllCategoriesitems/AllCategoriesItems";
import AllCategoryItems from "../../components/AllCategoryItems/AllCategoryItems";

const ShopPage = () => {
  const { isOrderConfirmModalOpen } = useSelector(
    state => state.shoppingCart.shoppingCartSettings
  );

  return (
    <div className={classes.shopsPage}>
      <AllCategoriesItems />
      <AllCategoryItems />
      <ModalWindow
        visible={isOrderConfirmModalOpen}
        setVisible={changeIsOrderConfirmModalOpen}
      >
        <OrderConfirmation />
      </ModalWindow>
    </div>
  );
};

export default ShopPage;
