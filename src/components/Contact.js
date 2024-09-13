// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled(motion.section)`
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const ContactIcons = styled.div`
  margin-top: 20px;
  a {
    margin: 0 15px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Contact = () => (
  <ContactSection
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Contato</h2>
    <p>Interessado em trabalhar comigo ou colaborar em um projeto? Vamos nos conectar!</p>
    <ContactIcons>
      <a href="mailto:angelovitor2010@gmail.com"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/angelolemaire/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </ContactIcons>
  </ContactSection>
);

export default Contact;
