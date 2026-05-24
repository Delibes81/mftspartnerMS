"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  MapPin, 
  CloudArrowUp, 
  Sparkle
} from "@phosphor-icons/react";
import GlassCard from "./GlassCard";

const timelineEvents = [
  {
    year: "2016",
    title: "Fundación de MFTS",
    description: "Iniciamos operaciones en la región con la visión de profesionalizar el soporte técnico corporativo, concentrándonos en reparaciones críticas e instalaciones de oficina.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]"
  },
  {
    year: "2019",
    title: "Consolidación e Infraestructura",
    description: "Expandimos nuestro catálogo técnico de servicios integrales agregando cableado estructurado categoría 6/6A, fibra óptica y sistemas de CCTV IP avanzados.",
    icon: MapPin,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    glow: "shadow-[0_0_15px_rgba(99,102,241,0.15)]"
  },
  {
    year: "2022",
    title: "Socio Oficial de Microsoft",
    description: "Obtenemos el registro y certificación como Microsoft Official Partner. Esto nos permitió liderar migraciones masivas y seguras de correo Exchange y archivos a la suite Microsoft 365.",
    icon: CloudArrowUp,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]"
  },
  {
    year: "Presente",
    title: "Socio TI Estratégico",
    description: "Nos consolidamos como líderes regionales en soporte TI y servicios administrados. Con pólizas 24/7/365, cuidamos la operación de cientos de empresas.",
    icon: Sparkle,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
} as const;

export default function CompanyTimeline() {
  return (
    <section className="py-20 bg-zinc-50 relative overflow-hidden border-t border-zinc-200/40">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
            Nuestra Historia
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            La trayectoria que nos respalda
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            Desde nuestros comienzos locales hasta convertirnos en un integrador clave en la nube, cada paso ha sido impulsado por entregar calidad.
          </p>
        </div>

        {/* Timeline Horizontal/Vertical Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-stretch mt-12"
        >
          {/* Background Connecting line (Visible only on desktop md+) */}
          <div className="absolute top-[3.5rem] left-12 right-12 h-0.5 bg-zinc-200/80 hidden md:block z-0" />

          {timelineEvents.map((event, idx) => {
            const Icon = event.icon;
            
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center md:items-start group"
              >
                
                {/* Year Indicator Node */}
                <div className="flex flex-col items-center md:items-start mb-6 w-full relative">
                  <div className={`w-14 h-14 rounded-full ${event.bgColor} ${event.color} ${event.glow} border border-zinc-200/60 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-110 z-10`}>
                    <Icon size={24} weight="duotone" />
                  </div>
                  
                  {/* Floating Year badge below/beside node */}
                  <span className="block text-2xl font-black text-zinc-950 font-mono tracking-tight mt-4">
                    {event.year}
                  </span>
                </div>

                {/* Content Card */}
                <GlassCard hoverEffect={true} className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-zinc-900 leading-snug">
                      {event.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </GlassCard>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
