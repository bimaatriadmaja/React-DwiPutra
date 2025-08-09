import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ProdukPage from "./pages/ProdukPage";
import TestimonialPage from "./pages/TestimonialPage";
import TentangKamiPage from "./pages/TentangKamiPage";
import CaraPesanPage from "./pages/CaraPesanPage";
import DetailProdukPage from './pages/DetailProdukPage';

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/carapesan" element={<CaraPesanPage />} />
        <Route path="/tentangkami" element={<TentangKamiPage />} />
        <Route path="/produk/:id" element={<DetailProdukPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
