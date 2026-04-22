import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Star,
  Camera,
  Building2,
  TrendingUp,
  GraduationCap,
  Network,
  Layers,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import logos reales
import logoSmartec from "../assets/logo_smartec.png";
import logoFNA from "../assets/fna.jpg";
import logoUniversidad from "../assets/u-distrital.jpg";
import logoComredes from "../assets/comredes.png";
import logoTransmilenio from "../assets/transmilenio-vector-logo.png";
import logoPear from "../assets/pear-solutions.webp";

const clients = [
  {
    name: "Smarctec",
    industry: "Seguridad",
    icon: Shield,
    logo: logoSmartec,
    description:
      "Más de 1,200 dispositivos de seguridad integrados, con monitoreo centralizado en tiempo real y soporte técnico especializado para sus operaciones.",
    stats: "1,200+ dispositivos",
  },
  {
    name: "Pear Solutions",
    industry: "Tecnología",
    icon: Layers,
    logo: logoPear,
    description:
      "Más de 2300 dispositivos en arrendamiento, con administración y soporte integral de los recursos tecnológicos, asegurando mayor eficiencia y disponibilidad para el cliente.",
    stats: "2,300+ dispositivos",
  },
  {
    name: "Transmilenio",
    industry: "Transporte",
    icon: Camera,
    logo: logoTransmilenio,
    description:
      "138 estaciones y 9 portales, capturando información a través de 3,850 cámaras en tiempo real.",
    stats: "3,850 cámaras",
  },
  {
    name: "FNA Ahorro",
    industry: "Finanzas",
    icon: TrendingUp,
    logo: logoFNA,
    description:
      "45,000 afiliaciones mensuales, 2800 vendedores, 1,350 millones en colocación al mes.",
    stats: "45,000 afiliaciones/mes",
  },
  {
    name: "Universidad Distrital Francisco José de Caldas",
    industry: "Educación",
    icon: GraduationCap,
    logo: logoUniversidad,
    description:
      "Nuestro software de machine learning e inteligencia artificial ofrece modelos de entrenamiento avanzados, diseñados para realizar predicciones precisas y análisis detallados.",
    stats: "ML & IA Avanzado",
  },
  {
    name: "Comredes de Colombia S.A.S",
    industry: "Tecnología",
    icon: Network,
    logo: logoComredes,
    description:
      "Más de 2800 dispositivos en arrendamiento, con administración y soporte integral de los recursos tecnológicos, asegurando mayor eficiencia y disponibilidad para el cliente.",
    stats: "2,800+ dispositivos",
  },
];

const stats = [
  {
    number: "6+",
    label: "Clientes Estratégicos",
    icon: Building2,
  },
  { number: "3,850+", label: "Cámaras en Tiempo Real", icon: Camera },
  { number: "5,100+", label: "Dispositivos Gestionados", icon: TrendingUp },
];

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="casos-de-éxito"
      className="py-24 relative overflow-hidden bg-[#0A0A0C]"
      ref={ref}
    >
      {/* Textura de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <ImageWithFallback
          src="/mnt/data/extracted_assets/page4_img5.png"
          alt="Textura"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Textura de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <ImageWithFallback
          src="/mnt/data/extracted_assets/page4_img5.png"
          alt="Textura"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- FONDO PREMIUM 3D APPLE STYLE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#7b5bff] via-[#c79dff] to-transparent blur-[140px] opacity-40 rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#00e1ff] via-[#008cff] to-transparent blur-[140px] opacity-40 rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffffff05] to-[#00000040]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-white text-5xl font-semibold mt-2">
            Casos de{" "}
            <span className="bg-gradient-to-r from-[#36A9E1] via-[#2E3192] to-[#662483] bg-clip-text text-transparent">Éxito</span>
          </h2>
          <p className="text-purple-200 mt-4 text-lg">
            Empresas líderes confían en Poinnet para impulsar su crecimiento
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#36A9E1] to-[#2E3192] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-5xl text-white">
                  {stat.number}
                </div>
                <div className="text-purple-200 text-lg mt-2">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clientes - Grid (tarjetas con logo) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 transition-all group hover:border-[#36A9E1]/50 hover:shadow-2xl hover:shadow-[#36A9E1]/20 ${
                  index === 3 ? "lg:col-span-1" : ""
                } ${index >= 3 ? "md:col-span-1" : ""}`}
              >
                {/* Logo o Icon con gradiente de marca */}
                <div className="flex justify-center mb-6">
                  {client.logo ? (
                    // Mostrar logo real
                    <div className="w-32 h-20 bg-white rounded-xl flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    // Fallback a icono con gradiente
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2E3192] via-[#36A9E1] to-[#662483] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={36} className="text-white" />
                    </div>
                  )}
                </div>

                <h4 className="text-white text-xl text-center mb-2 group-hover:text-[#36A9E1] transition-colors">
                  {client.name}
                </h4>
                <p className="text-[#36A9E1] text-center text-sm mb-4">
                  {client.industry}
                </p>

                <p className="text-white/80 text-center text-sm mb-6 leading-relaxed">
                  {client.description}
                </p>

                <div className="bg-gradient-to-r from-[#2E3192] via-[#36A9E1] to-[#662483] text-white px-4 py-2 rounded-full text-center font-medium text-sm">
                  {client.stats}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/80 text-lg mb-6">
            ¿Listo para unirte a nuestros clientes exitosos?
          </p>

          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-[#2E3192] via-[#36A9E1] to-[#662483] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-[#36A9E1]/40 transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Comienza tu transformación</span>
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}