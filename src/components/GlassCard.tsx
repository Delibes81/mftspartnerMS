"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  onClick,
  delay = 0,
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  if (onClick) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: delay,
        }}
        whileHover={
          hoverEffect
            ? {
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(0, 102, 204, 0.08), 0 1px 6px rgba(0, 0, 0, 0.02)",
                borderColor: "rgba(0, 102, 204, 0.25)",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
              }
            : undefined
        }
        whileTap={hoverEffect ? { scale: 0.98 } : undefined}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        className={`
          group relative overflow-hidden
          bg-white/70 backdrop-blur-md 
          border border-zinc-200/50 
          rounded-2xl p-6 
          shadow-[0_8px_30px_rgba(0,0,0,0.02)]
          transition-all duration-300
          text-left w-full
          cursor-pointer focus:outline-none focus:ring-2 focus:ring-tech-blue/50
          ${className}
        `}
      >
        {hoverEffect && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  350px circle at ${mouseX}px ${mouseY}px,
                  rgba(0, 102, 204, 0.06),
                  transparent 80%
                )
              `,
            }}
          />
        )}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      }}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow: "0 20px 40px -15px rgba(0, 102, 204, 0.08), 0 1px 6px rgba(0, 0, 0, 0.02)",
              borderColor: "rgba(0, 102, 204, 0.25)",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      className={`
        group relative overflow-hidden
        bg-white/70 backdrop-blur-md 
        border border-zinc-200/50 
        rounded-2xl p-6 
        shadow-[0_8px_30px_rgba(0,0,0,0.02)]
        transition-all duration-300
        text-left w-full
        ${className}
      `}
    >
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 102, 204, 0.06),
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
