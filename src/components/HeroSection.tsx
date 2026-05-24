"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, WindowsLogo } from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-zinc-50">
      {/* Rejilla animada de fondo */}
      <div className="absolute inset-0 bg-tech-grid animate-grid-drift pointer-events-none opacity-60" />

      {/* Orbes difuminados animados (orb-glow) */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-tech-blue/8 blur-[100px] animate-orb-glow pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-tech-cyan/8 blur-[100px] animate-orb-glow pointer-events-none will-change-transform [animation-delay:-5s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Microsoft Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-8"
            >
              <WindowsLogo size={16} className="text-[#0078D7]" weight="fill" />
              <span className="text-xs font-semibold text-zinc-600 tracking-wide">
                Microsoft Official Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.1]"
            >
              Soporte de TI inteligente.
              <span className="block mt-2 bg-gradient-to-r from-tech-blue to-blue-500 bg-clip-text text-transparent">
                La infraestructura que tu negocio merece.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed"
            >
              Desde soporte técnico en sitio y remoto hasta redes, CCTV y licenciamiento
              Microsoft 365. Diseñamos soluciones de TI sólidas para que te concentres
              en lo que mejor haces: hacer crecer tu negocio.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contacto"
                className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <span>Agendar Asesoría</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              </Link>
              
              <Link
                href="/servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-zinc-200 text-zinc-700 font-semibold transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explorar Servicios
              </Link>
            </motion.div>

            {/* Mini Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-6 border-t border-zinc-200/50 w-full flex items-center gap-6 text-xs font-medium text-zinc-500"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-tech-blue" />
                <span>Infraestructura Segura</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
              <div className="flex items-center gap-1.5">
                <WindowsLogo size={16} className="text-zinc-500" />
                <span>Licenciamiento Oficial</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Illustration / Image */}
          <div className="lg:col-span-5 flex justify-center items-center w-full px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[450px] aspect-square rounded-[2.5rem] bg-white/40 backdrop-blur-sm p-4 border border-zinc-200/50 shadow-premium animate-tech-float"
              whileHover={{ scale: 1.02 }}
            >
              {/* Outer decorative rings */}
              <div className="absolute -inset-4 rounded-[3rem] border border-dashed border-tech-blue/15 animate-[spin_120s_linear_infinite] pointer-events-none" />
              
              <div className="w-full h-full overflow-hidden rounded-[2rem] bg-zinc-100 border border-zinc-200/30 relative">
                {/* Floating graphic overlay badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-200/50 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-zinc-700 tracking-wider uppercase">Sistemas Activos</span>
                </div>

                <img 
                  src="/it_infrastructure_hero.png" 
                  alt="Infraestructura y Soporte TI de MFTS" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Láser de Escaneo de arriba a abajo */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                  <div className="w-full h-full absolute left-0 top-0 animate-laser-scan will-change-transform">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-tech-cyan to-transparent opacity-60 absolute top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
