import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { ClientsSection } from "./components/ClientsSection";
import { Footer } from "./components/Footer";
import { ChatBot } from "./components/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ClientsSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}