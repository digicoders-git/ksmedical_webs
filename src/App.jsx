import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // 👈 Make sure this is imported

import Home from "./pages/Home";
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

import "./App.css";

const AppContent = () => {
  return (
    <>
      <ScrollToTop /> {/* 👈 Fragment ke andar rakha */}
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Header />

        <div className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
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
