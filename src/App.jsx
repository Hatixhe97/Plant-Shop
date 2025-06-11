import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import BestSelling from "./components/BestSelling/BestSelling";
import BestSellingHero from "./components/BestSelling/BestSellingHero";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { CUSTOM_ROUTES } from "./components/constants/custom-routes";
import Faq from "./components/pages/FaqPage";
import Layout from "./components/pages/Layout";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Register from "./components/pages/CreatAccount/Register";
import { AuthProvider } from "./Store/authProvider";

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path={CUSTOM_ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={CUSTOM_ROUTES.FAQ} element={<Faq />} />
          <Route path={CUSTOM_ROUTES.CONTACT} element={<Contact />} />
          <Route path={CUSTOM_ROUTES.BESTSELLING} element={<BestSelling />} />
          <Route path={CUSTOM_ROUTES.LOGIN} element={<Login/>}/>
          <Route path={CUSTOM_ROUTES.REGISTER} element={<Register/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
