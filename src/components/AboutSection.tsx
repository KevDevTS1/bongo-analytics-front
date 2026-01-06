import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Database,
  Brain,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Sparkles,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Database,
    title: "Big Data",
    description:
      "Procesamos grandes volúmenes de datos para extraer patrones valiosos y tendencias ocultas.",
    color: "from-[#2E3192] to-[#662483]",
    accent: "#36A9E1",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Implementamos modelos predictivos avanzados que aprenden y mejoran continuamente.",
    color: "from-[#662483] to-[#29235C]",
    accent: "#36A9E1",
  },
  {
    icon: TrendingUp,
    title: "Analítica Avanzada",
    description:
      "Transformamos datos complejos en insights claros que impulsan decisiones estratégicas.",
    color: "from-[#2E3192] to-[#29235C]",
    accent: "#36A9E1",
  },
  {
    icon: Shield,
    title: "Seguridad y Privacidad",
    description:
      "Garantizamos la protección total de tu información con los más altos estándares.",
    color: "from-[#29235C] to-[#2E3192]",
    accent: "#36A9E1",
  },
  {
    icon: Zap,
    title: "Procesamiento en Tiempo Real",
    description:
      "Análisis instantáneo de datos para respuestas rápidas a cambios del mercado.",
    color: "from-[#662483] to-[#2E3192]",
    accent: "#36A9E1",
  },
  {
    icon: Target,
    title: "Soluciones Personalizadas",
    description:
      "Desarrollamos estrategias únicas adaptadas a tus necesidades específicas.",
    color: "from-[#2E3192] to-[#662483]",
    accent: "#36A9E1",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="sobre-nosotros"
      className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Textura de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <ImageWithFallback
          src="/mnt/data/extracted_assets/page4_img2.png"
          alt="Textura"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradientes decorativos premium */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] -top-60 -left-60
          bg-[radial-gradient(circle_at_center,rgba(46,49,146,0.08),rgba(0,0,0,0))]
          blur-[100px]"
        />
        <div
          className="absolute w-[700px] h-[700px] top-1/3 -right-60
          bg-[radial-gradient(circle_at_center,rgba(54,169,225,0.08),rgba(0,0,0,0))]
          blur-[120px]"
        />
        <div
          className="absolute w-[600px] h-[600px] -bottom-60 left-1/4
          bg-[radial-gradient(circle_at_center,rgba(102,36,131,0.06),rgba(0,0,0,0))]
          blur-[110px]"
        />
      </div>

      {/* Vector izquierda */}
      <motion.div
        className="absolute left-0 top-1/4 w-72 h-72 opacity-15 pointer-events-none"
        initial={{ x: -100, opacity: 0, rotate: -10 }}
        animate={
          isInView ? { x: 0, opacity: 0.15, rotate: 0 } : {}
        }
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <ImageWithFallback
          src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_1280.png"
          alt="Vector Bongo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Vector derecha */}
      <motion.div
        className="absolute right-0 bottom-1/4 w-72 h-72 opacity-15 pointer-events-none"
        initial={{ x: 100, opacity: 0, rotate: 10 }}
        animate={
          isInView ? { x: 0, opacity: 0.15, rotate: 0 } : {}
        }
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <ImageWithFallback
          src="https://cdn.pixabay.com/photo/2017/02/27/18/23/cpu-2103856_1280.png"
          alt="Vector Bongo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Premium */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E3192]/10 via-[#36A9E1]/10 to-[#662483]/10 px-6 py-3 rounded-full mb-6 border border-[#36A9E1]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="text-[#36A9E1]" size={20} />
            <span className="text-[#2E3192]">
              Sobre Nosotros
            </span>
          </motion.div>

          <h2 className="text-gray-900 mb-8 text-5xl md:text-6xl">
            ¿Qué{" "}
            <span className="bg-gradient-to-r from-[#2E3192] via-[#662483] to-[#36A9E1] bg-clip-text text-transparent">
              hacemos?
            </span>
          </h2>

          <p className="text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Somos{" "}
            <strong className="text-[#2E3192]">
              Bongo Analytics
            </strong>
            , una empresa apasionada por descubrir el verdadero
            valor de los datos. Nos especializamos en{" "}
            <strong className="text-[#662483]">
              analítica avanzada
            </strong>
            , integrando{" "}
            <strong className="text-[#2E3192]">big data</strong>{" "}
            y{" "}
            <strong className="text-[#36A9E1]">
              machine learning
            </strong>{" "}
            en cada paso. Nuestro objetivo es proporcionar
            herramientas estratégicas para transformar la
            información en oportunidades.
          </p>
        </motion.div>

        {/* Why Choose Us - Premium Card */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2E3192] via-[#36A9E1] to-[#662483] rounded-[2rem] blur-2xl opacity-20" />

          <div className="relative bg-gradient-to-br from-[#2E3192] via-[#29235C] to-[#662483] rounded-3xl p-1">
            <div className="bg-[#2E3192] rounded-[1.4rem] p-12 md:p-16 backdrop-blur-xl">
              {/* Icon Badge */}
              <motion.div
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#36A9E1] to-white/20 flex items-center justify-center shadow-2xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Award className="text-white" size={40} />
              </motion.div>

              <div className="text-center mb-10">
                <h3 className="text-white mb-4 text-4xl md:text-5xl">
                  ¿Por qué{" "}
                  <span className="bg-gradient-to-r from-[#36A9E1] to-white bg-clip-text text-transparent">
                    elegirnos?
                  </span>
                </h3>
              </div>

              <p className="text-white/95 text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
                Nos diferenciamos por nuestra{" "}
                <strong className="text-[#36A9E1]">
                  experiencia y pasión
                </strong>{" "}
                en convertir datos complejos en información
                clara y útil. Con un enfoque innovador y
                soluciones personalizadas, ayudamos a nuestros
                clientes a adelantarse a la competencia y tomar
                decisiones estratégicas sólidas.
              </p>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#36A9E1]/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#662483]/20 to-transparent rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Features Grid - Premium Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden h-full">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`}
                  />

                  {/* Top accent line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.1,
                    }}
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 relative z-10 shadow-lg`}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={36} />

                    {/* Icon glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-md opacity-0 group-hover:opacity-50`}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <h3 className="text-gray-900 mb-4 relative z-10 text-2xl">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 relative z-10 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner accent */}
                  <motion.div
                    className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full"
                    style={{
                      background: `radial-gradient(circle at center, ${feature.accent}15, transparent)`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />

                  {/* Hover accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}