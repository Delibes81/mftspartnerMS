"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CaretDown, 
  MapPin, 
  WhatsappLogo, 
  Clock, 
  CheckCircle,
  Question
} from "@phosphor-icons/react";
import GlassCard from "./GlassCard";

const faqs = [
  {
    question: "¿El diagnóstico inicial de nuestra red y equipos tiene algún costo?",
    answer: "No, realizamos una visita técnica de relevamiento y un diagnóstico de infraestructura TI 100% gratuito. Evaluamos el cableado, rendimiento de red, licencias y servidores para entregarte una propuesta de póliza sin compromiso."
  },
  {
    question: "¿Cuál es su área de cobertura para soporte en sitio y remoto?",
    answer: "Brindamos soporte presencial de emergencia y visitas programadas en toda la Región Metropolitana (Santiago, Chile). El soporte remoto, administración de servidores y licenciamiento cloud tiene cobertura a nivel nacional e internacional."
  },
  {
    question: "¿Qué tiempos de respuesta (SLA) garantizan ante fallas?",
    answer: "Nuestras pólizas de soporte cuentan con SLAs estrictos por contrato. En incidencias críticas (caída de servidor o red general), nuestro tiempo de respuesta inicial es menor a 15 minutos. Para incidencias estándar, respondemos en menos de 2 horas hábiles."
  },
  {
    question: "¿Soportan entornos mixtos (Windows, macOS, Linux)?",
    answer: "Sí. Contamos con ingenieros y técnicos altamente capacitados para administrar y dar soporte a estaciones de trabajo Windows y macOS, así como a servidores Windows Server y múltiples distribuciones de Linux corporativo."
  }
];

export default function ContactExtensions() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-zinc-50 relative overflow-hidden border-t border-zinc-200/40">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-tech-blue-light text-tech-blue flex items-center justify-center">
                  <Question size={18} weight="duotone" />
                </div>
                <span className="text-xs font-bold text-tech-blue uppercase tracking-widest">
                  Preguntas Frecuentes
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight mb-8">
                Resolvemos tus dudas de TI
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-zinc-200/60 rounded-2xl bg-white overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-zinc-50/50 transition-colors focus:outline-none"
                      >
                        <span className="text-sm font-bold text-zinc-800 leading-snug">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-zinc-400 flex-shrink-0"
                        >
                          <CaretDown size={18} weight="bold" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100/50 pt-3">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick WhatsApp contact banner */}
            <div className="mt-8">
              <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />
                <div className="flex flex-row items-center gap-4 text-left w-full sm:w-auto relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20">
                    <WhatsappLogo size={26} weight="fill" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-zinc-900 leading-tight">¿Prefieres chatear de inmediato?</h4>
                    <p className="text-sm text-zinc-600 mt-1">Conéctate directamente con nuestro coordinador técnico por WhatsApp.</p>
                  </div>
                </div>
                <div className="w-full sm:w-auto flex-shrink-0 relative z-10">
                  <a
                    href="https://wa.me/525589852173?text=Hola,%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20de%20TI%20con%20MFTS."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
                  >
                    <span>Chat en WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Map Mockup (Right Column) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-white border border-zinc-200/60 rounded-3xl p-5 sm:p-8 shadow-premium flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 rounded-full bg-tech-blue/5 blur-3xl pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
                    <MapPin size={18} weight="duotone" />
                  </div>
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">
                    Cobertura Geográfica
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-zinc-950 leading-snug">
                  Presencia en Terreno y Cloud Global
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Realizamos despliegues e instalaciones físicas de cableado, CCTV e infraestructura en toda la <strong>Región Metropolitana</strong> con personal técnico propio. El soporte remoto se extiende a nivel nacional e internacional.
                </p>
              </div>

              {/* Interactive CSS map graphic mockup */}
              <div className="h-44 my-6 bg-zinc-950 border border-zinc-800 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
                {/* Dot grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[size:10px_10px] opacity-40" />

                {/* Simulated radar pulses from Santiago Central node */}
                <div className="absolute w-28 h-28 rounded-full border border-tech-blue/20 animate-[ping_4s_infinite_linear] pointer-events-none" />
                <div className="absolute w-16 h-16 rounded-full border border-tech-blue/30 animate-[ping_3s_infinite_linear] pointer-events-none" />

                {/* Central Node */}
                <div className="relative flex flex-col items-center z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-tech-blue border-2 border-white shadow-[0_0_12px_rgba(0,102,204,0.8)] animate-pulse" />
                  <span className="text-[8px] font-bold text-white uppercase tracking-wider mt-1.5 font-mono bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800 shadow">
                    Santiago (Sede RM)
                  </span>
                </div>

                {/* Connecting client nodes */}
                <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <span className="text-[6px] text-zinc-500 font-mono mt-0.5 uppercase">Norte RM</span>
                </div>
                <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <span className="text-[6px] text-zinc-500 font-mono mt-0.5 uppercase">Sur RM</span>
                </div>
                <div className="absolute top-1/3 right-1/3 flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <span className="text-[6px] text-zinc-500 font-mono mt-0.5 uppercase">Oriente RM</span>
                </div>

                {/* Map scanner bar line */}
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tech-blue/35 to-transparent top-0 animate-[bounce_6s_infinite_linear] pointer-events-none" />
              </div>

              {/* SLA Metrics */}
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-4 text-[10px] text-zinc-400 font-medium border-t border-zinc-100 pt-3 w-full">
                <span className="flex items-center gap-1 shrink-0">
                  <Clock size={12} className="text-zinc-400 shrink-0" />
                  Urgencias: &lt; 15 min SLA
                </span>
                <span className="flex items-center gap-1 shrink-0">
                  <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                  Soporte Remoto: 24/7/365
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
