"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import M365CompareTable from "@/components/M365CompareTable";
import { motion } from "framer-motion";
import {
  Cloud,
  ShieldCheck,
  Chats,
  CheckCircle,
  ArrowRight,
  WindowsLogo,
  Sparkle
} from "@phosphor-icons/react";
import Link from "next/link";

const plans = [
  {
    name: "M365 Business Basic",
    price: "Consúltanos",
    description: "Ideal para empresas que necesitan herramientas sencillas de trabajo remoto y correo corporativo seguro en la nube.",
    features: [
      "Versión web y móvil de Word, Excel, PowerPoint.",
      "Correo corporativo (Exchange) con buzón de 50 GB.",
      "Microsoft Teams para chat y videollamadas (hasta 300 participantes).",
      "1 TB de almacenamiento seguro en OneDrive por usuario.",
      "Soporte técnico MFTS de puesta en marcha."
    ],
    popular: false,
    accentColor: "border-zinc-200"
  },
  {
    name: "M365 Business Standard",
    price: "Consúltanos",
    description: "La solución completa con aplicaciones de Office instalables en PC/Mac y almacenamiento corporativo centralizado.",
    features: [
      "Todo lo incluido en Business Basic.",
      "Aplicaciones de Office instalables en hasta 5 PC o Mac por usuario.",
      "Herramientas adicionales: Publisher y Access (solo PC).",
      "SharePoint Online para intranet y portales de colaboración grupal.",
      "Soporte prioritario MFTS para resolución de fallas."
    ],
    popular: true,
    accentColor: "border-tech-blue shadow-[0_0_20px_rgba(0,102,204,0.15)]"
  },
  {
    name: "M365 Business Premium",
    price: "Consúltanos",
    description: "Máxima productividad con seguridad avanzada y control de dispositivos móviles para proteger información crítica.",
    features: [
      "Todo lo incluido en Business Standard.",
      "Seguridad avanzada con Microsoft Defender for Business.",
      "Microsoft Intune para administración segura de dispositivos (MDM).",
      "Azure Information Protection (protección de datos confidenciales).",
      "Soporte VIP MFTS con auditorías de seguridad periódicas."
    ],
    popular: false,
    accentColor: "border-purple-400"
  }
];

const cloudServices = [
  {
    icon: Chats,
    title: "Microsoft Teams",
    subtitle: "Colaboración sin límites",
    description: "Conecta a tus equipos de trabajo híbridos. Videollamadas HD, chats seguros, almacenamiento compartido y coautoría en tiempo real sobre documentos Office, todo desde una misma interfaz.",
  },
  {
    icon: Cloud,
    title: "SharePoint y OneDrive",
    subtitle: "Almacenamiento corporativo inteligente",
    description: "Crea sitios de intranet dinámicos e intuitivos para compartir archivos. Almacena documentos de manera segura y accede a ellos desde cualquier lugar, manteniendo el control de acceso en tus manos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Corporativa Cloud",
    subtitle: "Autenticación y protección de datos",
    description: "Configura políticas de MFA (Autenticación de Múltiples Factores), accesos condicionales y prevención de fuga de información (DLP) para que tus datos permanezcan blindados.",
  }
];

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-zinc-50/50">
        
        {/* Header Hero */}
        <section className="py-16 md:py-24 text-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <WindowsLogo size={14} weight="fill" className="text-tech-blue animate-pulse" />
                Microsoft Cloud Partner
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight max-w-3xl mx-auto leading-tight">
              Soluciones Cloud Oficiales de Microsoft 365
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Distribución, implementación y migración profesional de licenciamiento de Microsoft. Eleva la productividad y la colaboración segura en tu empresa.
            </p>
          </motion.div>
        </section>

        {/* M365 Ecosystem Overview (Split Screen layout with IA Image) */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Descriptive text */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <h2 className="text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                El ecosistema ideal para el trabajo híbrido moderno
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Microsoft 365 es mucho más que Word o Excel. Es una plataforma completa que unifica la productividad, el correo empresarial en la nube, el almacenamiento dinámico y la seguridad de identidad en un único centro integrado de software.
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Como partner oficial, en <strong>MFTS</strong> no solo te suministramos el licenciamiento adecuado al menor costo posible, sino que diseñamos un plan estructurado de migración, configuración inicial e inducción técnica para que tu inversión en la nube rinda frutos desde el primer día.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={18} weight="fill" className="text-tech-blue mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-700 font-semibold">Migraciones Cero Fricción</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={18} weight="fill" className="text-tech-blue mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-700 font-semibold">Soporte Local 24/7 en Español</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={18} weight="fill" className="text-tech-blue mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-700 font-semibold">Configuración de Seguridad Inicial</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={18} weight="fill" className="text-tech-blue mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-700 font-semibold">Optimización de Licencias</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: IA Image mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center items-center w-full"
            >
              <div className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] bg-white border border-zinc-200/50 p-4 shadow-premium group hover:shadow-premium-hover hover:border-zinc-300 transition-all duration-300 animate-tech-float">
                {/* Decorative border */}
                <div className="absolute -inset-4 rounded-[3rem] border border-dashed border-tech-blue/15 animate-[spin_180s_linear_infinite] pointer-events-none" />
                
                <div className="w-full h-full overflow-hidden rounded-[2rem] bg-zinc-50 relative">
                  <img 
                    src="/m365_cloud_ecosystem.png" 
                    alt="Ecosistema Microsoft 365 Cloud de MFTS" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Detailed Cloud Services Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <GlassCard key={idx} className="p-6 h-full flex flex-col justify-between" hoverEffect={true}>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-tech-blue-light flex items-center justify-center text-tech-blue border border-blue-100 flex-shrink-0">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase font-bold text-tech-blue/80 tracking-wider">
                        {srv.subtitle}
                      </span>
                      <h4 className="text-base font-bold text-zinc-950 leading-snug">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Pricing/Plans Grid */}
        <section className="bg-zinc-100/50 border-y border-zinc-200/40 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
                Planes Disponibles
              </h2>
              <h3 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
                Elige el plan ideal para tus colaboradores
              </h3>
              <p className="text-sm text-zinc-500">
                Selecciona la edición que mejor se adapte al tamaño, seguridad y rol de cada área operativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex"
                >
                  <GlassCard
                    className={`h-full w-full flex flex-col justify-between p-8 relative overflow-hidden ${plan.accentColor}`}
                    hoverEffect={true}
                  >
                    <div className="space-y-6">
                      <div className="space-y-1.5 text-left">
                        {plan.popular && (
                          <span className="bg-tech-blue/10 text-tech-blue border border-tech-blue/20 text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3 inline-block">
                            Recomendado
                          </span>
                        )}
                        <h4 className="text-lg font-bold text-zinc-950">{plan.name}</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed">{plan.description}</p>
                      </div>
                      
                      <div className="border-y border-zinc-200/50 py-3.5 flex items-baseline gap-1">
                        <span className="text-2xl font-black text-zinc-950 font-mono">{plan.price}</span>
                        <span className="text-xs text-zinc-500">/ usuario mes</span>
                      </div>

                      <ul className="space-y-3 text-left">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-600">
                            <CheckCircle size={16} weight="fill" className="text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/contacto?servicio=microsoft&plan=${plan.name}`}
                      className={`mt-8 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs transition-all duration-200 ${
                        plan.popular
                          ? "bg-tech-blue hover:bg-tech-blue-hover text-white shadow-md hover:scale-[1.02] active:scale-[0.98]"
                          : "bg-zinc-150 hover:bg-zinc-200 text-zinc-700"
                      }`}
                    >
                      <span>Cotizar Licenciamiento</span>
                      <ArrowRight size={14} />
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare Table component */}
        <M365CompareTable />

        {/* Cloud Migration Flow */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
              Nuestro Proceso
            </h2>
            <h3 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
              Migración fluida y segura en 3 pasos
            </h3>
            <p className="text-sm text-zinc-500">
              Nos encargamos de todo el ciclo técnico para que tu equipo de TI interno se enfoque en lo esencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines (Desktop) */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-zinc-200/50 hidden md:block -translate-y-10 z-0" />
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex"
            >
              <GlassCard className="p-6 relative flex flex-col justify-between h-full hover:border-zinc-300 transition-all" hoverEffect={false}>
                <div className="space-y-4 text-left">
                  <span className="text-4xl font-extrabold text-tech-blue/20 font-mono block">01</span>
                  <h4 className="text-base font-bold text-zinc-950">Planificación y Dimensionamiento</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Analizamos tu infraestructura de correo e identidad actual (cpanel, google, local), evaluamos las necesidades de almacenamiento y configuramos el tenant de Microsoft 365.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative z-10 flex"
            >
              <GlassCard className="p-6 relative flex flex-col justify-between h-full hover:border-zinc-300 transition-all" hoverEffect={false}>
                <div className="space-y-4 text-left">
                  <span className="text-4xl font-extrabold text-tech-blue/20 font-mono block">02</span>
                  <h4 className="text-base font-bold text-zinc-950">Migración Silenciosa (Zero-Downtime)</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Realizamos la sincronización de correos históricos, carpetas de archivos corporativos, calendarios y contactos en segundo plano. Tus colaboradores no pierden conexión ni información.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative z-10 flex"
            >
              <GlassCard className="p-6 relative flex flex-col justify-between h-full hover:border-zinc-300 transition-all" hoverEffect={false}>
                <div className="space-y-4 text-left">
                  <span className="text-4xl font-extrabold text-tech-blue/20 font-mono block">03</span>
                  <h4 className="text-base font-bold text-zinc-950">Activación y Acompañamiento</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Realizamos el cambio final de registros de dominio (MX/TXT), asistimos a los usuarios en la conexión de sus dispositivos e impartimos una capacitación introductoria de Teams y OneDrive.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
