import React from 'react';
import { Box, Typography } from '@mui/material';
import { ABOUT } from '../../constants';

const About = () => {
  return (
    <Box sx={{ 
      mt: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      mb: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 }
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          color: '#64ffda', 
          mb: { xs: 2, sm: 3, md: 4, lg: 5 },
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
          lineHeight: { xs: 1.2, sm: 1.25, md: 1.3, lg: 1.3, xl: 1.3 },
          letterSpacing: { xs: '-0.01em', sm: '-0.015em', md: '-0.02em' }
        }}
      >
        {ABOUT.welcome.title}
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: { xs: 3, sm: 4, md: 5, lg: 6 },
          textAlign: 'center',
          fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
          lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
          color: '#8892b0',
          letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
        }}
      >
        {ABOUT.welcome.description}
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: { xs: 3, sm: 4, md: 5, lg: 6 },
        maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
        mx: 'auto'
      }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#64ffda', 
              mb: { xs: 1, sm: 1.5, md: 2 },
              fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.5rem', xl: '1.625rem' },
              lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.4, xl: 1.4 }
            }}
          >
            {ABOUT.introduction.greeting}
          </Typography>
          
          <Typography 
            variant="h1" 
            sx={{ 
              color: '#ccd6f6', 
              mb: { xs: 1, sm: 1.5, md: 2 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
              lineHeight: { xs: 1.1, sm: 1.15, md: 1.2, lg: 1.2, xl: 1.2 },
              letterSpacing: { xs: '-0.02em', sm: '-0.025em', md: '-0.03em' }
            }}
          >
            {ABOUT.introduction.name}
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#8892b0', 
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
              lineHeight: { xs: 1.2, sm: 1.25, md: 1.3, lg: 1.3, xl: 1.3 },
              letterSpacing: { xs: '-0.01em', sm: '-0.015em', md: '-0.02em' }
            }}
          >
            {ABOUT.introduction.tagline}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 3, sm: 4, md: 5 },
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
              lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
              color: '#8892b0',
              letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
            }}
          >
            {ABOUT.introduction.description}
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 2, sm: 3, md: 4 },
          textAlign: 'left'
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
              lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
              color: '#8892b0',
              letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
            }}
          >
            {ABOUT.experience.summary}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
              lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
              color: '#8892b0',
              letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
            }}
          >
            {ABOUT.experience.collaboration}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
              lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
              color: '#8892b0',
              letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
            }}
          >
            {ABOUT.experience.expertise}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
              lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
              color: '#8892b0',
              letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
            }}
          >
            {ABOUT.experience.ai}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
              lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
              color: '#8892b0',
              letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
            }}
          >
            {ABOUT.experience.conclusion}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
