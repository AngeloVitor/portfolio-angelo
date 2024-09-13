import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const About = () => (
  <AboutSection
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Sobre Mim</h2>
    <p>Sou desenvolvedor com formação em Ciência da Computação pela UNINASSAU, atualmente atuando como Desenvolvedor/QA...</p>
  </AboutSection>
);

export default About;
