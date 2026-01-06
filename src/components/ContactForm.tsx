import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  User,
  Building2,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface ContactFormProps {
  onClose?: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Cerrar después de 2 segundos
    setTimeout(() => {
      onClose?.();
      // Reset form
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      }, 300);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 px-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2E3192] to-[#36A9E1] flex items-center justify-center mb-6 shadow-2xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 0.8 }}
        >
          <CheckCircle2 className="text-white" size={48} />
        </motion.div>

        <h3 className="text-gray-900 mb-4 text-3xl text-center">
          ¡Mensaje Enviado!
        </h3>

        <p className="text-gray-600 text-center text-lg max-w-md">
          Gracias por contactarnos. Nos pondremos en contacto contigo muy
          pronto.
        </p>

        <motion.div
          className="mt-8 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles className="text-[#36A9E1]" size={20} />
          <Sparkles className="text-[#2E3192]" size={20} />
          <Sparkles className="text-[#662483]" size={20} />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradientes decorativos */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2E3192]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#36A9E1]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E3192]/10 via-[#36A9E1]/10 to-[#662483]/10 px-6 py-3 rounded-full mb-6 border border-[#36A9E1]/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="text-[#36A9E1]" size={20} />
            <span className="text-[#2E3192]">
              Contáctanos
            </span>
          </motion.div>

          <motion.h2
            className="text-gray-900 mb-4 text-3xl md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hablemos sobre{" "}
            <span className="bg-gradient-to-r from-[#2E3192] via-[#662483] to-[#36A9E1] bg-clip-text text-transparent">
              tu proyecto
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Completa el formulario y nos pondremos en contacto contigo
          </motion.p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Label htmlFor="name" className="text-gray-700 mb-2 flex items-center gap-2">
              <User size={18} className="text-[#2E3192]" />
              Nombre Completo
            </Label>
            <div className="relative group">
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-gray-200 focus:border-[#36A9E1] focus:ring-[#36A9E1]/20 transition-all"
                placeholder="Juan Pérez"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2E3192]/5 to-[#36A9E1]/5 rounded-lg opacity-0 group-focus-within:opacity-100 blur transition-opacity" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Label htmlFor="email" className="text-gray-700 mb-2 flex items-center gap-2">
              <Mail size={18} className="text-[#2E3192]" />
              Email
            </Label>
            <div className="relative group">
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-gray-200 focus:border-[#36A9E1] focus:ring-[#36A9E1]/20 transition-all"
                placeholder="juan@empresa.com"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2E3192]/5 to-[#36A9E1]/5 rounded-lg opacity-0 group-focus-within:opacity-100 blur transition-opacity" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Label htmlFor="company" className="text-gray-700 mb-2 flex items-center gap-2">
                <Building2 size={18} className="text-[#2E3192]" />
                Empresa
              </Label>
              <div className="relative group">
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-gray-200 focus:border-[#36A9E1] focus:ring-[#36A9E1]/20 transition-all"
                  placeholder="Tu Empresa S.A."
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2E3192]/5 to-[#36A9E1]/5 rounded-lg opacity-0 group-focus-within:opacity-100 blur transition-opacity" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Label htmlFor="phone" className="text-gray-700 mb-2 flex items-center gap-2">
                <Phone size={18} className="text-[#2E3192]" />
                Teléfono
              </Label>
              <div className="relative group">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-200 focus:border-[#36A9E1] focus:ring-[#36A9E1]/20 transition-all"
                  placeholder="+1 234 567 8900"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2E3192]/5 to-[#36A9E1]/5 rounded-lg opacity-0 group-focus-within:opacity-100 blur transition-opacity" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Label htmlFor="message" className="text-gray-700 mb-2 flex items-center gap-2">
              <MessageSquare size={18} className="text-[#2E3192]" />
              Mensaje
            </Label>
            <div className="relative group">
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border-gray-200 focus:border-[#36A9E1] focus:ring-[#36A9E1]/20 transition-all resize-none"
                placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2E3192]/5 to-[#36A9E1]/5 rounded-lg opacity-0 group-focus-within:opacity-100 blur transition-opacity" />
            </div>
          </motion.div>

          {/* Botón de envío */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative pt-4"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2E3192] via-[#36A9E1] to-[#662483] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-gradient-to-r from-[#2E3192] via-[#29235C] to-[#662483] hover:shadow-2xl hover:shadow-[#36A9E1]/30 transition-all duration-300 group text-lg py-6"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Enviando...
                </span>
              ) : (
                <>
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

                  <span className="relative flex items-center justify-center gap-3">
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Enviar Mensaje
                    <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                  </span>
                </>
              )}
            </Button>
          </motion.div>
        </form>

        {/* Info adicional */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-500 text-sm">
            También puedes contactarnos directamente en{" "}
            <a
              href="mailto:contacto@bongoanalytics.com"
              className="text-[#36A9E1] hover:text-[#2E3192] transition-colors"
            >
              contacto@bongoanalytics.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
