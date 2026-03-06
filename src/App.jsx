import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OurTeam from "./pages/OurTeam";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";
import ReturnsExchanges from "./pages/ReturnsExchanges";
import Support from "./pages/Support";
import SpecialOffers from "./pages/SpecialOffers";
import ShopAll from "./pages/ShopAll";
import MasterPolicy from "./pages/MasterPolicy";

import "./App.css";

const AppContent = () => {
  // const [loading, setLoading] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 800);

  //   return () => clearTimeout(timer);
  // }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      {/* {loading && <PageLoader />} */}
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Header />

        <div className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/category/:categoryId"
              element={<CategoryProducts />}
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/returns" element={<ReturnsExchanges />} />
            <Route path="/support" element={<Support />} />
            <Route path="/offers" element={<SpecialOffers />} />
            <Route path="/shop" element={<ShopAll />} />
            <Route path="/master-policy" element={<MasterPolicy />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
