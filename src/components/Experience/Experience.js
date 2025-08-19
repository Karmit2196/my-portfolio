import React from 'react';
import { Box, Card, CardContent, Typography, Chip, useTheme } from '@mui/material';
import { EXPERIENCE } from '../../constants';

const ExperienceCard = ({ experience }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ 
      mb: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(100, 255, 218, 0.1)'
      }
    }}>
      <CardContent sx={{ 
        p: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 4.5 },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1.5, sm: 2, md: 2.5, lg: 3 }
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#64ffda', 
            mb: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
            lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 },
            letterSpacing: '0.02em',
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {experience.title} · {experience.company}
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#8892b0', 
            mb: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
            lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.55, xl: 1.6 }
          }}
        >
          {experience.location}
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#8892b0', 
            mb: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3.5 },
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
            fontWeight: 500,
            lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.55, xl: 1.6 }
          }}
        >
          {experience.period}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3.5 },
            lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {experience.description}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 },
          '& .MuiChip-root': {
            fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem', lg: '0.8rem', xl: '0.85rem' },
            height: { xs: '20px', sm: '22px', md: '24px', lg: '26px', xl: '28px' },
            borderRadius: { xs: 10, sm: 11, md: 12, lg: 13, xl: 14 }
          }
        }}>
          {experience.tech.map((tech, techIndex) => (
            <Chip 
              key={techIndex} 
              label={tech} 
              size="small" 
              sx={{ 
                backgroundColor: '#233554',
                color: '#8892b0',
                '&:hover': {
                  backgroundColor: '#64ffda',
                  color: '#0a192f'
                }
              }} 
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  return (
    <Box sx={{ 
      mt: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      mb: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 }
    }}>
      {EXPERIENCE.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </Box>
  );
};

export default Experience; 