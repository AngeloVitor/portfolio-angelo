// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled(motion.section)`
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Projects = () => (
  <ProjectsSection
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <h2>Projetos em Destaque</h2>
    <ProjectCard
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3>Migração para Vue.js e Quasar</h3>
      <p>Projeto de transição dos frameworks Knockout.js e Bootstrap, aumentando a performance e melhorando a experiência do usuário...</p>
    </ProjectCard>
    {/* Adicione mais projetos conforme necessário */}
  </ProjectsSection>
);

export default Projects;
