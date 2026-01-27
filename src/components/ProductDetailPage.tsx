import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { products } from "../data/products";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ContactForm } from "./ContactForm";

// Contenido detallado para cada producto
const productDetails: Record<string, {
  overview: string;
  benefits: string[];
  useCases: string[];
  technicalSpecs: string[];
  longDescription: string;
}> = {
  "help-desk": {
    overview: "Nuestro servicio de Mesa de Ayuda está diseñado para ofrecerte soporte técnico especializado y asistencia remota con una disponibilidad 24/7, garantizando que tu equipo siempre tenga el respaldo necesario para mantener sus operaciones funcionando sin interrupciones.",
    benefits: [
      "Respuesta inmediata a incidencias técnicas",
      "Disponibilidad 24/7 los 365 días del año",
      "Equipo de especialistas certificados",
      "Seguimiento completo de tickets",
      "Reportes detallados de rendimiento",
      "Integración con sistemas existentes"
    ],
    useCases: [
      "Soporte para aplicaciones empresariales críticas",
      "Resolución de problemas de infraestructura",
      "Asistencia en migraciones y actualizaciones",
      "Monitoreo proactivo de sistemas",
      "Capacitación y consultoría técnica"
    ],
    technicalSpecs: [
      "Sistema de tickets con SLA garantizado",
      "Portal de autoservicio para usuarios",
      "Base de conocimiento integrada",
      "Integración con herramientas de monitoreo",
      "API REST para integraciones personalizadas",
      "Dashboard de métricas en tiempo real"
    ],
    longDescription: "Nuestra Mesa de Ayuda es mucho más que un servicio de soporte tradicional. Implementamos un ecosistema completo de asistencia técnica que combina inteligencia artificial con experiencia humana para resolver problemas de manera eficiente y proactiva. Utilizamos tecnologías de última generación para categorizar, priorizar y resolver incidencias, reduciendo significativamente los tiempos de respuesta y mejorando la satisfacción del usuario. Nuestro enfoque se basa en la prevención, utilizando análisis predictivo para identificar y resolver problemas antes de que afecten a los usuarios finales."
  },
  "Poinnet-predict": {
    overview: "Poinnet Predict es nuestra plataforma de Machine Learning as a Service (MLaaS) que permite a las empresas implementar modelos predictivos personalizados sin la complejidad técnica tradicional. Anticipamos tendencias, comportamientos futuros y oportunidades de negocio mediante algoritmos avanzados de inteligencia artificial.",
    benefits: [
      "Modelos predictivos personalizados para tu industria",
      "Reducción de costos operativos hasta en un 40%",
      "Mejora en la precisión de pronósticos del 95%",
      "Implementación rápida sin necesidad de equipo de data science",
      "Escalabilidad automática según tus necesidades",
      "Actualización continua de modelos"
    ],
    useCases: [
      "Predicción de demanda y optimización de inventario",
      "Análisis de riesgo crediticio y fraude",
      "Mantenimiento predictivo de equipos",
      "Optimización de rutas y logística",
      "Análisis de sentimiento y comportamiento del cliente",
      "Predicción de abandono (churn) de clientes"
    ],
    technicalSpecs: [
      "Algoritmos de deep learning y ensemble methods",
      "Procesamiento de datos en tiempo real",
      "API RESTful para integración sencilla",
      "Dashboard interactivo con visualizaciones",
      "Soporte para múltiples formatos de datos",
      "Modelos entrenados y optimizados automáticamente"
    ],
    longDescription: "Poinnet Predict transforma la manera en que las empresas toman decisiones estratégicas. Nuestra plataforma utiliza técnicas avanzadas de machine learning, incluyendo redes neuronales profundas, algoritmos de ensemble y aprendizaje por refuerzo, para crear modelos que no solo predicen el futuro, sino que también explican el por qué de cada predicción. La plataforma se adapta continuamente a los cambios en tus datos, mejorando su precisión con el tiempo. Ofrecemos desde modelos pre-entrenados para casos de uso comunes hasta soluciones completamente personalizadas desarrolladas específicamente para tu negocio."
  },
  "vision-computadora": {
    overview: "Nuestro sistema de Visión por Computadora utiliza inteligencia artificial y machine learning avanzado para procesar y analizar imágenes y videos en tiempo real. Diseñado específicamente para instituciones educativas de educación superior, permite automatizar procesos, mejorar la seguridad y optimizar la gestión de recursos.",
    benefits: [
      "Reconocimiento facial y de objetos en tiempo real",
      "Automatización de procesos administrativos",
      "Mejora en la seguridad del campus",
      "Análisis de asistencia automático",
      "Optimización del uso de espacios",
      "Reducción de costos operativos"
    ],
    useCases: [
      "Control de acceso y asistencia estudiantil",
      "Monitoreo de seguridad en campus",
      "Análisis de ocupación de espacios",
      "Detección de objetos y personas",
      "Automatización de procesos de biblioteca",
      "Análisis de comportamiento y flujos de tráfico"
    ],
    technicalSpecs: [
      "Modelos YOLO y ResNet para detección",
      "Procesamiento de video en tiempo real",
      "ETL automatizado para datos estructurados",
      "Data warehouse optimizado para consultas",
      "API unificada REST/GraphQL",
      "Integración con sistemas académicos existentes"
    ],
    longDescription: "Nuestro sistema de Visión por Computadora representa la vanguardia en tecnología de análisis visual aplicada al sector educativo. Utilizamos modelos de deep learning de última generación, específicamente entrenados para reconocer contextos educativos, lo que nos permite ofrecer soluciones precisas y confiables. El sistema incluye un pipeline completo de ETL (Extract, Transform, Load) que procesa automáticamente las imágenes y videos, extrayendo información estructurada que se almacena en nuestro data warehouse optimizado. Esto permite realizar análisis históricos, generar reportes y tomar decisiones basadas en datos. La API unificada facilita la integración con sistemas académicos existentes, permitiendo una implementación sin interrupciones."
  },
  "devices-renting": {
    overview: "Nuestro servicio de Renting de Equipos optimiza tu inversión tecnológica ofreciendo acceso a la última tecnología sin la carga financiera de una compra directa. Incluimos servidores de alto rendimiento, equipos de red avanzados y dispositivos móviles empresariales, todo con mantenimiento y soporte incluido.",
    benefits: [
      "Acceso a tecnología de última generación sin inversión inicial",
      "Flexibilidad para actualizar equipos según necesidades",
      "Mantenimiento y soporte técnico incluido",
      "Opciones de financiamiento flexibles",
      "Reducción de costos de capital",
      "Disponibilidad inmediata de equipos"
    ],
    useCases: [
      "Infraestructura de servidores para centros de datos",
      "Equipos de red para expansión de oficinas",
      "Dispositivos móviles para equipos de campo",
      "Workstations de alto rendimiento para desarrollo",
      "Equipos temporales para proyectos específicos",
      "Actualización tecnológica sin depreciación"
    ],
    technicalSpecs: [
      "Servidores con procesadores de última generación",
      "Equipos de red con capacidades de 10GbE+",
      "Dispositivos móviles empresariales certificados",
      "Opciones de almacenamiento SSD NVMe",
      "Garantía y soporte 24/7 incluidos",
      "Opciones de compra al final del contrato"
    ],
    longDescription: "El servicio de Renting de Equipos de Poinnet está diseñado para empresas que buscan mantener su infraestructura tecnológica al día sin comprometer su flujo de caja. Ofrecemos una amplia gama de equipos, desde servidores blade de alta densidad hasta dispositivos móviles empresariales, todos seleccionados de los mejores fabricantes del mercado. Nuestro modelo de renting incluye no solo el equipo, sino también mantenimiento preventivo, actualizaciones de firmware, soporte técnico especializado y opciones de escalamiento. Esto permite a las empresas adaptarse rápidamente a cambios en la demanda, probar nuevas tecnologías sin compromiso a largo plazo, y mantener siempre la infraestructura más adecuada para sus necesidades operativas."
  },
  "data-platform": {
    overview: "Poinnet Data Platform es una infraestructura completa y escalable diseñada para la gestión, almacenamiento y análisis de grandes volúmenes de datos empresariales. Integra múltiples fuentes de datos en una plataforma unificada que permite análisis en tiempo real y procesamiento de big data.",
    benefits: [
      "Almacenamiento escalable hasta petabytes de datos",
      "Procesamiento de datos en tiempo real y batch",
      "Integración con más de 100 fuentes de datos",
      "Análisis de datos sin necesidad de moverlos",
      "Seguridad y cumplimiento de normativas",
      "Reducción de costos de infraestructura hasta 60%"
    ],
    useCases: [
      "Data lake centralizado para toda la organización",
      "Análisis de datos históricos y tendencias",
      "Integración de datos de múltiples sistemas",
      "Preparación de datos para machine learning",
      "Business intelligence y reporting avanzado",
      "Gobernanza y calidad de datos"
    ],
    technicalSpecs: [
      "Arquitectura distribuida y altamente disponible",
      "Soporte para datos estructurados y no estructurados",
      "Procesamiento con Spark y Flink",
      "Almacenamiento en formato columnar optimizado",
      "API REST y GraphQL para acceso a datos",
      "Herramientas de ETL/ELT visuales"
    ],
    longDescription: "Poinnet Data Platform es el corazón de cualquier estrategia de datos moderna. La plataforma está construida sobre una arquitectura distribuida que puede escalar desde terabytes hasta petabytes, adaptándose dinámicamente a las necesidades de tu organización. Soporta tanto procesamiento en tiempo real para análisis de streaming como procesamiento batch para análisis históricos profundos. Una de las características más poderosas es la capacidad de integrar datos de múltiples fuentes - desde bases de datos relacionales tradicionales hasta APIs, archivos en la nube, IoT y más - sin necesidad de mover físicamente los datos. Esto se logra mediante nuestra tecnología de virtualización de datos. La plataforma incluye herramientas avanzadas de gobernanza, permitiendo establecer políticas de acceso, calidad y cumplimiento que se aplican automáticamente en toda la organización."
  },
  "cloud-solutions": {
    overview: "Nuestras soluciones en la nube ofrecen infraestructura y plataforma como servicio para optimizar tus operaciones, reducir costos y mejorar la agilidad de tu negocio. Desde migraciones completas hasta arquitecturas híbridas, proporcionamos la flexibilidad que necesitas.",
    benefits: [
      "Escalabilidad automática según demanda",
      "Alta disponibilidad con redundancia geográfica",
      "Reducción de costos de infraestructura hasta 70%",
      "Seguridad avanzada con encriptación end-to-end",
      "Backup y recuperación ante desastres",
      "Acceso global con baja latencia"
    ],
    useCases: [
      "Migración completa a la nube",
      "Arquitecturas híbridas (on-premise + cloud)",
      "Desarrollo y despliegue de aplicaciones",
      "Almacenamiento y backup de datos",
      "Computación de alto rendimiento (HPC)",
      "Disaster recovery y business continuity"
    ],
    technicalSpecs: [
      "Infraestructura multi-cloud (AWS, Azure, GCP)",
      "Kubernetes para orquestación de contenedores",
      "CDN global para contenido estático",
      "Load balancing automático",
      "Monitoreo y alertas 24/7",
      "Cumplimiento con normativas (GDPR, HIPAA, etc.)"
    ],
    longDescription: "Nuestras Cloud Solutions están diseñadas para empresas que buscan modernizar su infraestructura y aprovechar las ventajas de la computación en la nube. Ofrecemos un enfoque completo que va desde la consultoría estratégica hasta la implementación y gestión continua. Trabajamos con los principales proveedores de nube (AWS, Microsoft Azure, Google Cloud Platform) y también ofrecemos soluciones multi-cloud para evitar el vendor lock-in y optimizar costos. Nuestro equipo de arquitectos cloud diseña soluciones que no solo migran tu infraestructura actual, sino que la optimizan para aprovechar las capacidades nativas de la nube, como auto-scaling, serverless computing y servicios gestionados. Incluimos servicios de seguridad avanzados, cumplimiento normativo, y estrategias de disaster recovery que garantizan que tu negocio pueda operar sin interrupciones incluso ante eventos inesperados."
  }
};

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Scroll al inicio cuando se carga la página o cambia el producto
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate("/")} className="bg-[#2E3192] hover:bg-[#29235C] text-white">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const details = productDetails[productId || ""];
  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-linear-to-br from-gray-50 to-white overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[800px] h-[800px] -top-60 -left-60 bg-[radial-gradient(circle_at_center,rgba(6,103,174,0.1),rgba(0,0,0,0))] blur-[100px]" />
            <div className="absolute w-[700px] h-[700px] top-1/3 -right-60 bg-[radial-gradient(circle_at_center,rgba(40,160,201,0.1),rgba(0,0,0,0))] blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-[#0667ae] hover:text-[#28a0c9] hover:bg-[#0667ae]/10"
              >
                <ArrowLeft className="mr-2" size={20} />
                Volver a servicios
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full bg-[#0667ae]/10 text-[#0667ae] text-sm font-semibold">
                    Solución especializada
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#5dd7d9]/20 text-[#0667ae] text-sm font-medium">
                    {product.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#0667ae] via-[#28a0c9] to-[#5dd7d9] flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={40} />
                  </div>
                  <div>
                    <h1 className="text-gray-900 text-4xl md:text-5xl font-bold">{product.title}</h1>
                  </div>
                </div>
                
                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                  {details?.overview || product.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-[#0667ae] hover:bg-[#28a0c9] text-white px-8 py-6 text-lg"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Solicitar Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#0667ae] text-[#0667ae] hover:bg-[#0667ae]/10 px-8 py-6 text-lg"
                    onClick={() => setIsContactOpen(true)}
                  >
                    Contactar Ventas
                  </Button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  <div className="rounded-2xl border border-[#0667ae]/15 bg-white/80 backdrop-blur p-5 shadow-sm">
                    <h4 className="text-[#0667ae] font-semibold mb-3">Beneficios clave</h4>
                    <ul className="space-y-2">
                      {(details?.benefits || []).slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                          <CheckCircle2 className="text-[#28a0c9] mt-0.5" size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-[#0667ae]/15 bg-white/80 backdrop-blur p-5 shadow-sm">
                    <h4 className="text-[#0667ae] font-semibold mb-3">Casos de uso</h4>
                    <ul className="space-y-2">
                      {(details?.useCases || []).slice(0, 3).map((useCase, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="mt-1 w-2 h-2 rounded-full bg-[#5dd7d9]" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#0667ae]/10">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0667ae] via-[#28a0c9] to-[#5dd7d9] opacity-25" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        {details && (
          <section className="py-20 bg-linear-to-br from-[#0667ae] to-[#28a0c9] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute w-[600px] h-[600px] -top-40 -right-40 bg-[radial-gradient(circle_at_center,rgba(93,215,217,0.35),rgba(0,0,0,0))] blur-[120px]" />
              <div className="absolute w-[500px] h-[500px] bottom-0 left-0 bg-[radial-gradient(circle_at_center,rgba(40,160,201,0.25),rgba(0,0,0,0))] blur-[100px]" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
                  Sobre este{" "}
                  <span className="bg-linear-to-r from-[#5dd7d9] to-white bg-clip-text text-transparent">
                    servicio
                  </span>
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-12">
                  {details.longDescription}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {details && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
                  Beneficios{" "}
                  <span className="text-[#0667ae]">principales</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Descubre cómo este servicio puede transformar tu negocio
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {details.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-[#28a0c9] shrink-0 mt-1" size={24} />
                      <p className="text-gray-700 text-lg">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Use Cases Section */}
        {details && (
          <section className="py-20 bg-linear-to-br from-[#0667ae] to-[#28a0c9] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute w-[600px] h-[600px] top-0 left-0 bg-[radial-gradient(circle_at_center,rgba(93,215,217,0.35),rgba(0,0,0,0))] blur-[120px]" />
              <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-[radial-gradient(circle_at_center,rgba(40,160,201,0.25),rgba(0,0,0,0))] blur-[100px]" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
                  Casos de{" "}
                  <span className="bg-linear-to-r from-[#5dd7d9] to-white bg-clip-text text-transparent">
                    uso
                  </span>
                </h2>
                <div className="space-y-4">
                  {details.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <div className="w-3 h-3 rounded-full bg-linear-to-r from-[#5dd7d9] to-white" />
                      <p className="text-white text-lg">{useCase}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Technical Specs Section */}
        {details && (
          <section className="py-20 bg-linear-to-br from-[#0667ae] to-[#28a0c9] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute w-[600px] h-[600px] -top-40 -right-40 bg-[radial-gradient(circle_at_center,rgba(93,215,217,0.35),rgba(0,0,0,0))] blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
                  Especificaciones{" "}
                  <span className="text-[#5dd7d9]">técnicas</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {details.technicalSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                    >
                      <p className="text-white text-lg">{spec}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-br from-[#0667ae] to-[#28a0c9] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute w-[700px] h-[700px] -top-40 -left-40 bg-[radial-gradient(circle_at_center,rgba(93,215,217,0.35),rgba(0,0,0,0))] blur-[120px]" />
            <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-[radial-gradient(circle_at_center,rgba(40,160,201,0.25),rgba(0,0,0,0))] blur-[100px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-white/90 text-xl mb-8">
                Contacta con nuestro equipo para una consultoría personalizada
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-[#0667ae] hover:bg-white/90 px-8 py-6 text-lg">
                  Solicitar Consultoría
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Ver Más Servicios
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

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
    </div>
  );
}
