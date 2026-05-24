"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Warning, 
  Cpu as CpuIcon, 
  Globe, 
  Cloud, 
  ShieldCheck, 
  HardDrives,
  User,
  DotsThreeOutline
} from "@phosphor-icons/react";

interface ServiceVisualsProps {
  serviceId: string;
}

export default function ServiceVisuals({ serviceId }: ServiceVisualsProps) {
  const [time, setTime] = useState("");

  // Update clock for CCTV security feed simulation
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleDateString() + " " + now.toLocaleTimeString()
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  switch (serviceId) {
    case "soporte":
      return (
        <div className="w-full h-full flex flex-col justify-between text-zinc-800 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Centro de Soporte TI</span>
            </div>
            <span className="text-[10px] font-mono bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200">
              SLA: 15 MIN
            </span>
          </div>

          {/* Ticket Logs */}
          <div className="flex-grow my-4 space-y-2.5 flex flex-col justify-center">
            {/* Ticket 1 */}
            <div className="p-3 bg-white/90 rounded-xl border border-zinc-200/50 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div>
                  <span className="block text-[11px] font-bold text-zinc-800 leading-tight">Configuración VPN Corporativa</span>
                  <span className="block text-[9px] text-zinc-400 mt-0.5">ID: #4829 • Remoto</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 uppercase">
                Resuelto
              </span>
            </div>

            {/* Ticket 2 */}
            <div className="p-3 bg-white/90 rounded-xl border border-zinc-200/50 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <div>
                  <span className="block text-[11px] font-bold text-zinc-800 leading-tight">Migración de Servidor de Archivos</span>
                  <span className="block text-[9px] text-zinc-400 mt-0.5">ID: #4830 • Presencial</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 uppercase animate-pulse">
                En Proceso
              </span>
            </div>
          </div>

          {/* Technical Team Avatars */}
          <div className="border-t border-zinc-100 pt-3 flex items-center justify-between">
            <span className="text-[10px] font-medium text-zinc-400">Ingenieros Disponibles:</span>
            <div className="flex -space-x-2">
              {["Carlos", "Ana", "Luis"].map((name, i) => (
                <div 
                  key={i} 
                  className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm ${
                    i === 0 ? "bg-blue-500" : i === 1 ? "bg-purple-500" : "bg-zinc-800"
                  }`}
                  title={name}
                >
                  {name[0]}
                </div>
              ))}
              <div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[9px] text-zinc-600 font-bold">
                +4
              </div>
            </div>
          </div>
        </div>
      );

    case "redes":
      return (
        <div className="w-full h-full flex flex-col justify-between text-zinc-800 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Topología de Red Activa</span>
            <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              10 GBPS LINK
            </span>
          </div>

          {/* Interactive Topology Graph */}
          <div className="flex-grow relative h-36 my-2 bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
            
            {/* Network Nodes */}
            <div className="relative w-4/5 h-4/5 flex justify-between items-center z-10">
              
              {/* WAN/Cloud Router Node */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-xl bg-blue-600 border border-blue-400 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  <Globe size={16} />
                </div>
                <span className="text-[8px] font-mono text-zinc-400">WAN</span>
              </div>

              {/* Central Switch Node */}
              <div className="flex flex-col items-center gap-1 relative">
                {/* Connecting Lines with Pulsing Glow */}
                <div className="absolute right-8 top-4 w-12 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="absolute left-8 top-4 w-12 h-[2px] bg-gradient-to-l from-blue-500 to-indigo-500" />
                
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white shadow-lg animate-pulse">
                  <CpuIcon size={20} className="text-indigo-400" />
                </div>
                <span className="text-[8px] font-mono text-zinc-400">CORE</span>
              </div>

              {/* Security Firewall / Server Node */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 border border-emerald-400 flex items-center justify-center text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-[8px] font-mono text-zinc-400">LAN</span>
              </div>

            </div>

            {/* Simulated Data Packets flowing */}
            <motion.div 
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              animate={{
                x: [-100, 100],
                y: [-5, 5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Footer Info */}
          <div className="text-[9px] font-mono text-zinc-400 flex justify-between">
            <span>Switches: CISCO POE+</span>
            <span>Uptime: 99.99%</span>
          </div>
        </div>
      );

    case "mantenimiento":
      return (
        <div className="w-full h-full flex flex-col justify-between text-zinc-800 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Estado del Servidor</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase">
              Optimizado
            </span>
          </div>

          {/* Diagnostic Meters */}
          <div className="flex-grow my-4 grid grid-cols-3 gap-2.5 items-center justify-center text-center">
            
            {/* CPU Temp */}
            <div className="p-2.5 rounded-xl bg-white/95 border border-zinc-200/50 shadow-sm flex flex-col items-center">
              <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-wide">Temp CPU</span>
              <span className="text-lg font-bold text-emerald-600 mt-1">42°C</span>
              <div className="w-full h-1 bg-zinc-100 rounded-full mt-2 overflow-hidden">
                <div className="w-[42%] h-full bg-emerald-500 rounded-full" />
              </div>
            </div>

            {/* RAM Load */}
            <div className="p-2.5 rounded-xl bg-white/95 border border-zinc-200/50 shadow-sm flex flex-col items-center">
              <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-wide">Carga RAM</span>
              <span className="text-lg font-bold text-blue-600 mt-1">28%</span>
              <div className="w-full h-1 bg-zinc-100 rounded-full mt-2 overflow-hidden">
                <div className="w-[28%] h-full bg-blue-500 rounded-full" />
              </div>
            </div>

            {/* Storage Health */}
            <div className="p-2.5 rounded-xl bg-white/95 border border-zinc-200/50 shadow-sm flex flex-col items-center">
              <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-wide">Salud SSD</span>
              <span className="text-lg font-bold text-indigo-600 mt-1">99%</span>
              <div className="w-full h-1 bg-zinc-100 rounded-full mt-2 overflow-hidden">
                <div className="w-[99%] h-full bg-indigo-500 rounded-full" />
              </div>
            </div>

          </div>

          {/* Footer details */}
          <div className="border-t border-zinc-100 pt-3 flex justify-between items-center text-[10px] text-zinc-500">
            <span>Último mantenimiento:</span>
            <span className="font-semibold text-zinc-700">Hace 12 días</span>
          </div>
        </div>
      );

    case "seguridad":
      return (
        <div className="w-full h-full flex flex-col justify-between text-zinc-850 relative z-10">
          {/* CCTV Feed Overlay Mockup */}
          <div className="relative h-44 rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden flex flex-col justify-between p-3.5 shadow-inner">
            
            {/* Holographic night-vision line scanning effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-1/2 w-full animate-[bounce_5s_infinite_linear] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d415_10%,transparent_80%)] pointer-events-none" />
            
            {/* Header info overlays */}
            <div className="flex items-start justify-between z-10 text-[9px] font-mono text-cyan-400 drop-shadow">
              <div className="flex flex-col">
                <span className="font-bold">CAM 03 - DATA CENTER</span>
                <span className="opacity-70">FPS: 30.00 • AUTO-TRACKING</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                <span className="font-bold">● REC</span>
              </div>
            </div>

            {/* Centered Fingerprint / Biometric scanning reticle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-40">
              <div className="w-16 h-16 rounded-full border border-dashed border-cyan-400 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                <div className="w-12 h-12 rounded-full border border-cyan-400/40" />
              </div>
              <span className="text-[7px] text-cyan-400 font-mono tracking-wider mt-1.5 uppercase">Lector Biométrico</span>
            </div>

            {/* Bottom info overlays */}
            <div className="flex items-end justify-between z-10 text-[9px] font-mono text-cyan-400 drop-shadow">
              <span>ESTADO: SEGURO</span>
              <span>{time || "2026-05-24 07:30:00"}</span>
            </div>

          </div>

          {/* Alert logs */}
          <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400 mt-2">
            <span className="flex items-center gap-1">
              <CheckCircle size={10} className="text-emerald-500" />
              Acceso Facial Concedido: Ing. Carlos M. (07:15)
            </span>
          </div>
        </div>
      );

    case "impresion":
      return (
        <div className="w-full h-full flex flex-col justify-between text-zinc-800 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Monitoreo de Consumibles</span>
            <span className="text-[10px] font-mono text-zinc-400">Multifuncional #12</span>
          </div>

          {/* Toner Cartridges Levels */}
          <div className="flex-grow my-4 flex flex-col justify-center gap-3">
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Niveles de Tóner</span>
            
            {/* CMYK levels */}
            <div className="grid grid-cols-4 gap-2.5">
              {[
                { name: "Cyan", color: "bg-cyan-500", level: "85%" },
                { name: "Magenta", color: "bg-pink-500", level: "60%" },
                { name: "Yellow", color: "bg-yellow-400", level: "90%" },
                { name: "Black", color: "bg-zinc-850", level: "45%" },
              ].map((cartridge, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full h-16 bg-zinc-100 rounded-lg border border-zinc-200 flex flex-col justify-end overflow-hidden p-0.5">
                    <motion.div 
                      className={`w-full rounded-md ${cartridge.color}`}
                      initial={{ height: 0 }}
                      animate={{ height: cartridge.level }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[9px] font-bold text-zinc-700 mt-1">{cartridge.name[0]}</span>
                  <span className="text-[8px] text-zinc-400 font-medium">{cartridge.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Print Jobs Queue */}
          <div className="border-t border-zinc-100 pt-3 flex justify-between items-center text-[10px] text-zinc-500">
            <span>Cola de impresión:</span>
            <span className="font-semibold text-zinc-700">Imprimiendo Doc_Finanzas.pdf</span>
          </div>
        </div>
      );

    case "microsoft":
      return (
        <div className="w-full h-full flex flex-col justify-between text-zinc-850 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
            <div className="flex items-center gap-2">
              <Cloud size={16} className="text-[#0078D7]" weight="fill" />
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Portal Microsoft 365 Cloud</span>
            </div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase">
              Sincronizado
            </span>
          </div>

          {/* SaaS Cloud Control Mockup */}
          <div className="flex-grow my-4 flex flex-col justify-center gap-3">
            {/* Cloud Storage Allocation */}
            <div className="p-3 bg-white/90 rounded-xl border border-zinc-200/50 shadow-sm">
              <div className="flex justify-between items-center text-[10px] mb-1.5 font-medium">
                <span className="text-zinc-500">Almacenamiento SharePoint:</span>
                <span className="font-bold text-zinc-800">480 GB / 1 TB</span>
              </div>
              <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                <div className="w-[48%] h-full bg-blue-500 rounded-full" />
              </div>
            </div>

            {/* Integrated Cloud Services Statuses */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "Exchange", status: "online" },
                { name: "Teams", status: "online" },
                { name: "OneDrive", status: "online" },
              ].map((svc, i) => (
                <div key={i} className="p-2 rounded-lg bg-zinc-50 border border-zinc-200/50 text-center">
                  <span className="block text-[8px] font-bold text-zinc-400 uppercase tracking-wide">{svc.name}</span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-600 mt-1 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Activo
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Licenses Info */}
          <div className="border-t border-zinc-100 pt-3 flex justify-between items-center text-[9px] text-zinc-400">
            <span>Plan: Business Standard</span>
            <span className="font-semibold text-zinc-600">32 Usuarios Activos</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
