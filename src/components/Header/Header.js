import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { HEADER, NAVIGATION } from '../../constants';

const Header = ({ activeSection, onSectionChange, isMobile }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: '#64ffda', fontWeight: 700 }}>
          {HEADER.title}
        </Typography>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {NAVIGATION.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === section.id ? '#64ffda' : '#8892b0',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '8px 16px',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#64ffda' }
                }}
              >
                {section.label}
              </button>
            ))}
          </Box>
        )}
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            href={HEADER.socialLinks.github} 
            target="_blank" 
            sx={{ color: '#8892b0' }}
          >
            <GitHub />
          </IconButton>
          <IconButton 
            href={HEADER.socialLinks.linkedin} 
            target="_blank" 
            sx={{ color: '#8892b0' }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 