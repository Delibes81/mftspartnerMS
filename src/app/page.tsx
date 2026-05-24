import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import ServicesSection from "@/components/ServicesSection";
import InteractiveDiagnostic from "@/components/InteractiveDiagnostic";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PartnersMarquee />
        <ServicesSection />
        <InteractiveDiagnostic />
        <TestimonialsSection />

        {/* Final High-Impact CTA Banner */}
        <section className="py-20 bg-zinc-50 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative rounded-[2.5rem] bg-zinc-950 text-white p-8 md:p-16 overflow-hidden border border-zinc-800/80 shadow-2xl flex flex-col items-center text-center">
              {/* Glowing Background Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-tech-blue/20 blur-[120px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl flex flex-col items-center">
                <span className="text-xs font-bold text-tech-blue uppercase tracking-widest bg-tech-blue/10 px-4 py-1.5 rounded-full border border-tech-blue/20">
                  ¿Listo para Empezar?
                </span>
                
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Sólidos hoy. Listos para mañana.
                </h2>
                
                <p className="mt-4 text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                  Agenda una asesoría gratuita de 30 minutos y recibe un análisis inicial de tu red y estado de equipos sin costo alguno.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
                  <Link
                    href="/contacto"
                    className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <span>Agendar Asesoría</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  </Link>
                  
                  <Link
                    href="/servicios"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold transition-all duration-200 hover:bg-zinc-800 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Ver Todos los Servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
