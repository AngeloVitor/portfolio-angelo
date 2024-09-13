// src/components/BackgroundAnimation.js
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundAnimation = () => {
  const particlesInit = async (main) => {
    // Carrega as partículas para a animação
    await loadFull(main);
  };

  return (
    <Particles
      id="background-animation"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#000000',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'out',
            },
          },
          size: {
            value: { min: 1, max: 5 },
          },
          opacity: {
            value: 0.3,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundAnimation;
