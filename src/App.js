import "./App.css";
import Navbar from "./components/navBar/navbar";
import SideBar from "./components/sidebar/side_bar";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <div className="row m-0 home__page__cover">
        <SideBar />
        <div className="col-md col-12 nav__and__pages__cover">
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
