import { Route, Routes } from "react-router-dom";
import ShoppingCartPage from "../../pages/ShoppingCart/shoppingCartPage";
import ShopPage from "../../pages/Shop/shopPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<ShopPage />} />
      <Route path="/categories" element={<ShopPage />} />
      <Route path="/shoppingCart" element={<ShoppingCartPage />} />
    </Routes>
  );
};

export default AppRoutes;
