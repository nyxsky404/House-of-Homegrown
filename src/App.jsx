import { Routes, Route } from "react-router";
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:category" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/:page" element={<Legal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App