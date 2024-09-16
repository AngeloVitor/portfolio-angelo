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

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Projects = () => (
  <ProjectsSection
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <h2>Projetos em Destaque</h2>
    <ProjectCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <h3>Crypto Wallet</h3>
      <p>
        Desenvolver uma aplicação React que exiba uma lista de criptomoedas,
        permita ao usuário visualizar informações detalhadas sobre cada uma
        delas e interaja com uma wallet de criptomoedas, como Metamask, para
        demonstrar a habilidade de conectar a aplicação React a smart contracts.
      </p>
      <ProjectLink
        href="https://github.com/AngeloVitor/Crypto-Wallet"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub
      </ProjectLink>
    </ProjectCard>
    <ProjectCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <h3>Projeto Aspecta</h3>
      <p>
        O projeto Aspecta, é um reforço online interativa, onde podemos incluir
        de forma dinamica e unica o aprendizado para crianças atipicas. Ganhador
        do Premio de melhor projeto da Cadeira de projeto da UNINASSAU de Recife
        2023
      </p>
      <ProjectLink
        href="https://github.com/AngeloVitor/ASPECTA_PROJECT"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub
      </ProjectLink>
    </ProjectCard>
    <ProjectCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <h3>Ranek</h3>
      <p>
        Projeto Ranek da Origamid. Um e-commerce completo desenvolvido como
        parte do curso Origamid. Usando HTML, CSS, JavaScript e Vue.js, este
        projeto cobre tudo, desde a criação de design responsivo até a
        implementação de recursos como registro de usuário, carrinho de compras
        e autenticação.
      </p>
      <ProjectLink
        href="https://github.com/AngeloVitor/Ranek-Vue"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub
      </ProjectLink>
    </ProjectCard>
    <ProjectCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <h3>BikCraft</h3>
      <p>E-commerce de venda de bicicletas</p>
      <ProjectLink
        href="https://github.com/AngeloVitor/Bikcraft"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub
      </ProjectLink>
    </ProjectCard>
    <ProjectCard whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <h3>FlexBlog</h3>
      <p>this is a Blog with only display:Flex</p>
      <ProjectLink
        href="https://github.com/AngeloVitor/FlexBlog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub
      </ProjectLink>
    </ProjectCard>
  </ProjectsSection>
);

export default Projects;
