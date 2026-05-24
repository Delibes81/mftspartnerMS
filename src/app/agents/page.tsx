import React from "react";
import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentsDashboard from "@/components/AgentsDashboard";
import { Terminal, Shield } from "@phosphor-icons/react/dist/ssr";

interface FileNode {
  name: string;
  path: string;
  isDir: boolean;
  children?: FileNode[];
}

function buildFileTree(dirPath: string, rootDir: string, depth = 0): FileNode[] {
  // Safe limits to prevent memory leaks and payload bloat
  if (depth > 3) return [];

  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const nodes: FileNode[] = [];

  const ignoredNames = new Set([
    "node_modules",
    ".git",
    ".next",
    "dist",
    ".antigravitycli",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
    ".gitignore",
    ".DS_Store",
    "pnpm-debug.log",
    "package-lock.json",
    "CLAUDE.md",
    "eslint.config.mjs",
    "next-env.d.ts",
    "next.config.ts",
    "tsconfig.json",
    "postcss.config.mjs"
  ]);

  for (const item of items) {
    if (ignoredNames.has(item.name)) continue;

    const fullPath = path.join(dirPath, item.name);
    const relativePath = path.relative(rootDir, fullPath);

    if (item.isDirectory()) {
      const children = buildFileTree(fullPath, rootDir, depth + 1);
      nodes.push({
        name: item.name,
        path: relativePath,
        isDir: true,
        children: children.sort((a, b) => {
          if (a.isDir && !b.isDir) return -1;
          if (!a.isDir && b.isDir) return 1;
          return a.name.localeCompare(b.name);
        }),
      });
    } else {
      nodes.push({
        name: item.name,
        path: relativePath,
        isDir: false,
      });
    }
  }

  return nodes.sort((a, b) => {
    if (a.isDir && !b.isDir) return -1;
    if (!a.isDir && b.isDir) return 1;
    return a.name.localeCompare(b.name);
  });
}

export default async function AgentsPage() {
  // Read config safely on the server side
  const configPath = path.join(process.cwd(), "antigravity.config.json");
  const configContent = fs.readFileSync(configPath, "utf-8");
  const config = JSON.parse(configContent);

  // Build the project file tree safely
  const fileStructure = buildFileTree(process.cwd(), process.cwd());

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-zinc-50/50">
        
        {/* Intro Hero Header */}
        <section className="py-12 md:py-16 text-center max-w-7xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-tech-blue bg-tech-blue-light/50 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Terminal size={14} />
              Entorno Autónomo
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Panel de Agentes e Integración
            </h1>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              MFTS opera bajo una arquitectura de orquestación inteligente. Inspecciona a continuación los roles, prompts de sistema, herramientas y el flujo secuencial de nuestra pipeline autónoma de desarrollo.
            </p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="max-w-7xl mx-auto px-6">
          <AgentsDashboard config={config} fileStructure={fileStructure} />
        </section>

        {/* Additional security notes */}
        <section className="max-w-4xl mx-auto px-6 mt-12 text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-zinc-400">
            <Shield size={16} />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              Conexión Protegida TLS/SSH
            </span>
          </div>
          <p className="text-[10px] text-zinc-500 font-mono leading-relaxed">
            Este panel lee las configuraciones internas y el estado del árbol de archivos en un entorno de sandbox protegido. Las operaciones de escritura y asignación de tareas están restringidas bajo directrices RLS corporativas.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
