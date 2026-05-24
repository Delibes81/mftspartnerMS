"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import TeamSpecialties from "@/components/TeamSpecialties";
import CompanyTimeline from "@/components/CompanyTimeline";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Handshake,
  ShieldCheck,
  Lightbulb,
  Trophy,
  Check
} from "@phosphor-icons/react";
import Link from "next/link";

const values = [
  {
    icon: ShieldCheck,
    title: "Confianza y Seguridad",
    description: "Garantizamos la confidencialidad de la información y la solidez de cada solución tecnológica que implementamos.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Lightbulb,
    title: "Innovación Continua",
    description: "Nos mantenemos a la vanguardia de las tecnologías de infraestructura TI para ofrecer siempre soluciones de última generación.",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: Handshake,
    title: "Compromiso y Calidad",
    description: "Tu estabilidad operativa es nuestra prioridad. Nos comprometemos a entregar la máxima calidad técnica y de servicio.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Trophy,
    title: "Excelencia Profesional",
    description: "Contamos con ingenieros y técnicos certificados para asegurar diagnósticos precisos y despliegues impecables.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  }
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-zinc-50/50">

        {/* Quiénes Somos Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
                Nuestra Identidad
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                Mat Fleet Tech Services (MFTS)
              </h1>

              <p className="text-lg text-zinc-600 leading-relaxed font-light">
                Somos una compañía líder de servicios de tecnología integrales, comprometida con la modernización, estabilidad y seguridad de la infraestructura tecnológica de nuestros clientes.
              </p>

              <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
                <p>
                  Fundada con la convicción de que la tecnología debe ser un catalizador y no un obstáculo, en MFTS nos especializamos en brindar soporte técnico profesional, diseño de redes corporativas, consultoría en la nube y optimización de flujos de trabajo empresariales.
                </p>
                <p>
                  A lo largo de nuestra trayectoria, nos hemos consolidado como el socio tecnológico estratégico preferido para pequeñas, medianas y grandes empresas que buscan un aliado confiable capaz de responder a sus necesidades más críticas de TI con agilidad, honestidad y la más alta calidad técnica.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-tech-blue hover:bg-tech-blue-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
                >
                  Habla con un Especialista
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-700 text-sm font-semibold hover:border-zinc-300 transition-colors"
                >
                  Ver Servicios
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Column - Redesigned Interactive Stats Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center w-full"
            >
              <div className="relative w-full max-w-md aspect-square rounded-[2rem] bg-white border border-zinc-200/70 p-8 flex flex-col justify-between shadow-premium overflow-hidden group hover:shadow-premium-hover hover:border-zinc-300 transition-all duration-300 animate-tech-float">
                <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 rounded-full bg-tech-blue/5 blur-3xl group-hover:scale-110 transition-transform duration-500" />

                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-tech-blue-light text-tech-blue flex items-center justify-center shadow-sm border border-zinc-100">
                    <Users size={28} weight="duotone" />
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 uppercase tracking-wider font-mono">
                    Socio TI Estratégico
                  </span>
                </div>

                <div className="space-y-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-mono">
                    Estadísticas Clave
                  </span>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                    <div>
                      <h4 className="text-3xl font-black text-zinc-950 font-mono leading-none">99.9%</h4>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1.5">Uptime de Redes</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-zinc-950 font-mono leading-none">&lt; 15m</h4>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1.5">Respuesta SLA</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-zinc-950 font-mono leading-none">100%</h4>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1.5">Satisfechos</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-zinc-950 font-mono leading-none">10+</h4>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1.5">Años de Experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Misión y Visión Grid */}
        <section className="bg-zinc-100/50 border-y border-zinc-200/40 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

              {/* Misión */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="p-8 md:p-10 h-full flex flex-col justify-between border-blue-500/10 shadow-premium hover:border-blue-500/30">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-tech-blue border border-blue-100">
                      <Target size={24} weight="duotone" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                      Nuestra Misión
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Proveer soluciones integrales de infraestructura de TI y soporte técnico de la más alta calidad, que impulsen la transformación digital y estabilidad operativa de nuestros clientes, convirtiéndonos en un pilar fundamental para el logro de sus objetivos corporativos.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-zinc-150/80 mt-6 flex items-center gap-2 text-xs text-tech-blue font-semibold uppercase tracking-wider">
                    <span>Enfoque en Resultados</span>
                    <Check size={14} />
                  </div>
                </GlassCard>
              </motion.div>

              {/* Visión */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="p-8 md:p-10 h-full flex flex-col justify-between border-indigo-500/10 shadow-premium hover:border-indigo-500/30">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 border border-indigo-100">
                      <Eye size={24} weight="duotone" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                      Nuestra Visión
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Consolidarnos como el referente de consultoría, servicios y licenciamiento de TI a nivel nacional, reconocidos por nuestra excelencia en servicio, innovación constante en soluciones en la nube e integridad en todas nuestras relaciones de negocio.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-zinc-150/80 mt-6 flex items-center gap-2 text-xs text-indigo-500 font-semibold uppercase tracking-wider">
                    <span>Liderazgo Tecnológico</span>
                    <Check size={14} />
                  </div>
                </GlassCard>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Team Specialties Section (Nuevo) */}
        <TeamSpecialties />

        {/* Company Trajectory Timeline (Nuevo) */}
        <CompanyTimeline />

        {/* Nuestros Valores */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
              Nuestros Pilares
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Los valores que rigen nuestro actuar
            </h3>
            <p className="text-base text-zinc-500">
              Cada miembro de nuestro equipo actúa con base en principios sólidos para garantizar el éxito y tranquilidad de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 h-full flex flex-col justify-between hover:border-zinc-300 transition-all duration-300">
                    <div className="space-y-4">
                      <div className={`w-10 h-10 rounded-lg ${val.bgColor} flex items-center justify-center ${val.color} border border-zinc-150`}>
                        <Icon size={20} weight="fill" />
                      </div>
                      <h4 className="text-base font-bold text-zinc-950">
                        {val.title}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
