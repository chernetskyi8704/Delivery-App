import "./styles/App.css";
import "./styles/reset.css";
import Navigation from "./components/UI/navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <div className="appContainer">
      <Navigation />
      <MainContent />
    </div>
  );
};

export default App;
