import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import { THEME } from '../../constants';
import Header from '../Header/Header';
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
      />
      <Container 
        maxWidth="xl" 
        sx={{ 
          py: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 }, 
          px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
          maxWidth: { 
            xs: '100%', 
            sm: '100%', 
            md: '100%', 
            lg: '1200px', 
            xl: '1400px' 
          },
          mx: 'auto'
        }}
      >
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
        <Box sx={{ 
          minHeight: '100vh', 
          backgroundColor: '#0a192f',
          overflowX: 'hidden'
        }}>
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