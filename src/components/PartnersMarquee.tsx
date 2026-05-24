"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  WindowsLogo, 
  Cpu, 
  Globe, 
  Shield, 
  Cloud, 
  HardDrives,
  Desktop,
  Link as LinkIcon
} from "@phosphor-icons/react";

const brands = [
  { name: "Microsoft 365", icon: WindowsLogo, color: "text-[#0078D7]" },
  { name: "Cisco Systems", icon: Cpu, color: "text-[#00B4D8]" },
  { name: "Ubiquiti", icon: Globe, color: "text-[#0052FF]" },
  { name: "Fortinet", icon: Shield, color: "text-[#C00000]" },
  { name: "Dell Technologies", icon: HardDrives, color: "text-[#0076CE]" },
  { name: "Lenovo Enterprise", icon: Desktop, color: "text-[#E2231A]" },
  { name: "Microsoft Azure", icon: Cloud, color: "text-[#0089D6]" },
  { name: "Windows Server", icon: WindowsLogo, color: "text-[#0078D7]" },
];

export default function PartnersMarquee() {

  return (
    <section className="py-10 bg-white border-y border-zinc-200/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Tecnologías y Marcas de Confianza
        </p>
      </div>

      <div className="relative flex items-center w-full overflow-hidden">
        {/* Soft edge fading gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 150, // Aumentado significativamente para que vaya más lento
              repeat: Infinity,
            }}
          >
            {[0, 1].map((halfIndex) => (
              <div key={halfIndex} className="flex">
                {[0, 1, 2, 3].map((repeatIndex) => (
                  <div key={repeatIndex} className="flex gap-16 items-center pr-16 w-max">
                    {brands.map((brand, index) => {
                      const Icon = brand.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default py-2"
                        >
                          <Icon size={24} className={brand.color} weight="fill" />
                          <span className="text-sm font-bold tracking-tight text-zinc-800">
                            {brand.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
