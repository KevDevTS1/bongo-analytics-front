import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BarChart3, Brain, LineChart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    title: "Bongo Insights",
    subtitle: "Business Intelligence Avanzado",
    description: "Plataforma completa de visualización y análisis de datos empresariales en tiempo real.",
    features: ["Dashboards interactivos", "Reportes automatizados", "Alertas inteligentes"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzM3MTgzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-[#2E3192] to-[#29235C]",
    icon: BarChart3,
  },
  {
    title: "Bongo Predict",
    subtitle: "Machine Learning as a Service",
    description: "Modelos predictivos personalizados que anticipan tendencias y comportamientos futuros.",
    features: ["Predicción de ventas", "Análisis de riesgo", "Optimización de recursos"],
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMzNjg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-[#2E3192] to-[#29235C]",
    icon: Brain,
  },
  {
    title: "Bongo DataHub",
    subtitle: "Integración de Big Data",
    description: "Centraliza, procesa y gestiona grandes volúmenes de datos de múltiples fuentes.",
    features: ["ETL automatizado", "Data warehouse", "API unificada"],
    image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjMzMjc4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-[#2E3192] to-[#29235C]",
    icon: LineChart,
  },
  {
    title: "Bongo AI Studio",
    subtitle: "Desarrollo de IA Personalizada",
    description: "Herramientas para crear y entrenar modelos de inteligencia artificial específicos.",
    features: ["AutoML", "Deep Learning", "NLP avanzado"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2MzM2Nzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-[#2E3192] to-[#29235C]",
    icon: Sparkles,
  },
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="soluciones" className="py-24 bg-gray-50 relative overflow-hidden relative overflow-hidden" ref={ref}>
      {/* Textura de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <ImageWithFallback
          src="/mnt/data/extracted_assets/page4_img3.png"
          alt="Textura"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Textura de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <ImageWithFallback
          src="/mnt/data/extracted_assets/page4_img3.png"
          alt="Textura"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
        
           <h2 className="text-gray-900 mb-8 text-5xl md:text-6xl">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-[#2E3192] via-[#662483] to-[#36A9E1] bg-clip-text text-transparent">
              Productos
            </span>
          </h2>
          <h2 className="text-gray-900 mb-4">
            Soluciones que{" "}
            <span className="text-[#2E3192]">
              transforman datos
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Plataformas completas diseñadas para cada etapa de tu viaje analítico
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-40`} />
                  
                  {/* Icon Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
                    animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: hoveredIndex === index ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-[#2E3192] mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                  </motion.div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-[#36A9E1]`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                  >
                    <Button 
                      className={`w-full bg-[#2E3192] hover:bg-[#29235C] transition-opacity text-white`}
                    >
                      Conocer más
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}