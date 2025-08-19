import React from 'react';
import { Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { NAVIGATION } from '../../constants';

const MobileNavigation = ({ activeSection, onSectionChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      display: 'flex', 
      gap: { xs: 1, sm: 1.5, md: 2 }, 
      mb: { xs: 3, sm: 4, md: 5 }, 
      flexWrap: 'wrap',
      justifyContent: { xs: 'center', sm: 'flex-start' }
    }}>
      {NAVIGATION.sections.map((section) => (
        <Button
          key={section.id}
          variant={activeSection === section.id ? "contained" : "outlined"}
          size="small"
          onClick={() => onSectionChange(section.id)}
          sx={{
            backgroundColor: activeSection === section.id ? '#64ffda' : 'transparent',
            color: activeSection === section.id ? '#0a192f' : '#64ffda',
            borderColor: '#64ffda',
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem', lg: '0.9rem' },
            px: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
            py: { xs: 1, sm: 1.25, md: 1.5, lg: 1.75 },
            minHeight: { xs: '36px', sm: '40px', md: '44px', lg: '48px' },
            minWidth: { xs: '44px', sm: '48px', md: '52px', lg: '56px' },
            borderRadius: { xs: 6, sm: 8, md: 10, lg: 12 },
            fontWeight: activeSection === section.id ? 600 : 500,
            letterSpacing: '0.02em',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: activeSection === section.id ? '#64ffda' : 'rgba(100, 255, 218, 0.1)',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 12px rgba(100, 255, 218, 0.2)'
            },
            '&:active': {
              transform: 'translateY(0px)'
            }
          }}
        >
          {section.label}
        </Button>
      ))}
    </Box>
  );
};

export default MobileNavigation; 