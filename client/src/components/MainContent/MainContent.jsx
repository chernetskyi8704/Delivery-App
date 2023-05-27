import classes from "./MainContent.module.css";
import AppRoutes from "../roots/AppRoutes";

const MainContent = () => {
  return (
    <main className={classes.mainContent}>
      <AppRoutes />
    </main>
  );
};

export default MainContent;
