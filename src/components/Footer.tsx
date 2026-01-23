import { motion } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  // Heart, // No se usa en el código
} from "lucide-react";

import logo from "../assets/Logo_Poinnet_Blanco.png";
export function Footer() {
  const currentYear = new Date().getFullYear();

  // URL de ejemplo para la textura. ¡REEMPLAZA ESTA URL!

  const footerLinks = [
    {
      title: "Empresa",
      links: ["Acerca de", "Equipo", "Carreras", "Blog"],
    },
    {
      title: "Productos",
      links: [
        "Poinnet Insights",
        "Poinnet Predict",
        "Poinnet DataHub",
        "Poinnet AI Studio",
      ],
    },
    {
      title: "Recursos",
      links: [
        "Documentación",
        "Casos de estudio",
        "FAQ",
        "Soporte",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    // Se elimina pt-16
    <footer className="bg-[#0667ae] text-white pb-8 relative overflow-hidden">
      {/* 🌟 CURVA SUPERIOR 🌟 */}
      {/* Este div crea una curva cóncava usando clip-path. 
        El 'bg-white' DEBE COINCIDIR con el color de fondo de la sección anterior. 
      */}
      <div
        className="absolute top-0 left-0 right-0 transform translate-y-[-100%] bg-white"
        style={{
          clipPath: "ellipse(100% 100px at 50% 100%)", // Define la forma de la elipse/curva
          height: "100px", // Altura del área de la curva
        }}
      />

      {/* Textura de fondo (ahora con URL en línea) */}
      <div className="absolute inset-0 pointer-events-none opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 pt-8">
        {" "}
        {/* Añadimos pt-8 al contenedor interno */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="text-3xl mb-4 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo}
                className="h-20 w-40 "
              />
            </motion.div>
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                <span>info@Poinnetanalytics.com</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} />
                <span>Bogota D.C, COL</span>
              </motion.div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full  flex items-center justify-center text-white hover:bg-[#36A9E1] hover:text-white"
                    whileHover={{ scale: 1.2, rotate: 360, color: "#ffffff" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex items-center gap-6 text-white/70 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: "#ffffff" }}
              >
                Política de Privacidad
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#ffffff" }}
              >
                Términos de Servicio
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#ffffff" }}
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-white/70 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Poinnet. Todos los derechos
            reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}