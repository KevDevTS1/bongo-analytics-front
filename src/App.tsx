import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { ClientsSection } from "./components/ClientsSection";
import { IsoSection } from "./components/IsoSection";
import { Footer } from "./components/Footer";
import { ChatBot } from "./components/ChatBot";
import { ProductDetailPage } from "./components/ProductDetailPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ClientsSection />
        <IsoSection />
      </main>
      <Footer />
      {/* <ChatBot /> */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:productId" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
