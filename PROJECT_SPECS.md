# PROJECT_SPECS // JARVIS_INTEGRATED_PORTFOLIO

## 🪐 Core Objective
To create a high-fidelity, Stark-Industries inspired portfolio featuring reactive 3D physics and holographic HUD elements.

## 🛠 Technical Architecture
- **Framework**: Vite / React 19.
- **3D Engine**: @react-three/fiber.
- **Physics Kernel**: @react-three/cannon (Anti-Gravity simulation).
- **HUD Engine**: Framer Motion (Orchestrated HUD animations).
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism.

## 🧬 Anti-Gravity Logic
- **Force Field**: A kinematic sphere attached to the mouse cursor exerts physical pressure on floating elements.
- **Damping**: High linear and angular damping (0.95) to simulate a "thick" zero-gravity atmosphere.
- **Floating Logic**: Elements are initialized with zero gravity `[0,0,0]`, allowing them to float based on impulse alone.

## 📟 HUD Design Systems
- **Glassmorphism**: 5% opacity cyan backgrounds with blur-10px filters.
- **Corner Borders**: CSS-pseudo-element based tactical framing.
- **Scanner Layer**: Linear gradient animation simulating periodic system sweeps.

## 🚀 Deployment
- **Platform**: GitHub Pages.
- **Automation**: `gh-pages` branch deployment via `npm run deploy`.
- **Base Integration**: Vite `base` parameter set for subdirectory hosting.
