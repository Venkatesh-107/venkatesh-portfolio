import React, { useState } from 'react';
import AntiGravityScene from './components/AntiGravityScene';
import JarvisHUD from './components/JarvisHUD';
import ProjectsShowcase from './components/ProjectsShowcase';
import { GlitchPattern } from './components/UiverseComponents';

function App() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      {/* GLITCH PATTERN LAYER */}
      <GlitchPattern />

      {/* 3D BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <AntiGravityScene />
      </div>

      {/* 2D HUD OVERLAY LAYER */}
      <JarvisHUD />

      {/* PROJECTS SHOWCASE */}
      <ProjectsShowcase />

      {/* GLOBAL SCANNER OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#00f3ff_0,transparent_70%)]" />
      </div>
    </main>
  );
}

export default App;
