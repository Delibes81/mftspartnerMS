"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  WifiHigh, 
  UserGear, 
  CloudArrowUp, 
  ShieldCheck,
  ArrowRight,
  Sparkle
} from "@phosphor-icons/react";
import Link from "next/link";

const options = [
  {
    id: "redes",
    title: "Redes Lentas o Inestables",
    icon: WifiHigh,
    problem: "Pérdidas de conexión frecuentes, lentitud en llamadas de Teams/Zoom y transferencia de archivos demorada en la oficina.",
    diagnosis: "Suele deberse a un cableado de red de categoría obsoleta (Cat 5), switches no administrados saturados o mala distribución de Access Points Wi-Fi.",
    solution: "Realizamos una auditoría de red, instalamos cableado estructurado certificado (Cat 6/6A) y configuramos routers/switches inteligentes con priorización de tráfico corporativo.",
    ctaTopic: "Redes y Conectividad",
  },
  {
    id: "soporte",
    title: "Falta de Soporte Técnico Directo",
    icon: UserGear,
    problem: "Tus colaboradores pierden horas de trabajo intentando resolver problemas con impresoras, software lento, virus o bloqueos de sistemas.",
    diagnosis: "La falta de un equipo de soporte proactivo genera fallas repetitivas e inactividad operativa que afecta la facturación y la moral de la empresa.",
    solution: "Ofrecemos pólizas mensuales con soporte técnico presencial e inmediato en tu oficina y soporte remoto ilimitado. Tendrás ingenieros certificados a un clic de distancia.",
    ctaTopic: "Soporte TI",
  },
  {
    id: "microsoft",
    title: "Licenciamiento y Cloud Desorganizado",
    icon: CloudArrowUp,
    problem: "Cuentas de correo desprotegidas en servidores obsoletos, uso de software pirata por error y archivos compartidos de forma insegura.",
    diagnosis: "Exposición a ransomware y multas de auditoría. Pérdida de productividad por no usar herramientas colaborativas modernas en la nube.",
    solution: "Como Microsoft Official Partner, migramos tu empresa a Microsoft 365 (Word, Excel, Outlook, Teams, SharePoint). Centralizamos la seguridad y eliminamos software sin licencia.",
    ctaTopic: "Microsoft 365 y Nube",
  },
  {
    id: "seguridad",
    title: "Vulnerabilidad en Instalaciones",
    icon: ShieldCheck,
    problem: "Preocupación por la seguridad física de los servidores, mercancía o personal de la oficina sin un registro claro de quién entra o sale.",
    diagnosis: "Ausencia de cámaras IP de alta resolución o sistemas de control de acceso fiables que permitan monitorear o restringir áreas críticas en tiempo real.",
    solution: "Instalamos cámaras de videovigilancia IP (CCTV) con analíticas de movimiento y acceso móvil, junto con biométricos para control de puertas y registro de personal.",
    ctaTopic: "Seguridad y Accesos",
  },
];

export default function InteractiveDiagnostic() {
  const [selectedId, setSelectedId] = useState(options[0].id);
  
  const current = options.find((opt) => opt.id === selectedId) || options[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-zinc-50 relative">
      {/* Visual background glows */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-tech-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-blue-300/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
            Diagnóstico Rápido de TI
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            ¿Qué problema de tecnología experimenta tu negocio hoy?
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            Selecciona la situación que mejor describa tu dolor de cabeza de TI para ver nuestra recomendación técnica y una cotización aproximada.
          </p>
        </div>

        {/* Diagnostic Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = opt.id === selectedId;
              
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedId(opt.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-3 sm:gap-4 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-tech-blue/30 ${
                    isSelected
                      ? "bg-white border-tech-blue shadow-md text-zinc-900"
                      : "bg-white/60 backdrop-blur-sm border-zinc-200/60 text-zinc-500 hover:border-zinc-300 hover:bg-white hover:text-zinc-800"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSelectorBorder"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-tech-blue"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 shrink-0 ${
                    isSelected 
                      ? "bg-tech-blue-light text-tech-blue" 
                      : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200/80 group-hover:text-zinc-600"
                  }`}>
                    <Icon size={20} className="sm:w-[22px] sm:h-[22px]" weight={isSelected ? "duotone" : "regular"} />
                  </div>

                  <div className="flex-grow min-w-0">
                    <span className={`block text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 truncate ${
                      isSelected ? "text-zinc-900" : "text-zinc-700"
                    }`}>
                      {opt.title}
                    </span>
                    <span className="block text-[10px] sm:text-xs text-zinc-400 mt-0.5 line-clamp-1">
                      {opt.problem}
                    </span>
                  </div>
                  
                  <ArrowRight 
                    size={16} 
                    className={`transition-all duration-300 shrink-0 ${
                      isSelected 
                        ? "text-tech-blue opacity-100 translate-x-0" 
                        : "text-zinc-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-white border border-zinc-200/70 shadow-premium rounded-3xl p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Background gradient decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-tech-blue-light/30 rounded-bl-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-tech-blue-light flex items-center justify-center text-tech-blue">
                      <CurrentIcon size={18} weight="duotone" />
                    </div>
                    <span className="text-xs font-bold text-tech-blue uppercase tracking-wider">
                      Análisis Recomendado
                    </span>
                  </div>

                  {/* Problem & Diagnosis */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-zinc-400 tracking-wider">El Síntoma</h4>
                    <p className="mt-1 text-base text-zinc-800 font-medium leading-relaxed">
                      "{current.problem}"
                    </p>
                  </div>

                  <div className="border-l-2 border-amber-400 pl-4 py-1 bg-amber-50/50 pr-4 rounded-r-xl">
                    <h4 className="text-xs font-bold uppercase text-amber-800 tracking-wider flex items-center gap-1">
                      <span>Causa Común / Diagnóstico</span>
                    </h4>
                    <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                      {current.diagnosis}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="border-l-2 border-tech-blue pl-4 py-1 bg-tech-blue-light/30 pr-4 rounded-r-xl">
                    <h4 className="text-xs font-bold uppercase text-tech-blue tracking-wider flex items-center gap-1.5">
                      <Sparkle size={14} weight="fill" />
                      <span>Nuestra Solución Solida</span>
                    </h4>
                    <p className="mt-1 text-sm text-zinc-700 leading-relaxed font-medium">
                      {current.solution}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    Tipo de Servicio
                  </span>
                  <span className="text-sm font-bold text-zinc-700">
                    {current.ctaTopic}
                  </span>
                </div>

                <Link
                  href={{
                    pathname: "/contacto",
                    query: { subject: current.ctaTopic }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-tech-blue hover:bg-tech-blue-hover text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  <span>Solicitar Asesoría para esto</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
