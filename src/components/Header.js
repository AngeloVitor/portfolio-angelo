// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeaderWrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  a {
    margin: 0 10px;
    font-size: 1.2rem;
    color: #fff;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 1rem;
    }
  }
`;

const Header = () => (
  <HeaderWrapper
    initial={{ y: -250 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 120 }}
  >
    <Logo>Ângelo Lemaire</Logo>
    <NavLinks>
      <a href="#about"><FaEnvelope /></a>
      <a href="#linkedin"><FaLinkedin /></a>
    </NavLinks>
  </HeaderWrapper>
);

export default Header;
