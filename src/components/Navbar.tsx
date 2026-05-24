"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Partner Microsoft", href: "/partner" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-md border-b border-zinc-200/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-2xl font-bold tracking-tight text-zinc-900 group"
        >
          <span>MFTS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-tech-blue group-hover:scale-125 transition-transform duration-300"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? "text-tech-blue" 
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-tech-blue rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Contacto) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-tech-blue hover:bg-tech-blue-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200 text-zinc-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-zinc-200/50 bg-white/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-base font-medium border-b border-zinc-100 last:border-0 transition-colors duration-200 ${
                    pathname === link.href ? "text-tech-blue" : "text-zinc-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-2 w-full text-center px-5 py-3 rounded-xl bg-tech-blue hover:bg-tech-blue-hover text-white text-sm font-semibold transition-all duration-200"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
