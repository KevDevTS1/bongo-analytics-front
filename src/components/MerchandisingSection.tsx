import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingBag, Package } from "lucide-react";
import { Button } from "./ui/button";

const merchandisingItems = [
  {
    image: "/mnt/data/extracted_assets/page6_img1.png",
    category: "Papelería Corporativa",
  },
  {
    image: "/mnt/data/extracted_assets/page6_img2.png",
    category: "Material Promocional",
  },
  {
    image: "/mnt/data/extracted_assets/page6_img3.png",
    category: "Branding Empresarial",
  },
  {
    image: "/mnt/data/extracted_assets/page7_img1.png",
    category: "Merchandising Premium",
  },
  {
    image: "/mnt/data/extracted_assets/page7_img2.png",
    category: "Elementos de Identidad",
  },
  {
    image: "/mnt/data/extracted_assets/page7_img3.png",
    category: "Material POP",
  },
  {
    image: "/mnt/data/extracted_assets/page8_img1.png",
    category: "Productos de Marca",
  },
  {
    image: "/mnt/data/extracted_assets/page8_img2.png",
    category: "Accesorios Corporativos",
  },
  {
    image: "/mnt/data/extracted_assets/page8_img3.png",
    category: "Artículos Promocionales",
  },
  {
    image: "/mnt/data/extracted_assets/page8_img4.png",
    category: "Kit de Marca",
  },
];

export function MerchandisingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="merchandising"
      className="py-24 bg-[#29235C] relative overflow-hidden"
      ref={ref}
    >
      {/* Textura de fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <ImageWithFallback
          src="/mnt/data/extracted_assets/page4_img4.png"
          alt="Textura"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradientes decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] -top-40 -right-40
          bg-[radial-gradient(circle_at_center,rgba(54,169,225,0.2),rgba(0,0,0,0))]
          blur-[120px]"
        />
        <div
          className="absolute w-[500px] h-[500px] -bottom-40 -left-40
          bg-[radial-gradient(circle_at_center,rgba(102,36,131,0.2),rgba(0,0,0,0))]
          blur-[130px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <ShoppingBag className="text-[#36A9E1]" size={32} />
            <span className="text-[#36A9E1]">
              Merchandising Poinnet
            </span>
          </motion.div>
          <h2 className="text-white mb-6">
            Nuestra <span className="">identidad visual</span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Descubre cómo aplicamos nuestra marca en diferentes
            materiales y productos. Desde papelería corporativa
            hasta merchandising premium, cada elemento refleja
            la esencia de{" "}
            <strong className="text-white">
              Poinnet
            </strong>
            .
          </p>
        </motion.div>

        {/* Grid de Merchandising */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {merchandisingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={
                isInView ? { opacity: 1, scale: 1, y: 0 } : {}
              }
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                whileHover={{
                  boxShadow:
                    "0 20px 60px rgba(54, 169, 225, 0.3)",
                }}
              >
                {/* Imagen */}
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay con categoría */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#2E3192] via-[#2E3192]/60 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex items-end justify-center p-4"
                >
                  <p className="text-white text-center text-sm">
                    {item.category}
                  </p>
                </motion.div>

                {/* Badge decorativo */}
                <motion.div
                  className="absolute top-3 right-3 bg-[#36A9E1] rounded-full p-2 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <Package className="text-white" size={16} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-white mb-4">
              ¿Interesado en nuestro merchandising?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos para conocer más sobre nuestros
              productos de marca y cómo pueden fortalecer tu
              identidad corporativa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#2E3192] hover:bg-white/90 shadow-xl px-8 py-3 rounded-xl"
              >
                Solicitar Catálogo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-xl"
              >
                Descargar Manual de Marca
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}