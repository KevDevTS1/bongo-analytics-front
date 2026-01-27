import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ContactForm } from "./ContactForm";
import logo from "../assets/Logo_Poinnet.png";
import catalogoPdf from "./Portafolio POINNET V7151024.pdf";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Sobre Nosotros", id: "sobre-nosotros" },
    { label: "Soluciones", id: "soluciones" },
    { label: "Casos de Éxito", id: "casos-de-éxito" },
  ];

  return (
    <>
      {/* Progress bar con colores de marca */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gradient-to-r from-[#2E3192] via-[#36A9E1] to-[#662483]"
        initial={{ scaleX: 0 }}
        style={{
          transformOrigin: "0%",
          scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
        }}
      />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-[#2E3192]/5"
            : "bg-white/95 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Borde inferior con gradiente */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#36A9E1]/30 to-transparent" />
        
        {/* Glow effect sutil */}
        {isScrolled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#36A9E1]/5 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo con efecto premium */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <img
                src={logo}
                alt="Poinnet"
                className="h-20 w-40 relative z-10"
              />
              {/* Glow en logo al hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2E3192]/20 via-[#36A9E1]/20 to-[#662483]/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="relative px-4 py-2 group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {/* Texto con gradiente al hover */}
                    <span
                      className={`relative z-10 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#2E3192] via-[#662483] to-[#36A9E1] bg-clip-text text-transparent"
                          : "text-gray-700 group-hover:text-[#2E3192]"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Indicador activo */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2E3192] via-[#36A9E1] to-[#662483]"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Efecto hover sutil */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#2E3192]/5 via-[#36A9E1]/5 to-[#662483]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.a>
                );
              })}

              {/* Enlace de catálogo */}
              <motion.a
                href={catalogoPdf}
                download
                className="relative px-4 py-2 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10 text-gray-700 group-hover:text-[#0667ae] transition-colors">
                  Catálogo
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0667ae]/5 via-[#28a0c9]/5 to-[#5dd7d9]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>

              {/* Botón de contacto premium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (navItems.length + 1) * 0.08 }}
                className="ml-4 relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0667ae] via-[#28a0c9] to-[#5dd7d9] rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                
                <Button
                  variant="default"
                  onClick={() => setIsContactOpen(true)}
                  className="relative bg-gradient-to-r from-[#0667ae] via-[#28a0c9] to-[#5dd7d9] hover:shadow-xl hover:shadow-[#36A9E1]/20 transition-all duration-300 group overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                  
                  <span className="relative flex items-center gap-2 text-white">
                    <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                    Contacto
                  </span>
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative z-10 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="text-gray-700" size={28} />
                ) : (
                  <Menu className="text-gray-700" size={28} />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.nav
              className="lg:hidden mt-6 pb-6 flex flex-col gap-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-4 py-3 rounded-lg group overflow-hidden"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveSection(item.id);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Fondo con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2E3192]/5 via-[#36A9E1]/5 to-[#662483]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="relative text-gray-700 group-hover:text-[#2E3192] transition-colors">
                    {item.label}
                  </span>

                  {/* Indicador de borde */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2E3192] via-[#36A9E1] to-[#662483] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}

              <motion.a
                href={catalogoPdf}
                download
                className="relative px-4 py-3 rounded-lg group overflow-hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0667ae]/5 via-[#28a0c9]/5 to-[#5dd7d9]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-gray-700 group-hover:text-[#0667ae] transition-colors">
                  Catálogo
                </span>
              </motion.a>

              {/* Botón mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}
                className="mt-2 relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2E3192] via-[#36A9E1] to-[#662483] rounded-lg blur opacity-30" />
                
                <Button
                  variant="default"
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative w-full bg-gradient-to-r from-[#2E3192] via-[#29235C] to-[#662483] hover:shadow-lg transition-all"
                >
                  <Sparkles size={16} className="mr-2" />
                  Contacto
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Modal de contacto */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader className="sr-only">
            <DialogTitle>Formulario de Contacto</DialogTitle>
            <DialogDescription>
              Completa el formulario para ponerte en contacto con nosotros
            </DialogDescription>
          </DialogHeader>
          <ContactForm onClose={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}