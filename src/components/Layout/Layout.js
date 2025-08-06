import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container, Box, useMediaQuery } from '@mui/material';
import { THEME } from '../../constants';
import Header from '../Header/Header';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

const theme = createTheme(THEME);

// Component to sync URL with state
const NavigationSync = ({ activeSection, onSectionChange }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.slice(1) || 'about';
    if (path !== activeSection) {
      onSectionChange(path);
    }
  }, [location.pathname, activeSection, onSectionChange]);

  const handleSectionChange = (sectionId) => {
    navigate(`/${sectionId}`);
    onSectionChange(sectionId);
  };

  return (
    <>
      <Header 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isMobile={useMediaQuery(theme.breakpoints.down('md'))}
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {useMediaQuery(theme.breakpoints.down('md')) && (
          <MobileNavigation 
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Container>
    </>
  );
};

const Layout = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', backgroundColor: '#0a192f' }}>
          <NavigationSync 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default Layout; 