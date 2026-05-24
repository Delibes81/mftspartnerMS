"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Headset,
  ShareNetwork,
  Wrench,
  Fingerprint,
  Printer,
  WindowsLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import Link from "next/link";

const services = [
  {
    id: "soporte",
    title: "Soporte IT",
    subtitle: "Presencial y Remoto",
    description:
      "Asistencia técnica inmediata para resolver problemas de hardware, software, servidores y sistemas. Cobertura remota global y soporte en sitio garantizado.",
    icon: Headset,
  },
  {
    id: "redes",
    title: "Redes y Cableado",
    subtitle: "Conectividad de Alta Velocidad",
    description:
      "Instalación de cableado estructurado categoría 6/6A y fibra óptica. Configuración y administración experta de routers, firewalls y switches.",
    icon: ShareNetwork,
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento TI",
    subtitle: "Preventivo y Correctivo",
    description:
      "Prolongamos la vida útil de tus equipos de cómputo y servidores mediante limpieza física profunda, optimización de sistemas y cambio de componentes.",
    icon: Wrench,
  },
  {
    id: "seguridad",
    title: "Seguridad y Accesos",
    subtitle: "CCTV y Biométricos",
    description:
      "Sistemas avanzados de videovigilancia IP y control de accesos biométricos de última generación para proteger los activos más valiosos de tu empresa.",
    icon: Fingerprint,
  },
  {
    id: "impresion",
    title: "Sistemas de Impresión",
    subtitle: "Renta y Soporte",
    description:
      "Renta de equipos multifuncionales de alta gama adaptados a tu volumen de trabajo. Incluye consumibles, refacciones y mantenimiento preventivo.",
    icon: Printer,
  },
  {
    id: "microsoft",
    title: "Microsoft 365",
    subtitle: "Partner Oficial de Licenciamiento",
    description:
      "Distribución, configuración e implementación oficial de Microsoft 365. Migración segura de correos, Teams, SharePoint y soporte cloud continuo.",
    icon: WindowsLogo,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
            Nuestras Soluciones
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Servicios integrales de TI diseñados para empresas modernas
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            Descubre cómo podemos potenciar la eficiencia, seguridad y estabilidad
            operativa de tu organización mediante infraestructura de punta.
          </p>
        </div>

        {/* Services CSS Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-3xl bg-white border border-zinc-200/60 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-tech-blue-light flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-6">
                    <Icon
                      size={24}
                      weight="duotone"
                      className="text-tech-blue"
                    />
                  </div>

                  {/* Service Headers */}
                  <span className="text-xs font-medium text-tech-blue/80 tracking-wide uppercase">
                    {service.subtitle}
                  </span>
                  <h4 className="mt-1 text-xl font-bold text-zinc-900 group-hover:text-tech-blue transition-colors duration-200">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-3.5 text-sm leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </div>

                {/* Card Action / Learn More */}
                <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center justify-between">
                  <Link
                    href={`/servicios#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 hover:text-tech-blue group-hover:translate-x-0.5 transition-all duration-200"
                  >
                    <span>Saber más</span>
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
