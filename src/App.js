import "./App.css";
import NavBar from "./Components/NavBar";
import "./Pages/Pages.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ServiceSingle from "./ServicePage/SingleService";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <>
      <ScrollToTop />
      <TopNav />
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/About-us" Component={AboutUs} />
        <Route exact path="/Contact-us" Component={ContactUs} />
        <Route exact path="/Blog" Component={Blog} />
        <Route exact path="/Services" Component={Services} />
        <Route exact path="/Gallery" Component={Gallery} />
        <Route exact path="/Services/:serviceId" Component={ServiceSingle} />

        <Route path="*" Component={Home} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
