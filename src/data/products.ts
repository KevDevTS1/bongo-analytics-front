import { BarChart3, Brain, EyeIcon, Sparkles, Database, Cloud  } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  gradient: string;
  icon: typeof Cloud | typeof BarChart3 | typeof Brain | typeof EyeIcon | typeof Sparkles | typeof Database ;
}

export const products: Product[] = [
  {
    id: "help-desk",
    title: "Help desk",
    subtitle: "Mesa de ayuda",
    description: "Nuestro servicio de Mesa de Ayuda está diseñado para ofrecerte soporte técnico especializado y asistencia remota con una disponibilidad 24/7.",
    features: ["Respuesta ágil y eficaz", "Respaldo 24/7", "Alertas inteligentes"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzM3MTgzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-[#0667ae] to-[#0667ae]",
    icon: BarChart3,
  },
  {
    id: "Poinnet-predict",
    title: "Poinnet Predict",
    subtitle: "Machine Learning as a Service",
    description: "Modelos predictivos personalizados que anticipan tendencias y comportamientos futuros.",
    features: ["Predicción de ventas", "Análisis de riesgo", "Optimización de recursos"],
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMzNjg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-[#0667ae] to-[#0667ae]",
    icon: Brain,
  },
  {
    id: "vision-computadora",
    title: "Visión por computadora - IA",
    subtitle: "Sistema de visión",
    description: "Producto basado en machine learning y modelos de inteligencia artificial, diseñado específicamente para instituciones educativas de educación superior. ",
    features: ["ETL automatizado", "Data warehouse", "API unificada"],
    image: "https://cdn.pixabay.com/photo/2022/09/13/03/10/artificial-intelligence-7450797_1280.jpg",
    gradient: "from-[#0667ae] to-[#0667ae]",
    icon: EyeIcon,
  },
  {
    id: "devices-renting",
    title: "Devices renting",
    subtitle: "Alquiler de dispositivos",
    description: "Optimizamos tu inversión tecnológica a través de nuestro servicio de Renting de Equipos. ",
    features: ["Servidores", "Equipos de red", "Dispositivos móviles"],
    image: "https://images.pexels.com/photos/10948190/pexels-photo-10948190.jpeg?auto=compress&cs=tinysrgb&w=1600&loading=lazyjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2MzM2Nzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-[#0667ae] to-[#0667ae]",
    icon: Sparkles,
  },
  {
    id: "data-platform",
    title: "LUPAAP",
    subtitle: "CRM analítico",
    description: "CRM analítico para decidir con datos, optimizar formularios y acelerar la gestión documental.",
    features: ["Formularios digitales", "Estadísticas en tiempo real", "Gestión documental ágil"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gradient: "from-[#0667ae] to-[#0667ae]",
    icon: Database,
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    subtitle: "Soluciones en la nube",
    description: "Servicios de infraestructura y plataforma en la nube para optimizar tus operaciones y reducir costos.",
    features: ["Escalabilidad automática", "Alta disponibilidad", "Seguridad avanzada"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gradient: "from-[#0667ae] to-[#0667ae]",
    icon: Cloud,
  },
];
