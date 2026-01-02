import React from 'react';

// Cyberpunk Loader (Inspired by Uiverse kennyotsu style)
export const CyberpunkLoader = () => {
    return (
        <div className="cyberpunk-loader">
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-core"></div>
            <style jsx>{`
                .cyberpunk-loader {
                    position: relative;
                    width: 80px;
                    height: 80px;
                }
                .loader-ring {
                    position: absolute;
                    border: 2px solid transparent;
                    border-top-color: #00f3ff;
                    border-radius: 50%;
                    animation: spin 1.5s linear infinite;
                }
                .loader-ring:nth-child(1) {
                    width: 80px;
                    height: 80px;
                    animation-delay: 0s;
                }
                .loader-ring:nth-child(2) {
                    width: 60px;
                    height: 60px;
                    top: 10px;
                    left: 10px;
                    animation-delay: -0.5s;
                    border-top-color: #ff00c1;
                }
                .loader-ring:nth-child(3) {
                    width: 40px;
                    height: 40px;
                    top: 20px;
                    left: 20px;
                    animation-delay: -1s;
                    border-top-color: #00fff9;
                }
                .loader-core {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    top: 30px;
                    left: 30px;
                    background: radial-gradient(circle, #00f3ff, transparent);
                    border-radius: 50%;
                    animation: pulse 1.5s ease-in-out infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                }
            `}</style>
        </div>
    );
};

// Holographic Switch (Inspired by Uiverse Galahhad style)
export const HolographicSwitch = ({ checked, onChange, label }) => {
    return (
        <label className="holo-switch">
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider">
                <span className="slider-track"></span>
                <span className="slider-thumb"></span>
            </span>
            {label && <span className="switch-label">{label}</span>}
            <style jsx>{`
                .holo-switch {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    user-select: none;
                }
                .holo-switch input {
                    display: none;
                }
                .slider {
                    position: relative;
                    width: 60px;
                    height: 28px;
                    background: rgba(0, 243, 255, 0.1);
                    border: 1px solid rgba(0, 243, 255, 0.3);
                    border-radius: 14px;
                    transition: all 0.3s;
                    overflow: hidden;
                }
                .slider-track {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.2));
                    transform: translateX(-100%);
                    transition: transform 0.3s;
                }
                .slider-thumb {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    top: 3px;
                    left: 4px;
                    background: #00f3ff;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
                    transition: all 0.3s;
                }
                .holo-switch input:checked + .slider {
                    background: rgba(0, 243, 255, 0.2);
                    border-color: #00f3ff;
                }
                .holo-switch input:checked + .slider .slider-track {
                    transform: translateX(0);
                }
                .holo-switch input:checked + .slider .slider-thumb {
                    left: 32px;
                    box-shadow: 0 0 20px rgba(0, 243, 255, 0.8);
                }
                .switch-label {
                    font-size: 11px;
                    color: #00f3ff;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
            `}</style>
        </label>
    );
};

// Glitch Pattern Background (Inspired by Uiverse adamgiebl style)
export const GlitchPattern = () => {
    return (
        <div className="glitch-pattern">
            <div className="pattern-layer pattern-1"></div>
            <div className="pattern-layer pattern-2"></div>
            <div className="pattern-layer pattern-3"></div>
            <style jsx>{`
                .glitch-pattern {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    opacity: 0.03;
                    z-index: 1;
                }
                .pattern-layer {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 243, 255, 0.1) 2px, rgba(0, 243, 255, 0.1) 4px),
                        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 243, 255, 0.1) 2px, rgba(0, 243, 255, 0.1) 4px);
                }
                .pattern-1 {
                    animation: glitch-1 8s infinite;
                }
                .pattern-2 {
                    animation: glitch-2 6s infinite;
                    opacity: 0.5;
                }
                .pattern-3 {
                    animation: glitch-3 10s infinite;
                    opacity: 0.3;
                }
                @keyframes glitch-1 {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(2px, -2px); }
                    66% { transform: translate(-2px, 2px); }
                }
                @keyframes glitch-2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-1px, 1px) scale(1.01); }
                }
                @keyframes glitch-3 {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.1; }
                }
            `}</style>
        </div>
    );
};

// Animated Scan Button (Inspired by Uiverse bociKond style)
export const ScanButton = ({ onClick, children }) => {
    return (
        <button className="scan-button" onClick={onClick}>
            <span className="scan-line"></span>
            <span className="button-content">{children}</span>
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
            <style jsx>{`
                .scan-button {
                    position: relative;
                    padding: 16px 48px;
                    background: rgba(0, 0, 0, 0.6);
                    border: 1px solid rgba(0, 243, 255, 0.3);
                    color: #00f3ff;
                    font-family: 'Share Tech Mono', monospace;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    cursor: pointer;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                .scan-button:hover {
                    background: rgba(0, 243, 255, 0.1);
                    border-color: #00f3ff;
                    box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
                }
                .scan-line {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #00f3ff, transparent);
                    animation: scan 2s linear infinite;
                }
                .button-content {
                    position: relative;
                    z-index: 2;
                }
                .corner {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-color: #00f3ff;
                    border-style: solid;
                }
                .corner-tl {
                    top: -1px;
                    left: -1px;
                    border-width: 2px 0 0 2px;
                }
                .corner-tr {
                    top: -1px;
                    right: -1px;
                    border-width: 2px 2px 0 0;
                }
                .corner-bl {
                    bottom: -1px;
                    left: -1px;
                    border-width: 0 0 2px 2px;
                }
                .corner-br {
                    bottom: -1px;
                    right: -1px;
                    border-width: 0 2px 2px 0;
                }
                @keyframes scan {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
            `}</style>
        </button>
    );
};
