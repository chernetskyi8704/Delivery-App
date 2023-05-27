import { useSelector } from "react-redux";
import { changeIsModalOrderPlacement } from "../../features/shoppingCart/shoppingCartSlice";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import ShoppingCartItems from "../../components/ShoppingCartItems/ShoppingCartItems";

const ShoppingCartPage = () => {
  const { isModalOrderPlacement } = useSelector(
    state => state.shoppingCart.shoppingCartSettings
  );

  return (
    <>
      <ShoppingCartItems />
      <ModalWindow
        visible={isModalOrderPlacement}
        setVisible={changeIsModalOrderPlacement}
      >
        <CheckoutForm />
      </ModalWindow>
    </>
  );
};

export default ShoppingCartPage;
