import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip, Button, useTheme } from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';
import { PROJECTS } from '../../constants';

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ 
      height: '100%',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 25px rgba(100, 255, 218, 0.15)'
      }
    }}>
      <CardContent sx={{ 
        p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: { xs: 1.5, sm: 2, md: 2.5 }
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#64ffda', 
            mb: { xs: 1, sm: 1.5, md: 2 },
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
            lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 },
            letterSpacing: '0.02em'
          }}
        >
          {project.title}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
            lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.65, xl: 1.7 },
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
            flexGrow: 1,
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {project.description}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 }, 
          mb: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
          '& .MuiChip-root': {
            fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem', lg: '0.8rem', xl: '0.85rem' },
            height: { xs: '20px', sm: '22px', md: '24px', lg: '26px', xl: '28px' },
            borderRadius: { xs: 10, sm: 11, md: 12, lg: 13, xl: 14 }
          }
        }}>
          {project.tech.map((tech, techIndex) => (
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
        <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5, md: 2 }, flexWrap: 'wrap' }}>
          {project.github && (
            <Button 
              variant="outlined" 
              size="small" 
              startIcon={<GitHub />} 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem', lg: '0.9rem', xl: '0.95rem' },
                px: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
                py: { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 },
                minHeight: { xs: '32px', sm: '36px', md: '40px', lg: '44px' },
                minWidth: { xs: '44px', sm: '48px', md: '52px', lg: '56px' },
                borderColor: '#64ffda',
                color: '#64ffda',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              GitHub
            </Button>
          )}
          {project.npm && (
            <Button 
              variant="outlined" 
              size="small" 
              startIcon={<Language />} 
              href={project.npm} 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem', lg: '0.9rem', xl: '0.95rem' },
                px: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
                py: { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 },
                minHeight: { xs: '32px', sm: '36px', md: '40px', lg: '44px' },
                minWidth: { xs: '44px', sm: '48px', md: '52px', lg: '56px' },
                borderColor: '#64ffda',
                color: '#64ffda',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              NPM
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <Box sx={{ 
      mt: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      mb: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 }
    }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {PROJECTS.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
