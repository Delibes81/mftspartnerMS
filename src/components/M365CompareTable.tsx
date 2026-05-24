"use client";

import React, { useState } from "react";
import { Check, X, ShieldCheck, Sparkle } from "@phosphor-icons/react";

const features = [
  { name: "Correo Exchange Corporativo (50 GB)", basic: true, standard: true, premium: true },
  { name: "Office en Web y Dispositivos Móviles", basic: true, standard: true, premium: true },
  { name: "Microsoft Teams (Llamadas y Chat)", basic: true, standard: true, premium: true },
  { name: "Almacenamiento OneDrive (1 TB)", basic: "1 TB", standard: "1 TB", premium: "1 TB" },
  { name: "Apps Office de Escritorio (Word, Excel, etc.)", basic: false, standard: true, premium: true },
  { name: "Intranets y Portales SharePoint", basic: false, standard: true, premium: true },
  { name: "Publisher y Access (Solo Windows PC)", basic: false, standard: true, premium: true },
  { name: "Seguridad Avanzada Microsoft Defender", basic: false, standard: false, premium: true },
  { name: "Gestión de Dispositivos Móviles Intune", basic: false, standard: false, premium: true },
  { name: "Azure Information Protection (DLP)", basic: false, standard: false, premium: true },
  { name: "Nivel de Soporte Técnico MFTS", basic: "Básico", standard: "Prioritario", premium: "VIP 24/7" },
];

export default function M365CompareTable() {
  const [highlightedPlan, setHighlightedPlan] = useState<"basic" | "standard" | "premium">("standard");

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-zinc-200/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-block">
            Tabla Comparativa
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Compara las características al detalle
          </h3>
          <p className="text-base text-zinc-600">
            Encuentra la coincidencia de licenciamiento perfecta para el rol específico de cada uno de tus colaboradores.
          </p>
        </div>

        {/* Plan Column Selector (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-2 mb-6">
          {(["basic", "standard", "premium"] as const).map((plan) => (
            <button
              key={plan}
              onClick={() => setHighlightedPlan(plan)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                highlightedPlan === plan
                  ? "bg-tech-blue text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 border border-zinc-200"
              }`}
            >
              {plan === "basic" ? "Basic" : plan === "standard" ? "Standard" : "Premium"}
            </button>
          ))}
        </div>

        {/* Detailed Table Grid Wrapper */}
        <div className="border border-zinc-200/60 rounded-3xl overflow-hidden bg-zinc-50/30 shadow-premium">
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[700px] md:min-w-0">
              <thead>
                <tr className="border-b border-zinc-200/80 bg-zinc-50">
                  <th className="p-5 text-sm font-bold text-zinc-700 w-2/5">Características principales</th>
                  
                  {/* Basic column */}
                  <th className={`p-5 text-sm font-bold text-center transition-colors duration-300 w-1/5 ${
                    highlightedPlan === "basic" ? "bg-tech-blue/5 border-x border-tech-blue/20" : "text-zinc-600"
                  }`}>
                    <span className="block text-xs text-zinc-400 font-medium">Business</span>
                    <span className="block text-sm font-bold text-zinc-900 mt-0.5">Basic</span>
                  </th>

                  {/* Standard column */}
                  <th className={`p-5 text-sm font-bold text-center transition-colors duration-300 w-1/5 ${
                    highlightedPlan === "standard" ? "bg-tech-blue/5 border-x border-tech-blue/20" : "text-zinc-600"
                  }`}>
                    {highlightedPlan === "standard" && (
                      <span className="inline-block bg-tech-blue text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                        Popular
                      </span>
                    )}
                    <span className="block text-xs text-zinc-400 font-medium">Business</span>
                    <span className="block text-sm font-bold text-zinc-900 mt-0.5">Standard</span>
                  </th>

                  {/* Premium column */}
                  <th className={`p-5 text-sm font-bold text-center transition-colors duration-300 w-1/5 ${
                    highlightedPlan === "premium" ? "bg-tech-blue/5 border-x border-tech-blue/20" : "text-zinc-600"
                  }`}>
                    <span className="block text-xs text-zinc-400 font-medium">Business</span>
                    <span className="block text-sm font-bold text-zinc-900 mt-0.5">Premium</span>
                  </th>
                </tr>
              </thead>
              
              <tbody>
                {features.map((feat, idx) => (
                  <tr 
                    key={idx} 
                    className="border-b border-zinc-200/50 hover:bg-zinc-100/30 transition-colors"
                  >
                    <td className="p-5 text-sm text-zinc-700 font-medium">{feat.name}</td>
                    
                    {/* Basic */}
                    <td className={`p-5 text-center transition-colors duration-300 ${
                      highlightedPlan === "basic" ? "bg-tech-blue/5 border-x border-tech-blue/10" : ""
                    }`}>
                      {typeof feat.basic === "boolean" ? (
                        feat.basic ? (
                          <Check size={18} weight="bold" className="text-emerald-500 mx-auto" />
                        ) : (
                          <X size={16} weight="bold" className="text-zinc-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-semibold text-zinc-800 bg-white border border-zinc-200 px-2.5 py-0.5 rounded-full inline-block shadow-sm">
                          {feat.basic}
                        </span>
                      )}
                    </td>

                    {/* Standard */}
                    <td className={`p-5 text-center transition-colors duration-300 ${
                      highlightedPlan === "standard" ? "bg-tech-blue/5 border-x border-tech-blue/10" : ""
                    }`}>
                      {typeof feat.standard === "boolean" ? (
                        feat.standard ? (
                          <Check size={18} weight="bold" className="text-emerald-500 mx-auto" />
                        ) : (
                          <X size={16} weight="bold" className="text-zinc-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-semibold text-zinc-800 bg-white border border-zinc-200 px-2.5 py-0.5 rounded-full inline-block shadow-sm">
                          {feat.standard}
                        </span>
                      )}
                    </td>

                    {/* Premium */}
                    <td className={`p-5 text-center transition-colors duration-300 ${
                      highlightedPlan === "premium" ? "bg-tech-blue/5 border-x border-tech-blue/10" : ""
                    }`}>
                      {typeof feat.premium === "boolean" ? (
                        feat.premium ? (
                          <Check size={18} weight="bold" className="text-emerald-500 mx-auto" />
                        ) : (
                          <X size={16} weight="bold" className="text-zinc-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-semibold text-zinc-800 bg-white border border-zinc-200 px-2.5 py-0.5 rounded-full inline-block shadow-sm">
                          {feat.premium}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Highlight Controller (Desktop Only) */}
        <div className="hidden md:flex justify-end gap-3 mt-4 text-xs font-medium text-zinc-400">
          <span>Resaltar columna:</span>
          {(["basic", "standard", "premium"] as const).map((plan) => (
            <button
              key={plan}
              onClick={() => setHighlightedPlan(plan)}
              className={`hover:text-tech-blue transition-colors uppercase tracking-wider font-semibold ${
                highlightedPlan === plan ? "text-tech-blue underline underline-offset-4" : ""
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
