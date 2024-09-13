// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme } from './styles/Theme';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BackgroundAnimation from './components/BackgroundAnimation'; // Importa o componente de animação de fundo

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <BackgroundAnimation /> {/* Adiciona a animação de fundo */}
    <Header />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    <Blog />
  </ThemeProvider>
);

export default App;
