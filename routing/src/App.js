import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, Outlet } from "react-router-dom";
import About from "./pages/About";
import Authenticate from "./pages/Authenticate";
import Cart from "./pages/Cart";
import Invoice from "./pages/Invoice";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Authenticate />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<Register />} />
            </Route>
            <Route path="/" element={<LandingPage />}>
                <Route path="/products" element={<Product />}>
                    <Route path=":productId" element={<ProductDetails />} />
                </Route>
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
            </Route>

            {/* <Route path="/products" element={<Product />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
    );
};

export default App;
