import React from 'react';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { EXPERIENCE } from '../../constants';

const Experience = () => {
  return (
    <Box sx={{ 
      mt: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      mb: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 }
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          color: '#64ffda', 
          mb: { xs: 3, sm: 4, md: 5, lg: 6 },
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
          lineHeight: { xs: 1.2, sm: 1.25, md: 1.3, lg: 1.3, xl: 1.3 },
          letterSpacing: { xs: '-0.01em', sm: '-0.015em', md: '-0.02em' }
        }}
      >
        Experience
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: { xs: 3, sm: 4, md: 5, lg: 6 },
        maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
        mx: 'auto'
      }}>
        {EXPERIENCE.map((exp, index) => (
          <Card 
            key={index}
            sx={{ 
              backgroundColor: '#112240',
              border: '1px solid #233554',
              transition: 'all 0.3s ease',
              borderRadius: { xs: 8, sm: 10, md: 12, lg: 16 },
              '&:hover': {
                transform: 'translateY(-5px)',
                borderColor: '#64ffda',
                boxShadow: '0 12px 30px rgba(100, 255, 218, 0.15)',
              }
            }}
          >
            <CardContent sx={{ 
              p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1.5, sm: 2, md: 2.5 }
            }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                mb: { xs: 1, sm: 1.5, md: 2 },
                gap: { xs: 1, sm: 2 }
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#64ffda', 
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
                    lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 },
                    letterSpacing: '0.02em'
                  }}
                >
                  {exp.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#8892b0',
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem', lg: '0.9rem', xl: '0.95rem' },
                    lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 }
                  }}
                >
                  {exp.period}
                </Typography>
              </Box>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#ccd6f6', 
                  mb: { xs: 1, sm: 1.5, md: 2 },
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.375rem' },
                  lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.5, xl: 1.5 }
                }}
              >
                {exp.company} • {exp.location}
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
                  fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
                  color: '#8892b0',
                  letterSpacing: { xs: '0.01em', sm: '0.015em', md: '0.02em' }
                }}
              >
                {exp.description}
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
                {exp.tech.map((tech, techIndex) => (
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
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
