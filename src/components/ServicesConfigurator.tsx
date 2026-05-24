"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Desktop, 
  Buildings, 
  Check, 
  ArrowRight,
  Sparkle
} from "@phosphor-icons/react";
import Link from "next/link";

const availableServices = [
  { id: "soporte", name: "Soporte IT" },
  { id: "redes", name: "Redes y Cableado" },
  { id: "mantenimiento", name: "Mantenimiento TI" },
  { id: "seguridad", name: "Seguridad y CCTV" },
  { id: "impresion", name: "Renta de Impresoras" },
  { id: "microsoft", name: "Licencias Microsoft 365" },
];

export default function ServicesConfigurator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["soporte"]);
  const [computers, setComputers] = useState<number>(15);
  const [branches, setBranches] = useState<number>(1);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Compute recommendation report
  const report = useMemo(() => {
    let supportPackage = "Mesa de Ayuda Remota Básica";
    let networkingRecommendation = "Red LAN y Wi-Fi estándar";
    let licensesRecommendation = "Microsoft 365 Business Basic";
    let securityRecommendation = "Monitoreo CCTV IP Básico";
    let visitFrequency = "Visitas reactivas";

    if (computers >= 50) {
      supportPackage = "Póliza de Soporte TI Enterprise 24/7 (Ingeniero Dedicado opcional)";
      visitFrequency = "Soporte presencial semanal programado + Emergencias ilimitadas";
      licensesRecommendation = "Microsoft 365 Business Premium / Enterprise E3";
    } else if (computers >= 15) {
      supportPackage = "Póliza de Soporte TI Pro (Mesa de ayuda ilimitada + Sitio)";
      visitFrequency = "2 visitas de mantenimiento mensual + Emergencias";
      licensesRecommendation = "Microsoft 365 Business Standard (Desktop Apps)";
    }

    if (branches > 1) {
      networkingRecommendation = "Enlaces inalámbricos / VPN Sitio a Sitio con Fibra Óptica";
    } else if (computers >= 30) {
      networkingRecommendation = "Cableado estructurado Cat 6A y switches administrables Cisco/Ubiquiti";
    } else {
      networkingRecommendation = "Cableado estructurado Cat 6 e instalación de Access Points Wi-Fi";
    }

    if (computers >= 30 || branches > 1) {
      securityRecommendation = "Control de accesos biométrico y CCTV IP NVR con almacenamiento redundante";
    } else {
      securityRecommendation = "CCTV IP de 4 a 8 cámaras de alta definición y monitoreo móvil";
    }

    return {
      supportPackage,
      networkingRecommendation,
      licensesRecommendation,
      securityRecommendation,
      visitFrequency
    };
  }, [computers, branches]);

  // Construct mail/contact subject query parameters
  const contactQueryString = useMemo(() => {
    const servicesText = selectedServices.map((id) => availableServices.find((s) => s.id === id)?.name).join(", ");
    const text = `Hola, me interesa una cotización de TI. Servicios seleccionados: ${servicesText}. Equipos: ${computers}. Sucursales: ${branches}.`;
    return new URLSearchParams({
      subject: "Propuesta de TI Personalizada",
      message: text
    }).toString();
  }, [selectedServices, computers, branches]);

  return (
    <section className="py-20 bg-zinc-50 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-tech-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
            Configurador de Servicios
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Calcula el alcance de tu solución tecnológica
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            Selecciona las áreas de TI que requiere tu empresa y define el tamaño de tu infraestructura para generar una recomendación instantánea.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Inputs Section */}
          <div className="lg:col-span-6 bg-white border border-zinc-200/70 p-8 rounded-3xl shadow-premium flex flex-col justify-between gap-8">
            
            {/* Step 1: Select Services */}
            <div>
              <span className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Calculator size={14} className="text-tech-blue" />
                <span>Paso 1: ¿Qué servicios necesitas?</span>
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                {availableServices.map((svc) => {
                  const isChecked = selectedServices.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      onClick={() => toggleService(svc.id)}
                      className={`p-3.5 rounded-xl border text-sm font-semibold transition-all duration-200 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-tech-blue/30 ${
                        isChecked
                          ? "bg-tech-blue-light border-tech-blue text-tech-blue shadow-sm"
                          : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100"
                      }`}
                    >
                      <span>{svc.name}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        isChecked 
                          ? "bg-tech-blue border-tech-blue text-white" 
                          : "border-zinc-300 bg-white"
                      }`}>
                        {isChecked && <Check size={10} weight="bold" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Infrastructure Size */}
            <div className="space-y-6">
              <span className="block text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                <Desktop size={14} className="text-tech-blue" />
                <span>Paso 2: Tamaño de Infraestructura</span>
              </span>

              {/* Sliders */}
              <div className="space-y-5">
                {/* Computers Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold text-zinc-700">
                    <span>Computadoras y Servidores</span>
                    <span className="text-tech-blue bg-tech-blue-light px-2.5 py-0.5 rounded-full text-xs font-bold">
                      {computers >= 100 ? "100+" : computers} Equipos
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={computers}
                    onChange={(e) => setComputers(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-tech-blue"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>Mín: 5</span>
                    <span>Máx: 100+</span>
                  </div>
                </div>

                {/* Branches Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold text-zinc-700">
                    <span>Sucursales / Oficinas</span>
                    <span className="text-tech-blue bg-tech-blue-light px-2.5 py-0.5 rounded-full text-xs font-bold">
                      {branches >= 5 ? "5+" : branches} Oficinas
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={branches}
                    onChange={(e) => setBranches(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-tech-blue"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>1 Sucursal</span>
                    <span>5+ Sucursales</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Output / Report Section */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-white rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Backglow decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-tech-blue/20 rounded-bl-[100px] pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-tech-blue/20 flex items-center justify-center text-tech-blue">
                    <Sparkle size={16} weight="fill" />
                  </div>
                  <span className="text-xs font-bold text-tech-blue uppercase tracking-widest">
                    Alcance Recomendado
                  </span>
                </div>

                {/* Recommendations list */}
                <div className="space-y-5">
                  
                  {/* Support */}
                  {selectedServices.includes("soporte") && (
                    <div className="border-l-2 border-tech-blue pl-4 py-0.5">
                      <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Esquema de Soporte Técnico</span>
                      <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">
                        {report.supportPackage}
                      </span>
                      <span className="text-[11px] text-zinc-400 mt-1 block">
                        {report.visitFrequency}
                      </span>
                    </div>
                  )}

                  {/* Networking */}
                  {selectedServices.includes("redes") && (
                    <div className="border-l-2 border-cyan-500 pl-4 py-0.5">
                      <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Redes y Conectividad</span>
                      <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">
                        {report.networkingRecommendation}
                      </span>
                    </div>
                  )}

                  {/* Microsoft 365 */}
                  {selectedServices.includes("microsoft") && (
                    <div className="border-l-2 border-emerald-500 pl-4 py-0.5">
                      <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Licenciamiento Microsoft</span>
                      <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">
                        {report.licensesRecommendation}
                      </span>
                    </div>
                  )}

                  {/* Security */}
                  {selectedServices.includes("seguridad") && (
                    <div className="border-l-2 border-rose-500 pl-4 py-0.5">
                      <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Videovigilancia y Accesos</span>
                      <span className="text-sm font-semibold text-zinc-200 mt-0.5 block">
                        {report.securityRecommendation}
                      </span>
                    </div>
                  )}

                  {/* Empty state reminder if no core recommended services checked */}
                  {selectedServices.length === 0 && (
                    <div className="py-8 text-center text-zinc-500 text-sm">
                      Selecciona al menos un servicio del panel de la izquierda para ver el alcance recomendado.
                    </div>
                  )}

                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                    Cobertura Estimada
                  </span>
                  <span className="text-xs text-zinc-300 font-medium">
                    SLA garantizado por contrato
                  </span>
                </div>

                <Link
                  href={`/contacto?${contactQueryString}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-tech-blue hover:bg-tech-blue-hover text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Solicitar Propuesta Formal</span>
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
