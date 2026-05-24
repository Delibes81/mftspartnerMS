"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import GlassCard from "@/components/GlassCard";
import ContactExtensions from "@/components/ContactExtensions";
import { motion } from "framer-motion";
import {
  Phone,
  Envelope,
  MapPin,
  Clock,
  CircleNotch,
  ShieldCheck
} from "@phosphor-icons/react";

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-zinc-50/50">
        
        {/* Intro Hero Header */}
        <section className="py-12 md:py-16 text-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
              Contacto y Consultoría
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              ¿Listo para dar el siguiente paso?
            </h1>
            <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Comunícate con nuestros especialistas. Estamos listos para diseñar una solución a la medida de tu infraestructura TI.
            </p>
          </motion.div>
        </section>

        {/* Form and Info Section */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Info Cards Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-6"
            >
              <h2 className="text-xl font-extrabold text-zinc-950 tracking-tight pb-3 border-b border-zinc-200/60">
                Información de Contacto
              </h2>

              {/* Teléfono de Soporte */}
              <GlassCard className="p-5 flex gap-4" hoverEffect={false}>
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-150 flex items-center justify-center text-tech-blue flex-shrink-0">
                  <Phone size={20} weight="fill" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
                    Teléfono & Soporte
                  </h4>
                  <p className="text-sm font-semibold text-zinc-800">
                    +56 9 3200 4567
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    Línea directa para atención comercial y reportes técnicos urgentes.
                  </p>
                </div>
              </GlassCard>

              {/* Correo Electrónico */}
              <GlassCard className="p-5 flex gap-4" hoverEffect={false}>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <Envelope size={20} weight="fill" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
                    Ventas y Cotizaciones
                  </h4>
                  <p className="text-sm font-semibold text-zinc-800">
                    contacto@mfts.cl
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    Escríbenos y un ejecutivo comercial te responderá con una propuesta.
                  </p>
                </div>
              </GlassCard>

              {/* Cobertura */}
              <GlassCard className="p-5 flex gap-4" hoverEffect={false}>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <MapPin size={20} weight="fill" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
                    Ubicación y Cobertura
                  </h4>
                  <p className="text-sm font-semibold text-zinc-800">
                    Santiago, Chile
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    Soporte presencial en toda la RM y soporte remoto a nivel nacional/global.
                  </p>
                </div>
              </GlassCard>

              {/* Horarios */}
              <GlassCard className="p-5 flex gap-4" hoverEffect={false}>
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-150 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Clock size={20} weight="fill" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
                    Horario de Atención
                  </h4>
                  <p className="text-sm font-semibold text-zinc-800">
                    Lunes a Viernes: 9:00 - 18:30
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    Atención comercial. Clientes con contrato de soporte cuentan con SLA 24/7.
                  </p>
                </div>
              </GlassCard>

              {/* SLA badge */}
              <div className="p-5 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-2xl border border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <ShieldCheck size={20} />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider">
                    Compromiso MFTS
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed text-left">
                  Garantizamos una respuesta inicial a tu correo o formulario en menos de 2 horas hábiles. Tu tranquilidad tecnológica es nuestro objetivo.
                </p>
              </div>

            </motion.div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="w-full h-[600px] bg-white/80 border border-zinc-200/50 rounded-3xl p-8 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <CircleNotch size={40} className="animate-spin text-tech-blue mx-auto" />
                      <p className="text-sm font-mono text-zinc-500">Cargando formulario de contacto...</p>
                    </div>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </section>

        {/* FAQs, WhatsApp Banner & Coverage Map */}
        <ContactExtensions />

      </main>
      <Footer />
    </>
  );
}
