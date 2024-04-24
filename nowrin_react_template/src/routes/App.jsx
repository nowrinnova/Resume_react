import "./App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";
import Home from "../components/Home.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Home/>
      <Footer></Footer>
    </>
  );
}

export default App;
