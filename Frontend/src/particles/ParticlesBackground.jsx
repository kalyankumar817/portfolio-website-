import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);  // Load all particle interactions
    };

    const particlesOptions = {
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "bubble" },
                resize: true,
            },
            modes: {
                push: { quantity: 4 },
                bubble: { distance: 200, duration: 0.4, size:10 },
            },
        },
        particles: {
            color: { value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff"] },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                outModes: { default: "out" },
            },
            number: { density: { enable: true, area: 800 }, value: 120 },
            opacity: { value: 0.5 },
            shape: { type: ["circle", "square", "triangle"] },
            size: { value: 3 },
        },
        detectRetina: true,
    };

    return (
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    );
};

export default ParticlesBackground;
