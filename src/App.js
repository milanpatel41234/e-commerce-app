import "./App.css";
import ItemsCard from "./Components/CardItem/ItemsCard";
import Brand from "./Components/Navbar/Brand";
//import Footer from "./Components/Navbar/Footer";
import HeaderNavbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="layout">
      <HeaderNavbar />
      <Brand/>
      <ItemsCard />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
