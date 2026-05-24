"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserGear, 
  ShareNetwork, 
  ShieldCheck, 
  CheckCircle,
  Trophy,
  ArrowRight
} from "@phosphor-icons/react";

const specialtyTeams = [
  {
    id: "soporte",
    title: "Soporte Técnico y Mesa de Ayuda",
    icon: UserGear,
    description: "Ingenieros enfocados en resolver incidentes diarios de hardware, administración de servidores locales/nube y soporte técnico inmediato. Son tu primer punto de contacto.",
    certifications: [
      "Microsoft Certified: Modern Desktop Administrator",
      "CompTIA A+ / Network+ Certified",
      "ITIL v4 Foundation in IT Service Management",
      "VMware Certified Professional (VCP)"
    ],
    skills: ["Windows Server", "Linux OS", "Virtualización (Hyper-V / VMware)", "Diagnóstico de Hardware", "Mesa de Ayuda (Múltiples Niveles)"],
    color: "from-blue-500/10 to-cyan-500/5",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    id: "redes",
    title: "Ingeniería de Redes y Telecomunicaciones",
    icon: ShareNetwork,
    description: "Especialistas dedicados al diseño, cableado estructurado, empalme de fibra óptica y administración avanzada de routers, switches y firewalls corporativos.",
    certifications: [
      "Cisco CCNA / CCNP Routing & Switching",
      "Ubiquiti Enterprise Wireless Admin (UEWA)",
      "Fortinet Network Security Expert (NSE 4 / 5)",
      "Certificación de Cableado Estructurado Panduit / CommScope"
    ],
    skills: ["Routing & Switching Avanzado", "Fibra Óptica Monomodo/Multimodo", "VLANs & QOS", "Fortinet Firewalls", "Sistemas Inalámbricos UniFi"],
    color: "from-indigo-500/10 to-blue-500/5",
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    id: "seguridad",
    title: "Seguridad Electrónica e Infraestructura",
    icon: ShieldCheck,
    description: "Expertos en la instalación física e integración digital de videovigilancia IP, control de accesos biométrico y seguridad perimetral de instalaciones.",
    certifications: [
      "Hikvision Certified Professional (HCSA)",
      "Dahua Technology Certified Integrator",
      "Certificación en Sistemas Biométricos ZKTeco",
      "CompTIA Security+"
    ],
    skills: ["CCTV IP & Cámaras Térmicas", "Control de Acceso Biométrico / RFID", "Sistemas de Alarmas DSC / Bosch", "Almacenamiento NVR Redundante", "Instalaciones Industriales"],
    color: "from-rose-500/10 to-red-500/5",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50"
  }
];

export default function TeamSpecialties() {
  const [activeTab, setActiveTab] = useState(specialtyTeams[0].id);

  const active = specialtyTeams.find((team) => team.id === activeTab) || specialtyTeams[0];
  const ActiveIcon = active.icon;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-tech-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
            Nuestros Equipos
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Especialistas certificados en cada área
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            No creemos en soluciones generales. Dividimos nuestra fuerza técnica en equipos especializados para ofrecerte la máxima experiencia disponible.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Selector Buttons (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {specialtyTeams.map((team) => {
              const Icon = team.icon;
              const isActive = team.id === activeTab;
              
              return (
                <button
                  key={team.id}
                  onClick={() => setActiveTab(team.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-tech-blue/30 ${
                    isActive
                      ? "bg-zinc-50 border-zinc-900 text-zinc-900 shadow-sm"
                      : "bg-white/50 backdrop-blur-sm border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-800"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTeamIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-tech-blue"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-white text-tech-blue border border-zinc-200" 
                      : "bg-zinc-100 text-zinc-400"
                  }`}>
                    <Icon size={20} weight={isActive ? "duotone" : "regular"} />
                  </div>

                  <div className="flex-grow">
                    <span className={`block text-sm font-bold tracking-tight transition-colors duration-200 ${
                      isActive ? "text-zinc-900" : "text-zinc-700"
                    }`}>
                      {team.title.split(" y ")[0]}
                    </span>
                    <span className="block text-[10px] text-zinc-400 mt-0.5 uppercase tracking-wider font-semibold">
                      {team.certifications.length} Certificaciones clave
                    </span>
                  </div>
                  
                  <ArrowRight 
                    size={16} 
                    className={`transition-all duration-300 ${
                      isActive 
                        ? "text-tech-blue opacity-100 translate-x-0" 
                        : "text-zinc-300 opacity-0 -translate-x-2"
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Details Content (Right Column) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-zinc-50 border border-zinc-200/70 shadow-premium rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${active.color} rounded-bl-[100px] pointer-events-none`} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${active.bgColor} ${active.iconColor} flex items-center justify-center`}>
                      <ActiveIcon size={18} weight="duotone" />
                    </div>
                    <span className={`text-xs font-bold ${active.iconColor} uppercase tracking-wider`}>
                      Especialidad Técnica
                    </span>
                  </div>

                  {/* Title & description */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                      {active.title}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  {/* Certifications (Main visual trust point) */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-mono flex items-center gap-1.5">
                      <Trophy size={12} className="text-amber-500" />
                      <span>Certificaciones del Equipo</span>
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {active.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-normal">
                          <CheckCircle size={14} weight="fill" className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill Badges */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-mono">
                      Tecnologías y Competencias
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {active.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-bold text-zinc-600 bg-white border border-zinc-200 px-2.5 py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
