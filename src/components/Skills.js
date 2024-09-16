// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaJs, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaBootstrap, FaWordpress, FaLess, FaSass,
  FaAngular, FaVuejs, FaNetworkWired
} from 'react-icons/fa';
import {
  SiTypescript, SiMysql, SiGraphql, SiWebpack, SiQuasar, SiJquery, SiTailwindcss, SiCypress,
  SiJest
} from 'react-icons/si';

const SkillsSection = styled(motion.section)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  max-width: 1200px;
  
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: auto 10px

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  flex: 1 1 200px; /* Flexível e responsivo */
  justify-content: center;
  margin: 5px;

  @media (max-width: 480px) {
    flex: 1 1 100px; /* Ajusta o tamanho em dispositivos menores */
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const skills = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'ReactJS', icon: <FaReact /> },
  { name: 'NodeJS', icon: <FaNodeJs /> },
  { name: 'VueJS', icon: <FaVuejs /> },
  { name: 'AngularJS', icon: <FaAngular /> },
  { name: 'JQuery', icon: <SiJquery /> },
  { name: 'WebpackJS', icon: <SiWebpack /> },
  { name: 'Quasar', icon: <SiQuasar /> },
  { name: 'Cypress', icon: <SiCypress /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Wordpress', icon: <FaWordpress /> },
  { name: 'Sass', icon: <FaSass /> },
  { name: 'Less', icon: <FaLess /> },
  { name: 'REST', icon: <FaNetworkWired /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
];

const Skills = () => (
  <SkillsSection
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Habilidades Técnicas</h2>
    <SkillsList>
      {skills.map((skill) => (
        <SkillItem key={skill.name} whileHover={{ scale: 1.1 }}>
          {skill.icon} &nbsp; {skill.name}
        </SkillItem>
      ))}
    </SkillsList>
  </SkillsSection>
);

export default Skills;
