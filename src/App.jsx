import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Marquee from "./components/Marquee.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";

// Scroll back to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="app">
      <CustomCursor />
      <ScrollToTop />
      <div className="announcement">
        <Marquee
          items={[
            "🚚 Free delivery on orders over TSh 500,000",
            "🔥 Mid-year tech sale — up to 30% off",
            "✅ 100% genuine products with warranty",
            "📞 Need help? Call +255 712 345 678",
            "⚡ Fast nationwide delivery across Tanzania",
          ]}
        />
      </div>
      <Navbar />
      {/* `key` retriggers the fade-in transition on each navigation */}
      <main className="page-transition" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
