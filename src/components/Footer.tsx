"use client";

import React from "react";
import Link from "next/link";
import { WindowsLogo, Envelope, Phone, MapPin } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200/50 py-16 text-zinc-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-1.5 text-xl font-bold text-zinc-900 group">
            <span>MFTS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-tech-blue"></span>
          </Link>
          <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
            Ofrecemos soluciones avanzadas de TI para optimizar la infraestructura de tu negocio, asegurando continuidad operativa y seguridad informática.
          </p>
          <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 w-fit">
            <WindowsLogo size={16} className="text-[#0078D7]" weight="fill" />
            <span className="text-[11px] font-semibold text-zinc-500 tracking-wide uppercase">
              Partner de Microsoft
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
            Navegación
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/servicios" className="hover:text-tech-blue transition-colors duration-200">
                Servicios TI
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-tech-blue transition-colors duration-200">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/partner" className="hover:text-tech-blue transition-colors duration-200">
                Partner Microsoft
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-tech-blue transition-colors duration-200">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">
            Contacto
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-center gap-2.5">
              <Envelope size={16} className="text-zinc-400" />
              <span className="text-zinc-500">cdc@mattechservices.mx</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="text-zinc-400 mt-0.5" />
              <div className="flex flex-col text-zinc-500 leading-tight">
                <span>Tel: 5589852173</span>
                <span>Tel: 5589852174</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-zinc-400 mt-0.5" />
              <span className="text-zinc-500 leading-snug">
                Providencia #821<br/>
                Col. Del valle<br/>
                Ciudad de México, CDMX<br/>
                CP. 03100
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} Mat Fleet Tech Services. Todos los derechos reservados.</p>
        <p className="flex gap-4">
          <Link href="/privacidad" className="hover:underline">Aviso de Privacidad</Link>
          <span>•</span>
          <Link href="/terminos" className="hover:underline">Términos de Servicio</Link>
        </p>
      </div>
    </footer>
  );
}
