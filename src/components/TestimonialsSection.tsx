"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quotes } from "@phosphor-icons/react";
import GlassCard from "./GlassCard";

const testimonials = [
  {
    name: "Sofía Ramírez",
    role: "Directora de Operaciones",
    company: "Finanzas México",
    quote: "Gracias a la póliza de soporte de MFTS, eliminamos por completo los tiempos muertos en nuestra oficina. Su equipo responde en minutos y siempre resuelven el problema a la primera.",
    initials: "SR",
  },
  {
    name: "Alejandro Gómez",
    role: "Director de TI",
    company: "Logística Express",
    quote: "La migración de nuestro correo corporativo y archivos compartidos a Microsoft 356 fue impecable. Estábamos preocupados por la pérdida de datos, pero el equipo lo manejó con profesionalismo absoluto.",
    initials: "AG",
  },
  {
    name: "Ing. Carlos Mendoza",
    role: "Gerente de Planta",
    company: "Manufacturas del Norte",
    quote: "El sistema de videovigilancia y control de accesos que nos instalaron ha sido un cambio total de juego. La calidad de imagen es de primera y tenemos el control de acceso en nuestro celular.",
    initials: "CM",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-tech-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
            Casos de Éxito
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Lo que dicen nuestros clientes
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            Nuestra mayor recompensa es la confianza y estabilidad tecnológica de las empresas que acompañamos día con día.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <GlassCard hoverEffect={true} className="h-full flex flex-col justify-between p-8 relative">
                {/* Quotes Decorator */}
                <Quotes 
                  size={48} 
                  weight="fill" 
                  className="absolute right-6 top-6 text-tech-blue/5 pointer-events-none" 
                />

                <div className="flex flex-col gap-6">
                  {/* Star Rating */}
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-zinc-600 italic text-sm leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                {/* Profile Info */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-100">
                  <div className="w-10 h-10 rounded-full bg-tech-blue-light text-tech-blue flex items-center justify-center text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-zinc-900 leading-tight">
                      {t.name}
                    </span>
                    <span className="block text-xs text-zinc-500 mt-0.5">
                      {t.role}, <span className="font-semibold text-zinc-700">{t.company}</span>
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
