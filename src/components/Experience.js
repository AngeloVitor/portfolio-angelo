// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled(motion.section)`
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Experience = () => (
  <ExperienceSection
    initial={{ x: '-100vw' }}
    animate={{ x: 0 }}
    transition={{ type: 'spring', stiffness: 60 }}
  >
    <h2>Experiência Profissional</h2>
    <ul>
      <li>Migração dos frameworks Knockout.js e Bootstrap para Vue.js e Quasar...</li>
      <li>Otimização e refatoração do código existente, melhorando o desempenho da plataforma...</li>
      <li>Implementação de novas funcionalidades com foco em interatividade e acessibilidade mobile...</li>
      {/* Adicione os demais pontos conforme necessário */}
    </ul>
  </ExperienceSection>
);

export default Experience;
