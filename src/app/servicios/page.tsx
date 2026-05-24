"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import ServiceVisuals from "@/components/ServiceVisuals";
import ServicesConfigurator from "@/components/ServicesConfigurator";
import { motion } from "framer-motion";
import {
  Headset,
  ShareNetwork,
  Wrench,
  Fingerprint,
  Printer,
  WindowsLogo,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Clock,
  Sparkle
} from "@phosphor-icons/react";
import Link from "next/link";

const services = [
  {
    id: "soporte",
    title: "Soporte IT Profesional",
    subtitle: "Soporte Remoto y En Sitio 24/7",
    description: "Brindamos asistencia técnica avanzada de nivel 1, 2 y 3 para asegurar la continuidad operativa de tu negocio. Minimizamos los tiempos de inactividad mediante esquemas preventivos de mesa de ayuda y respuesta rápida en terreno.",
    icon: Headset,
    color: "from-blue-500/20 to-cyan-500/5",
    accentColor: "text-blue-500",
    features: [
      "Mesa de ayuda remota ilimitada con SLAs garantizados.",
      "Visitas técnicas presenciales de emergencia.",
      "Administración y soporte de servidores locales y virtuales.",
      "Instalación, configuración y soporte de sistemas operativos y software.",
      "Auditorías e inventariado tecnológico inicial."
    ]
  },
  {
    id: "redes",
    title: "Redes y Cableado Estructurado",
    subtitle: "Conectividad Corporativa y Fibra Óptica",
    description: "Diseñamos y desplegamos infraestructura de red robusta, escalable y veloz. Garantizamos la correcta transmisión de voz, datos y video bajo los estándares y certificaciones internacionales más exigentes.",
    icon: ShareNetwork,
    color: "from-indigo-500/20 to-blue-500/5",
    accentColor: "text-indigo-500",
    features: [
      "Cableado estructurado en categorías 6, 6A y fibra óptica.",
      "Ordenamiento, peinado e identificación de racks de telecomunicaciones.",
      "Instalación y configuración de switches, routers y Access Points (Wi-Fi corporativo).",
      "Segmentación de redes (VLANs) para optimizar la seguridad y velocidad.",
      "Enlaces inalámbricos punto a punto de larga distancia."
    ]
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento TI",
    subtitle: "Optimización de Infraestructura de Hardware",
    description: "Protegemos tu inversión tecnológica y prolongamos la vida útil de tus estaciones de trabajo y servidores. Evitamos fallas críticas de hardware antes de que ocurran mediante planes estructurados de mantenimiento.",
    icon: Wrench,
    color: "from-amber-500/20 to-yellow-500/5",
    accentColor: "text-amber-500",
    features: [
      "Mantenimiento físico preventivo interno y externo de equipos.",
      "Limpieza profunda de componentes, disipadores y cambio de pasta térmica.",
      "Optimización de software, remoción de malware y desfragmentación de discos.",
      "Diagnóstico preventivo del estado de almacenamiento (HDD/SSD).",
      "Actualizaciones de hardware para mejorar el desempeño."
    ]
  },
  {
    id: "seguridad",
    title: "Seguridad y Control de Accesos",
    subtitle: "Videovigilancia IP y Sistemas Biométricos",
    description: "Implementamos sistemas de seguridad avanzados para la protección física y digital de tus instalaciones y activos corporativos. Controla el acceso y monitorea en tiempo real desde cualquier dispositivo.",
    icon: Fingerprint,
    color: "from-rose-500/20 to-red-500/5",
    accentColor: "text-rose-500",
    features: [
      "Instalación de cámaras de seguridad CCTV IP de alta definición y visión nocturna.",
      "Configuración de servidores NVR con almacenamiento redundante.",
      "Sistemas de control de acceso por huella dactilar, reconocimiento facial y tarjetas RFID.",
      "Integración de alarmas contra intrusiones e incendios.",
      "Monitoreo remoto seguro desde smartphones y computadores."
    ]
  },
  {
    id: "impresion",
    title: "Sistemas de Impresión Corporativa",
    subtitle: "Renta de Multifuncionales de Alto Rendimiento",
    description: "Reduce costos operativos con nuestro outsourcing de impresión. Te equipamos con dispositivos modernos e inteligentes de alta productividad, incluyendo todo el soporte, consumibles y mantenimiento.",
    icon: Printer,
    color: "from-purple-500/20 to-pink-500/5",
    accentColor: "text-purple-500",
    features: [
      "Renta de equipos multifuncionales láser a color y monocromo.",
      "Suministro oportuno de tóners, refacciones y repuestos originales.",
      "Soporte técnico inmediato en sitio en caso de averías.",
      "Software de control y auditoría de copias e impresiones por usuario.",
      "Planes flexibles adaptados al volumen real de impresión mensual."
    ]
  },
  {
    id: "microsoft",
    title: "Licenciamiento Microsoft 365",
    subtitle: "Partner Oficial de Soluciones en la Nube",
    description: "Lleva la productividad de tu organización al siguiente nivel con las herramientas de la suite en la nube líder del mercado. Administramos, licenciamos y migramos la infraestructura de tu organización con soporte prioritario.",
    icon: WindowsLogo,
    color: "from-emerald-500/20 to-teal-500/5",
    accentColor: "text-emerald-500",
    features: [
      "Venta e implementación de licencias Microsoft 365 Business y Enterprise.",
      "Migración fluida y segura de correo corporativo a Exchange Online.",
      "Configuración avanzada de Microsoft Teams, SharePoint y OneDrive.",
      "Políticas de seguridad en la nube (MFA, prevención de pérdida de datos).",
      "Soporte técnico cloud prioritario y administración de consola centralizada."
    ]
  }
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-zinc-50/50">
        
        {/* Hero Section */}
        <section className="pt-16 pb-8 text-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
              Portafolio Corporativo
            </h1>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight max-w-3xl mx-auto leading-tight">
              Soluciones TI robustas para{" "}
              <span className="bg-gradient-to-r from-tech-blue to-blue-500 bg-clip-text text-transparent">
                impulsar tu organización
              </span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Diseñamos e implementamos infraestructura tecnológica premium con estándares de clase mundial. Explora nuestros servicios especializados.
            </p>
          </motion.div>

          {/* Core Service Metrics Highlight Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-4"
          >
            <div className="p-5 rounded-2xl bg-white border border-zinc-200/60 shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-tech-blue">
                <Clock size={24} weight="duotone" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-extrabold text-zinc-900 leading-none">&lt; 15 min</span>
                <span className="text-xs text-zinc-500 font-medium mt-1 block">SLA de Respuesta</span>
              </div>
            </div>
            
            <div className="p-5 rounded-2xl bg-white border border-zinc-200/60 shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                <ShieldCheck size={24} weight="duotone" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-extrabold text-zinc-900 leading-none">24/7/365</span>
                <span className="text-xs text-zinc-500 font-medium mt-1 block">Soporte y Monitoreo</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-zinc-200/60 shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                <Sparkle size={24} weight="duotone" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-extrabold text-zinc-900 leading-none">99.9% Uptime</span>
                <span className="text-xs text-zinc-500 font-medium mt-1 block">Redes y Sistemas</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sticky Quick Navigation Anchor Bar */}
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-zinc-200/40 shadow-sm py-3.5 mb-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200/60 hover:border-tech-blue hover:text-tech-blue text-xs font-semibold text-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
                >
                  <Icon size={14} className="text-zinc-400 group-hover:text-tech-blue" />
                  <span>{service.title.split(" ")[0]}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Detailed Services Section */}
        <section className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-36"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Visual Mockup Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="w-full aspect-square rounded-[2rem] bg-white border border-zinc-200/70 p-8 flex flex-col justify-between shadow-premium relative overflow-hidden group hover:shadow-premium-hover hover:border-zinc-300 transition-all duration-300">
                      {/* Interactive visual representation */}
                      <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${service.color} blur-2xl group-hover:scale-125 transition-transform duration-500`} />
                      
                      <ServiceVisuals serviceId={service.id} />
                    </div>
                  </motion.div>

                  {/* Right Column: Descriptions & Details */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="space-y-4">
                      <span className="text-xs font-bold text-tech-blue uppercase tracking-widest bg-tech-blue-light/50 px-3.5 py-1.5 rounded-full inline-block">
                        {service.subtitle}
                      </span>
                      <h4 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
                        {service.title}
                      </h4>
                      <p className="text-base text-zinc-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                        ¿Qué incluye este servicio?
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-sm text-zinc-600 leading-normal">
                            <CheckCircle size={18} weight="fill" className="text-tech-blue flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link
                        href={`/contacto?servicio=${service.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-tech-blue hover:bg-tech-blue-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Cotizar este Servicio</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/nosotros"
                        className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-zinc-150 hover:bg-zinc-200 text-zinc-700 text-sm font-semibold transition-all duration-200"
                      >
                        Sobre Nosotros
                      </Link>
                    </div>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </section>

        {/* Interactive Services Configurator Calculator Section */}
        <ServicesConfigurator />

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <GlassCard className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white border-zinc-800 p-8 md:p-14 text-center rounded-3xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center gap-6">
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 rounded-full bg-tech-blue/20 blur-3xl" />
            
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 mb-2">
              <Cpu size={28} className="text-cyan-400" />
            </div>

            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                ¿Necesitas un plan a la medida de tu infraestructura?
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Nuestros especialistas pueden realizar un diagnóstico completo del estado de tu infraestructura TI sin costo para diseñar una solución óptima y de alta seguridad.
              </p>
            </div>

            <Link
              href="/contacto"
              className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-tech-blue/20 hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <span>Agendar Consultoría Sin Costo</span>
                <ArrowRight size={16} />
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            </Link>
          </GlassCard>
        </section>
        
      </main>
      <Footer />
    </>
  );
}
