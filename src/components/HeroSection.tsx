import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Sparkles,
  BarChart2,
  Cpu,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const stats = [
    { number: "1.2B+", label: "Registros Analizados" },
    { number: "99.9%", label: "Exactitud Algorítmica" },
    { number: "50+", label: "Empresas Optimizadas" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#29235C]"
    >
      {/* Textura de fondo de marca */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <ImageWithFallback
          src="https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg"
          alt="Textura Bongo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Textura de fondo de marca */}

      {/* Fondo Premium estilo Apple (Gradientes 3D) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente 1 - Usando colores del manual */}
        <div
          className="absolute w-[700px] h-[700px] -top-40 -left-40
          bg-[radial-gradient(circle_at_center,rgba(102,36,131,0.3),rgba(0,0,0,0))]
          blur-[120px]"
        />

        {/* Gradiente 2 - Azul claro del manual */}
        <div
          className="absolute w-[600px] h-[600px] -bottom-40 right-0
          bg-[radial-gradient(circle_at_center,rgba(54,169,225,0.3),rgba(0,0,0,0))]
          blur-[130px]"
        />

        {/* Gradiente 3 - Azul principal */}
        <div
          className="absolute w-[500px] h-[500px] top-1/3 left-1/3
          bg-[radial-gradient(circle_at_center,rgba(46,49,146,0.25),rgba(0,0,0,0))]
          blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 w-fit backdrop-blur-lg rounded-full"
            >
              <Sparkles className="text-white" size={18} />
              <span className="text-white/90 text-sm">
                Transformación impulsada por datos
              </span>
            </motion.div>

            <motion.h1
              className="text-white leading-tight text-4xl md:text-5xl mb-6"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Potenciamos tus decisiones con{" "}
              <span className="">
                inteligencia basada en datos
              </span>
            </motion.h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              En Bongo Analytics convertimos datos complejos en
              información accionable. Utilizamos analítica
              avanzada, big data y machine learning para
              ayudarte a optimizar procesos, anticipar
              tendencias y maximizar tus resultados.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#2E3192] hover:bg-white/90 group shadow-lg px-6 py-3 rounded-xl transition-all"
              >
                Obtener Consultoría
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-xl shadow-lg transition-all"
              >
                Ver Soluciones
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl text-center cursor-pointer transition-all"
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="text-white text-4xl mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Data analytics dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E3192]/60 to-transparent" />
            </motion.div>

            <motion.div
              className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 flex flex-col items-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <BarChart2 className="text-[#2E3192]" size={28} />
              <div className="text-sm text-[#2E3192] mt-1">
                Análisis Predictivo
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 flex flex-col items-center"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            >
              <Cpu className="text-[#2E3192]" size={28} />
              <div className="text-sm text-[#2E3192] mt-1">
                Inteligencia Artificial
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}