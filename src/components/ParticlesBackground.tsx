// src/components/ParticlesBackground.tsx

import Particles from "@tsparticles/react";

export function ParticlesBackground() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,

        particles: {
          number: {
            value: 80,
            density: { enable: true },
          },

          color: {
            value: ["#4A5BFF", "#7B88FF", "#FFFFFF"],
          },

          opacity: {
            value: 0.25,
          },

          size: {
            value: { min: 1, max: 3 },
          },

          move: {
            enable: true,
            speed: 0.4,
            random: true,
            outModes: { default: "out" },
          },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 120 },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
