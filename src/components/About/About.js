import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { ABOUT } from '../../constants';

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      mt: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      mb: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 }
    }}>
      <Typography 
        variant="h1" 
        sx={{ 
          mb: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          textAlign: { xs: 'left', sm: 'left' },
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}
      >
        {ABOUT.welcome.title}
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          maxWidth: { xs: '100%', sm: '95%', md: '90%', lg: '800px', xl: '900px' },
          mb: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
          lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.75, xl: 1.8 },
          fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' }
        }}
      >
        {ABOUT.welcome.description}
      </Typography>
      
      <Box sx={{ mt: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 } }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#64ffda', 
            mb: { xs: 1, sm: 1.5, md: 2, lg: 2.5, xl: 3 },
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.375rem' },
            letterSpacing: '0.05em'
          }}
        >
          {ABOUT.introduction.greeting}
        </Typography>
        
        <Typography 
          variant="h1" 
          sx={{ 
            mb: { xs: 1, sm: 1.5, md: 2, lg: 2.5, xl: 3 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
            lineHeight: { xs: 1.1, sm: 1.15, md: 1.2, lg: 1.2, xl: 1.2 },
            letterSpacing: { xs: '-0.02em', sm: '-0.025em', md: '-0.03em', lg: '-0.035em', xl: '-0.04em' }
          }}
        >
          {ABOUT.introduction.name}
        </Typography>
        
        <Typography 
          variant="h2" 
          sx={{ 
            mb: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 }, 
            color: '#8892b0',
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', xl: '2.25rem' },
            lineHeight: { xs: 1.2, sm: 1.25, md: 1.3, lg: 1.35, xl: 1.4 },
            letterSpacing: { xs: '-0.01em', sm: '-0.015em', md: '-0.02em' }
          }}
        >
          {ABOUT.introduction.tagline}
        </Typography>
      </Box>
      
      <Box sx={{ mt: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 } }}>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 4.5 },
            lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.75, xl: 1.8 },
            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {ABOUT.introduction.description}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 4.5 },
            lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.75, xl: 1.8 },
            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {ABOUT.experience.summary}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 4.5 },
            lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.75, xl: 1.8 },
            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {ABOUT.experience.collaboration}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 4.5 },
            lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.75, xl: 1.8 },
            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {ABOUT.experience.expertise}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 4.5 },
            lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.75, xl: 1.8 },
            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {ABOUT.experience.ai}
        </Typography>
        
        <Typography 
          variant="body1"
          sx={{ 
            lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.75, xl: 1.8 },
            fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {ABOUT.experience.conclusion}
        </Typography>
      </Box>
    </Box>
  );
};

export default About; 