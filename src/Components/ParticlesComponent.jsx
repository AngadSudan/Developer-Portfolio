// "use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from @/tsparticles/all; // if you are going to use `loadAll`, install the @tsparticles/all package too.
// import { loadFull } from tsparticles; // if you are going to use `loadFull`, install the tsparticles package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the @tsparticles/slim package too.
// import { loadBasic } from @tsparticles/basic; // if you are going to use `loadBasic`, install the @tsparticles/basic package too.

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: "#0f172a", // Changed to match the slate-900 background
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 80, // Reduced for better performance and cleaner look
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#ffffff", "#3b82f6", "#a855f7"], // White, blue, and purple to match gradient
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.2, // Reduced opacity for subtlety
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "rgba(255, 255, 255, 0.15)", // Subtle white lines
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1, // Slower speed for more elegant movement
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce", // Changed to bounce for contained effect
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Changed to grab for better interaction
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
