
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import OurFarm from "./pages/OurFarm";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import CSR from "./pages/CSR";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Context
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-farm" element={<OurFarm />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/csr" element={<CSR />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" richColors />
      </Router>
    </CartProvider>
  );
}

export default App;
