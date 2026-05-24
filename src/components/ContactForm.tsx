"use client";

import React, { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Envelope, 
  Buildings, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  CircleNotch,
  ChatText,
  Briefcase
} from "@phosphor-icons/react";
import { submitContact, FormState } from "@/app/contacto/actions";

const services = [
  { value: "soporte", label: "Soporte Técnico Profesional" },
  { value: "redes", label: "Redes y Cableado Estructurado" },
  { value: "mantenimiento", label: "Mantenimiento Preventivo y Correctivo" },
  { value: "seguridad", label: "Seguridad y Control de Acceso (CCTV/Biométricos)" },
  { value: "impresion", label: "Renta de Equipos de Impresión Corporativa" },
  { value: "microsoft", label: "Licenciamiento Microsoft 365 y Cloud" },
];

const initialState: FormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("servicio") || "";

  // Focus effect/scroll to message if success or error
  useEffect(() => {
    if (state.message) {
      const el = document.getElementById("form-response-alert");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [state]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {state.success ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/80 backdrop-blur-md border border-emerald-200/50 rounded-3xl p-8 md:p-12 shadow-premium text-center flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100"
            >
              <CheckCircle size={48} weight="fill" />
            </motion.div>
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-zinc-900">
                ¡Gracias por escribirnos!
              </h3>
              <p className="text-zinc-600 max-w-md mx-auto leading-relaxed">
                {state.message}
              </p>
            </div>

            {state.data && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-6 text-left space-y-3.5 mt-4 text-sm"
              >
                <h4 className="font-semibold text-zinc-800 border-b border-zinc-200/50 pb-2">
                  Resumen de tu solicitud:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-600">
                  <p><strong>Nombre:</strong> {state.data.nombre}</p>
                  <p><strong>Empresa:</strong> {state.data.empresa}</p>
                  <p><strong>Teléfono:</strong> {state.data.telefono}</p>
                  <p><strong>Email:</strong> {state.data.email}</p>
                  <p className="md:col-span-2">
                    <strong>Servicio:</strong>{" "}
                    {services.find((s) => s.value === state.data?.servicio)?.label || state.data.servicio}
                  </p>
                </div>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tech-blue hover:bg-tech-blue-hover text-white font-medium text-sm transition-all duration-200 shadow-sm"
            >
              Enviar otro mensaje
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            action={formAction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/80 backdrop-blur-md border border-zinc-200/50 rounded-3xl p-8 md:p-10 shadow-premium space-y-6"
            noValidate
          >
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
                Inicia tu proyecto con nosotros
              </h3>
              <p className="text-sm text-zinc-500">
                Completa el siguiente formulario y un consultor especialista te contactará en menos de 24 horas.
              </p>
            </div>

            {state.message && !state.success && (
              <motion.div
                id="form-response-alert"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-rose-50 border border-rose-200/50 text-rose-700 rounded-xl text-sm font-medium"
              >
                {state.message}
              </motion.div>
            )}

            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Nombre */}
              <div className="space-y-1.5">
                <label htmlFor="nombre" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block">
                  Nombre Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Juan Pérez"
                    disabled={isPending}
                    defaultValue={state.data?.nombre || ""}
                    className={`w-full pl-10 pr-4 py-3 bg-zinc-50/50 border rounded-xl text-zinc-800 placeholder-zinc-400 text-sm focus:outline-none focus:bg-white transition-all duration-200 ${
                      state.errors?.nombre
                        ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20"
                        : "border-zinc-200/80 focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/20"
                    }`}
                  />
                </div>
                {state.errors?.nombre && (
                  <span className="text-xs text-rose-500 font-medium block mt-1">
                    {state.errors.nombre}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                    <Envelope size={18} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="juan@empresa.com"
                    disabled={isPending}
                    defaultValue={state.data?.email || ""}
                    className={`w-full pl-10 pr-4 py-3 bg-zinc-50/50 border rounded-xl text-zinc-800 placeholder-zinc-400 text-sm focus:outline-none focus:bg-white transition-all duration-200 ${
                      state.errors?.email
                        ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20"
                        : "border-zinc-200/80 focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/20"
                    }`}
                  />
                </div>
                {state.errors?.email && (
                  <span className="text-xs text-rose-500 font-medium block mt-1">
                    {state.errors.email}
                  </span>
                )}
              </div>

              {/* Empresa */}
              <div className="space-y-1.5">
                <label htmlFor="empresa" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block">
                  Empresa
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                    <Buildings size={18} />
                  </div>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    placeholder="Mi Empresa S.A."
                    disabled={isPending}
                    defaultValue={state.data?.empresa || ""}
                    className={`w-full pl-10 pr-4 py-3 bg-zinc-50/50 border rounded-xl text-zinc-800 placeholder-zinc-400 text-sm focus:outline-none focus:bg-white transition-all duration-200 ${
                      state.errors?.empresa
                        ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20"
                        : "border-zinc-200/80 focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/20"
                    }`}
                  />
                </div>
                {state.errors?.empresa && (
                  <span className="text-xs text-rose-500 font-medium block mt-1">
                    {state.errors.empresa}
                  </span>
                )}
              </div>

              {/* Teléfono */}
              <div className="space-y-1.5">
                <label htmlFor="telefono" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block">
                  Teléfono
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    placeholder="+56 9 1234 5678"
                    disabled={isPending}
                    defaultValue={state.data?.telefono || ""}
                    className={`w-full pl-10 pr-4 py-3 bg-zinc-50/50 border rounded-xl text-zinc-800 placeholder-zinc-400 text-sm focus:outline-none focus:bg-white transition-all duration-200 ${
                      state.errors?.telefono
                        ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20"
                        : "border-zinc-200/80 focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/20"
                    }`}
                  />
                </div>
                {state.errors?.telefono && (
                  <span className="text-xs text-rose-500 font-medium block mt-1">
                    {state.errors.telefono}
                  </span>
                )}
              </div>
            </div>

            {/* Servicio de Interés */}
            <div className="space-y-1.5">
              <label htmlFor="servicio" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block">
                Servicio de interés
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <Briefcase size={18} />
                </div>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  disabled={isPending}
                  defaultValue={state.data?.servicio || defaultService || ""}
                  className={`w-full pl-10 pr-4 py-3 bg-zinc-50/50 border rounded-xl text-zinc-800 placeholder-zinc-400 text-sm focus:outline-none focus:bg-white transition-all duration-200 appearance-none cursor-pointer ${
                    state.errors?.servicio
                      ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20"
                      : "border-zinc-200/80 focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/20"
                  }`}
                >
                  <option value="" disabled>Selecciona un servicio...</option>
                  {services.map((svc) => (
                    <option key={svc.value} value={svc.value}>
                      {svc.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-zinc-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {state.errors?.servicio && (
                <span className="text-xs text-rose-500 font-medium block mt-1">
                  {state.errors.servicio}
                </span>
              )}
            </div>

            {/* Mensaje */}
            <div className="space-y-1.5">
              <label htmlFor="mensaje" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block">
                Detalles del Requerimiento
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3.5 pointer-events-none text-zinc-400">
                  <ChatText size={18} />
                </div>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  placeholder="Describe brevemente tus requerimientos o problemas a resolver..."
                  disabled={isPending}
                  defaultValue={state.data?.mensaje || ""}
                  className={`w-full pl-10 pr-4 py-3 bg-zinc-50/50 border rounded-xl text-zinc-800 placeholder-zinc-400 text-sm focus:outline-none focus:bg-white transition-all duration-200 resize-none ${
                    state.errors?.mensaje
                      ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20"
                      : "border-zinc-200/80 focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/20"
                  }`}
                />
              </div>
              {state.errors?.mensaje && (
                <span className="text-xs text-rose-500 font-medium block mt-1">
                  {state.errors.mensaje}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-tech-blue hover:bg-tech-blue-hover disabled:bg-tech-blue/70 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
              >
                {isPending ? (
                  <>
                    <CircleNotch size={18} className="animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Solicitud</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
