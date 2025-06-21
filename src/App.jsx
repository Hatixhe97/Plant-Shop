import "./App.css";
import BestSelling from "./components/BestSelling/BestSelling";
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
import NaturalPlants from "./components/pages/Products/NaturalPlants";
import PlantAccessories from "./components/pages/Products/Accessories";
import ArtificialPlants from "./components/pages/Products/ArtificialPlants";
import AllProducts from "./components/pages/Products/AllProducts";
import CartPage from "./components/pages/Cart/CartPage";
import { CartProvider } from "./Store/cartProvider";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <Routes>
          <Route path={CUSTOM_ROUTES.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={CUSTOM_ROUTES.FAQ} element={<Faq />} />
            <Route path={CUSTOM_ROUTES.CONTACT} element={<Contact />} />
            <Route path={CUSTOM_ROUTES.BESTSELLING} element={<BestSelling />} />
            <Route path={CUSTOM_ROUTES.LOGIN} element={<Login />} />
            <Route path={CUSTOM_ROUTES.REGISTER} element={<Register />} />
            <Route path={CUSTOM_ROUTES.NATURAL_PLANTS} element={<NaturalPlants />}/>
            <Route path={CUSTOM_ROUTES.ACCESSORIES} element={<PlantAccessories />} />
            <Route path={CUSTOM_ROUTES.ARTIFICIAL} element={<ArtificialPlants />}/>
            <Route path={CUSTOM_ROUTES.ALL_PRODUCTS} element={<AllProducts />}/>
            <Route path={CUSTOM_ROUTES.CART} element={<CartPage/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
