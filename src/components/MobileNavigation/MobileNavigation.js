import React from 'react';
import { Box, Button } from '@mui/material';
import { NAVIGATION } from '../../constants';

const MobileNavigation = ({ activeSection, onSectionChange }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
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
            '&:hover': {
              backgroundColor: activeSection === section.id ? '#64ffda' : 'rgba(100, 255, 218, 0.1)'
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