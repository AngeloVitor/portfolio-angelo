// src/components/Blog.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogSection = styled(motion.section)`
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Blog = () => (
  <BlogSection
    initial={{ x: '100vw' }}
    animate={{ x: 0 }}
    transition={{ type: 'spring', stiffness: 70 }}
  >
    <h2>Blog e Artigos</h2>
    <p>Espaço reservado para futuros artigos e publicações.</p>
  </BlogSection>
);

export default Blog;
