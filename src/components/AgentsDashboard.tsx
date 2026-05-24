"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Folder,
  FolderOpen,
  File,
  CaretRight,
  CaretDown,
  Terminal,
  Wrench,
  Sparkle,
  ArrowRight,
  Lightning,
  Hash,
  Database,
  Browser,
  Cloud,
  ShieldCheck,
  Info
} from "@phosphor-icons/react";

interface Agent {
  id: string;
  name: string;
  role: string;
  system_prompt: string;
  tools: string[];
}

interface Pipeline {
  sequence: string[];
}

interface AntigravityConfig {
  workspace: string;
  version: string;
  orchestrator: {
    agent: string;
    model: string;
    mode: string;
  };
  agents: Agent[];
  pipeline: Pipeline;
}

interface FileNode {
  name: string;
  path: string;
  isDir: boolean;
  children?: FileNode[];
}

interface AgentsDashboardProps {
  config: AntigravityConfig;
  fileStructure: FileNode[];
}

// Helper icons mapping for agents
const getAgentIcon = (id: string) => {
  switch (id) {
    case "arch_lead":
      return <Cpu size={24} className="text-cyan-400" />;
    case "supabase_maestro":
      return <Database size={24} className="text-purple-400" />;
    case "seo_specialist":
      return <Sparkle size={24} className="text-teal-400" />;
    case "fe_artisan":
      return <Browser size={24} className="text-pink-400" />;
    case "integration_edge":
      return <Cloud size={24} className="text-emerald-400" />;
    case "qa_auditor":
      return <ShieldCheck size={24} className="text-amber-400" />;
    default:
      return <Terminal size={24} className="text-blue-400" />;
  }
};

const getAgentGlow = (id: string) => {
  switch (id) {
    case "arch_lead":
      return "shadow-[0_0_20px_rgba(34,211,238,0.15)] border-cyan-500/30";
    case "supabase_maestro":
      return "shadow-[0_0_20px_rgba(192,132,252,0.15)] border-purple-500/30";
    case "seo_specialist":
      return "shadow-[0_0_20px_rgba(45,212,191,0.15)] border-teal-500/30";
    case "fe_artisan":
      return "shadow-[0_0_20px_rgba(244,114,182,0.15)] border-pink-500/30";
    case "integration_edge":
      return "shadow-[0_0_20px_rgba(52,211,153,0.15)] border-emerald-500/30";
    case "qa_auditor":
      return "shadow-[0_0_20px_rgba(251,191,36,0.15)] border-amber-500/30";
    default:
      return "shadow-[0_0_20px_rgba(59,130,246,0.15)] border-blue-500/30";
  }
};

// File Explorer Item Component (Recursive)
function FileExplorerItem({ node, depth = 0 }: { node: FileNode; depth: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.isDir && node.children && node.children.length > 0;

  return (
    <div className="select-none">
      <div
        onClick={() => node.isDir && setIsOpen(!isOpen)}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        className={`flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs font-mono transition-colors duration-150 cursor-pointer ${
          node.isDir ? "text-zinc-300 hover:bg-zinc-800/50" : "text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200"
        }`}
      >
        {node.isDir ? (
          <>
            <span className="text-zinc-500">
              {isOpen ? <CaretDown size={14} weight="bold" /> : <CaretRight size={14} weight="bold" />}
            </span>
            {isOpen ? (
              <FolderOpen size={16} weight="fill" className="text-amber-400/90" />
            ) : (
              <Folder size={16} weight="fill" className="text-amber-400/90" />
            )}
            <span className="font-medium">{node.name}</span>
          </>
        ) : (
          <>
            <span className="w-3.5" />
            <File size={16} className="text-cyan-400/80" />
            <span>{node.name}</span>
          </>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-l border-zinc-800 ml-3.5"
          >
            {node.children!.map((child, index) => (
              <FileExplorerItem key={child.path + index} node={child} depth={depth + 0.5} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AgentsDashboard({ config, fileStructure }: AgentsDashboardProps) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(config.agents[0] || null);

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl text-zinc-100 flex flex-col md:grid md:grid-cols-12 min-h-[700px]">
      
      {/* Sidebar: Project Structure (Cyberpunk-styled File Explorer) */}
      <div className="col-span-4 border-b md:border-b-0 md:border-r border-zinc-800 p-6 flex flex-col h-full bg-zinc-950/40 backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
          <Terminal size={18} className="text-cyan-400 animate-pulse" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono">
            Explorador del Proyecto
          </h3>
        </div>
        
        {/* Scrollable File Tree */}
        <div className="flex-1 overflow-y-auto max-h-[300px] md:max-h-[550px] custom-scrollbar pr-2 space-y-1">
          {fileStructure && fileStructure.length > 0 ? (
            fileStructure.map((node, index) => (
              <FileExplorerItem key={node.path + index} node={node} depth={0} />
            ))
          ) : (
            <div className="text-xs text-zinc-500 font-mono italic p-2">
              No se detectaron archivos
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area: Dashboard Details */}
      <div className="col-span-8 p-6 md:p-8 flex flex-col gap-6 bg-gradient-to-br from-zinc-950 via-zinc-900/60 to-zinc-950">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-zinc-800/80 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="h-2 w-2 rounded-full bg-emerald-500 absolute" />
              <h2 className="text-lg font-mono font-bold tracking-tight text-zinc-200">
                Workspace: {config.workspace}
              </h2>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Orquestador: <span className="text-zinc-300">{config.orchestrator.agent}</span> | Modelo: <span className="text-zinc-300">{config.orchestrator.model}</span>
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs font-mono text-cyan-400 self-start sm:self-center flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <Sparkle size={12} weight="fill" className="animate-spin-slow" />
            v{config.version}
          </div>
        </div>

        {/* Pipeline Execution Flow Visualizer */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
            <Lightning size={14} className="text-yellow-400" />
            Flujo de Ejecución de la Pipeline
          </h3>
          
          <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-4 overflow-x-auto">
            <div className="flex items-center gap-4 min-w-[650px] py-2">
              
              {/* Step 1: arch_lead */}
              <div className="flex items-center gap-2">
                <div className={`p-2.5 rounded-xl border bg-zinc-900 flex items-center gap-2 shadow-[0_0_10px_rgba(34,211,238,0.05)] ${selectedAgent?.id === "arch_lead" ? "border-cyan-500" : "border-zinc-800"}`}>
                  <Cpu size={16} className="text-cyan-400" />
                  <span className="text-xs font-mono font-semibold">arch_lead</span>
                </div>
                <ArrowRight size={14} className="text-zinc-600" />
              </div>

              {/* Step 2: supabase_maestro */}
              <div className="flex items-center gap-2">
                <div className={`p-2.5 rounded-xl border bg-zinc-900 flex items-center gap-2 shadow-[0_0_10px_rgba(192,132,252,0.05)] ${selectedAgent?.id === "supabase_maestro" ? "border-purple-500" : "border-zinc-800"}`}>
                  <Database size={16} className="text-purple-400" />
                  <span className="text-xs font-mono font-semibold">supabase_maestro</span>
                </div>
                <ArrowRight size={14} className="text-zinc-600" />
              </div>

              {/* Step 3: parallel execution (fe_artisan + integration_edge + seo_specialist) */}
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-1.5">
                  <div className={`p-2 rounded-lg border bg-zinc-900 flex items-center gap-2 shadow-[0_0_10px_rgba(244,114,182,0.05)] ${selectedAgent?.id === "fe_artisan" ? "border-pink-500" : "border-zinc-800"}`}>
                    <Browser size={14} className="text-pink-400" />
                    <span className="text-[10px] font-mono font-semibold">fe_artisan</span>
                  </div>
                  <div className={`p-2 rounded-lg border bg-zinc-900 flex items-center gap-2 shadow-[0_0_10px_rgba(52,211,153,0.05)] ${selectedAgent?.id === "integration_edge" ? "border-emerald-500" : "border-zinc-800"}`}>
                    <Cloud size={14} className="text-emerald-400" />
                    <span className="text-[10px] font-mono font-semibold">integration_edge</span>
                  </div>
                  <div className={`p-2 rounded-lg border bg-zinc-900 flex items-center gap-2 shadow-[0_0_10px_rgba(45,212,191,0.05)] ${selectedAgent?.id === "seo_specialist" ? "border-teal-500" : "border-zinc-800"}`}>
                    <Sparkle size={14} className="text-teal-400" />
                    <span className="text-[10px] font-mono font-semibold">seo_specialist</span>
                  </div>
                </div>
                <ArrowRight size={14} className="text-zinc-600" />
              </div>

              {/* Step 4: qa_auditor */}
              <div className="flex items-center gap-2">
                <div className={`p-2.5 rounded-xl border bg-zinc-900 flex items-center gap-2 shadow-[0_0_10px_rgba(251,191,36,0.05)] ${selectedAgent?.id === "qa_auditor" ? "border-amber-500" : "border-zinc-800"}`}>
                  <ShieldCheck size={16} className="text-amber-400" />
                  <span className="text-xs font-mono font-semibold">qa_auditor</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Grid of Agents */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
            Selecciona un Agente para Inspeccionar
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {config.agents.map((agent) => {
              const isSelected = selectedAgent?.id === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 bg-zinc-900/60 backdrop-blur-sm cursor-pointer ${
                    isSelected
                      ? `${getAgentGlow(agent.id)} bg-zinc-900 border-opacity-100 scale-[1.03]`
                      : "border-zinc-800 hover:border-zinc-700/80 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                    {getAgentIcon(agent.id)}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-mono font-bold text-zinc-200 leading-tight">
                      {agent.id}
                    </p>
                    <p className="text-[9px] text-zinc-500 font-mono truncate max-w-[85px]">
                      {agent.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Agent Inspector Panel */}
        <AnimatePresence mode="wait">
          {selectedAgent && (
            <motion.div
              key={selectedAgent.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5 md:p-6 space-y-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-850">
                    {getAgentIcon(selectedAgent.id)}
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-zinc-100 font-mono">
                      {selectedAgent.name}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono">
                      Rol: {selectedAgent.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tools list */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-1.5">
                  <Wrench size={14} className="text-zinc-400" />
                  Herramientas Disponibles (Tools)
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAgent.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300 flex items-center gap-1 shadow-sm hover:border-zinc-700 transition-colors"
                    >
                      <Hash size={10} className="text-zinc-500" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* System Prompt block */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-1.5">
                  <Terminal size={14} className="text-zinc-400" />
                  System Prompt
                </h4>
                <div className="bg-zinc-900/80 border border-zinc-850 rounded-xl p-4 font-mono text-xs text-zinc-300 leading-relaxed max-h-[160px] overflow-y-auto custom-scrollbar shadow-inner select-text">
                  {selectedAgent.system_prompt}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
