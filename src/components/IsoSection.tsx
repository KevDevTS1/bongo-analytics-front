import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Download,
  Medal,
  ShieldCheck,
  Stamp,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import iso27001Es from "../assets/iso/iso-iec-27001-2022-es.pdf";
import iso27001En from "../assets/iso/iso-iec-27001-2022-en.pdf";
import iso9001Es from "../assets/iso/iso-9001-2015-es.pdf";
import iso9001En from "../assets/iso/iso-9001-2015-en.pdf";
import iso22301Es from "../assets/iso/iso-22301-2019-es.pdf";
import iso22301En from "../assets/iso/iso-22301-2019-en.pdf";
import iso20000Es from "../assets/iso/iso-iec-20000-1-es.pdf";
import iso20000En from "../assets/iso/iso-iec-20000-1-en.pdf";

const certifications: {
  code: string;
  description: string;
  pdfEs: string;
  pdfEn: string;
  fileNameEs: string;
  fileNameEn: string;
  icon: LucideIcon;
}[] = [
  {
    code: "ISO/IEC 27001:2022",
    description:
      "Sistemas de gestión de la seguridad de la información — Requisitos.",
    pdfEs: iso27001Es,
    pdfEn: iso27001En,
    fileNameEs: "ISO-IEC-27001-2022-Español.pdf",
    fileNameEn: "ISO-IEC-27001-2022-Ingles.pdf",
    icon: ShieldCheck,
  },
  {
    code: "ISO 9001:2015",
    description:
      "Sistemas de gestión de la calidad — Requisitos.",
    pdfEs: iso9001Es,
    pdfEn: iso9001En,
    fileNameEs: "ISO-9001-2015-Español.pdf",
    fileNameEn: "ISO-9001-2015-Ingles.pdf",
    icon: BadgeCheck,
  },
  {
    code: "ISO 22301:2019",
    description:
      "Seguridad y resiliencia — Gestión de la continuidad del negocio — Requisitos.",
    pdfEs: iso22301Es,
    pdfEn: iso22301En,
    fileNameEs: "ISO-22301-2019-Español.pdf",
    fileNameEn: "ISO-22301-2019-Ingles.pdf",
    icon: Stamp,
  },
  {
    code: "ISO/IEC 20000-1",
    description:
      "Gestión de servicios de tecnologías de la información — Requisitos del sistema de gestión de servicios.",
    pdfEs: iso20000Es,
    pdfEn: iso20000En,
    fileNameEs: "ISO-IEC-20000-1-Español.pdf",
    fileNameEn: "ISO-IEC-20000-1-Ingles.pdf",
    icon: Medal,
  },
];

export function IsoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="certificaciones-iso"
      ref={ref}
      className="py-24 relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <ImageWithFallback
          src="/mnt/data/extracted_assets/page4_img3.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-gradient-to-br from-[#36A9E1]/15 via-[#662483]/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute -bottom-32 left-0 w-[420px] h-[420px] bg-gradient-to-tr from-[#0667ae]/10 via-[#2E3192]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#36A9E1]/30 bg-[#36A9E1]/5 px-4 py-1.5 text-sm text-[#0667ae] mb-6">
            <BadgeCheck className="w-4 h-4" aria-hidden />
            <span>Normas internacionales</span>
          </div>
          <h2 className="text-gray-900 mb-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Certificaciones{" "}
            <span className="bg-gradient-to-r from-[#0667ae] via-[#662483] to-[#36A9E1] bg-clip-text text-transparent">
              ISO
            </span>
          </h2>
          <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-4">
            Calidad que se certifica, confianza que se construye.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            En POINNET no solo lo decimos, lo demostramos. Contamos con certificaciones
            internacionales ISO que avalan nuestros estándares en calidad, seguridad de la
            información, continuidad del negocio y gestión de servicios TI — porque su
            tranquilidad merece respaldo real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {certifications.map((item, index) => {
            const CertIcon = item.icon;
            return (
            <motion.article
              key={item.code}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              className="group relative rounded-2xl border border-gray-200/80 bg-white/90 p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-[#36A9E1]/35 transition-all duration-300"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#36A9E1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0667ae] to-[#36A9E1] text-white shadow-md ring-4 ring-[#36A9E1]/15 group-hover:ring-[#36A9E1]/25 transition-[box-shadow]"
                  aria-hidden
                >
                  <CertIcon className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    {item.code}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button
                  variant="default"
                  className="flex-1 bg-gradient-to-r from-[#0667ae] via-[#28a0c9] to-[#36A9E1] hover:opacity-95"
                  asChild
                >
                  <a href={item.pdfEs} download={item.fileNameEs}>
                    <Download className="w-4 h-4 mr-2" aria-hidden />
                    PDF — Español
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-[#0667ae]/30 text-[#0667ae] hover:bg-[#0667ae]/5"
                  asChild
                >
                  <a href={item.pdfEn} download={item.fileNameEn}>
                    <Download className="w-4 h-4 mr-2" aria-hidden />
                    PDF — English
                  </a>
                </Button>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
