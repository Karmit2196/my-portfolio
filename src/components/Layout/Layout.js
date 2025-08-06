import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box, useMediaQuery } from '@mui/material';
import { THEME } from '../../constants';
import Header from '../Header/Header';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

const theme = createTheme(THEME);

const Layout = () => {
  const [activeSection, setActiveSection] = useState('about');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      default:
        return <About />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: '#0a192f' }}>
        <Header 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isMobile={isMobile}
        />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {isMobile && (
            <MobileNavigation 
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          )}
          {renderSection()}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout; 