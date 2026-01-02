import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap, Shield, Radar, Power } from 'lucide-react';
import { CyberpunkLoader, GlitchPattern, ScanButton } from './UiverseComponents';

const JarvisHUD = () => {
    const [time, setTime] = useState(new Date());
    const [booting, setBooting] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        const bootTimer = setTimeout(() => setBooting(false), 3000);
        return () => {
            clearInterval(timer);
            clearTimeout(bootTimer);
        };
    }, []);

    const hudVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (booting) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
                <CyberpunkLoader />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[#00f3ff] font-mono text-sm tracking-[0.5em] mt-8 uppercase"
                >
                    Initializing_Jarvis_Core...
                </motion.div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-40 pointer-events-none flex flex-col justify-between p-8 font-mono text-[#00f3ff]">
            {/* TOP HEADER */}
            <motion.div
                variants={hudVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-between items-start"
            >
                <div className="jarvis-glass p-4 rounded-lg jarvis-corner-border pointer-events-auto">
                    <div className="flex items-center gap-3">
                        <Cpu className="animate-pulse" size={20} />
                        <span className="text-xs uppercase tracking-widest">System_Core: Online</span>
                    </div>
                    <div className="mt-1 text-2xl font-bold tracking-tighter">
                        R_VENKATESH // AI_ENGINEER
                    </div>
                    <div className="text-[9px] opacity-60 mt-1 uppercase tracking-wider">
                        Information Technology • ML Specialist
                    </div>
                </div>

                <div className="jarvis-glass p-4 rounded-lg jarvis-corner-border text-right pointer-events-auto">
                    <div className="text-xs uppercase tracking-[0.3em] opacity-60">Temporal_Sync</div>
                    <div className="text-xl">{time.toLocaleTimeString()}</div>
                    <div className="text-[10px] opacity-40 mt-1 uppercase tracking-widest">Location: Dimensional_Hub_01</div>
                </div>
            </motion.div>

            {/* CENTER SCANNER UI (Visual Only) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-20">
                <div className="w-[800px] h-[400px] border-y border-[#00f3ff]/20 relative overflow-hidden">
                    <div className="scanner-line" />
                    <div className="absolute inset-0 grid grid-cols-12 gap-0">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="border-r border-[#00f3ff]/5" />
                        ))}
                    </div>
                </div>
            </div>

            {/* BOTTOM HUD */}
            <motion.div
                variants={hudVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-between items-end"
            >
                {/* STATUS CARDS */}
                <div className="flex gap-4">
                    <div className="jarvis-glass p-3 rounded-md w-32 jarvis-corner-border pointer-events-auto">
                        <Shield size={16} className="mb-2" />
                        <div className="text-[8px] uppercase tracking-widest mb-1">Defense</div>
                        <div className="h-1 bg-[#00f3ff]/20 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '85%' }}
                                transition={{ duration: 1.5 }}
                                className="h-full bg-[#00f3ff]"
                            />
                        </div>
                    </div>
                    <div className="jarvis-glass p-3 rounded-md w-32 jarvis-corner-border pointer-events-auto">
                        <Zap size={16} className="mb-2" />
                        <div className="text-[8px] uppercase tracking-widest mb-1">Energy</div>
                        <div className="h-1 bg-[#00f3ff]/20 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '92%' }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                                className="h-full bg-[#00f3ff]"
                            />
                        </div>
                    </div>
                </div>

                {/* SCAN BUTTON (Uiverse Style) */}
                <div className="pointer-events-auto">
                    <button className="relative px-12 py-4 group overflow-hidden bg-black/40 border border-[#00f3ff]/50 rounded-sm hover:border-[#00f3ff] transition-all">
                        <div className="absolute inset-0 bg-[#00f3ff]/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                        <span className="relative z-10 text-glitch tracking-[0.4em] uppercase font-bold text-sm flex items-center gap-2">
                            System_Enter
                        </span>
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f3ff]" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00f3ff]" />
                    </button>
                </div>

                {/* RADAR / LOGS */}
                <div className="jarvis-glass p-4 rounded-lg jarvis-corner-border max-w-xs pointer-events-auto">
                    <div className="flex items-center gap-2 mb-2">
                        <Radar size={14} className="animate-spin-slow" />
                        <span className="text-[9px] uppercase tracking-widest">Active_Telemetry</span>
                    </div>
                    <div className="space-y-1 text-[8px] opacity-70">
                        <div>&gt; DEP_SCAN: 0.00ms</div>
                        <div>&gt; NEURAL_LINK: STABLE</div>
                        <div>&gt; ANTI_GRAVITY: ENGAGED</div>
                        <div>&gt; USER_VERIFIED: TRUE</div>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default JarvisHUD;
