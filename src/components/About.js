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
    <p>
      Eu sou Ângelo Lemaire, um engenheiro de Software Frontend. graduado em
      Ciência da Computação e com mais de 3 anos de experiência nesta área meu
      objetivo é desenvolver projetos de excelência, utilizando tecnologias de
      última geração e aderindo às melhores práticas do mercado
    </p>
    <p>
      Ao longo da minha carreira, tenho me especializado no desenvolvimento
      frontend e backend com foco em JavaScript, aplicando habilidades avançadas
      tanto na construção de interfaces dinâmicas e responsivas com React.js e
      Vue.js quanto no desenvolvimento de aplicações robustas no lado do
      servidor com Node.js. Utilizo meu conhecimento profundo em JavaScript para
      criar soluções eficientes, intuitivas e orientadas ao usuário, sempre
      alinhadas às melhores práticas de UI/UX. Mantenho-me atualizado com as
      mais recentes tendências e ferramentas da indústria, integrando novas
      bibliotecas e frameworks para entregar experiências inovadoras e de alta
      performance.
    </p>
    <p>
      Atualmente, atuo como Desenvolvedor de Software em Testes, utilizando o
      Jest para realizar a cobertura completa de testes, tanto em aplicações
      front-end quanto back-end.
    </p>
  </AboutSection>
);

export default About;
