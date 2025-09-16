import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Button, Grid, Container } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            color: '#64ffda',
            mb: { xs: 3, sm: 4, md: 5, lg: 6 },
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
            lineHeight: 1.2,
            letterSpacing: '0em'
          }}
        >
          Projects
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }}>
        {PROJECTS.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                backgroundColor: '#112240',
                border: '1px solid #233554',
                transition: 'all 0.3s ease',
                borderRadius: { xs: 8, sm: 10, md: 12, lg: 16 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  borderColor: '#64ffda',
                  boxShadow: '0 12px 30px rgba(100, 255, 218, 0.15)',
                }
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5, lg: 6 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#e6edf6',
                    mb: { xs: 2, sm: 3, md: 4 },
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
                    lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.5, xl: 1.5 },
                    fontWeight: 600
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: '#a8b2d1',
                    mb: { xs: 2, sm: 3, md: 4 },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
                    lineHeight: 1.6,
                    letterSpacing: '0em',
                    flexGrow: 1
                  }}
                >
                  {project.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: { xs: 1, sm: 1.5, md: 2 },
                    mb: { xs: 2, sm: 3, md: 4 }
                  }}
                >
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: '#64ffda',
                        color: '#0a192f',
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.85rem', xl: '0.9rem' },
                        height: { xs: '24px', sm: '26px', md: '28px', lg: '30px', xl: '32px' },
                        borderRadius: { xs: 12, sm: 13, md: 14, lg: 15, xl: 16 },
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 15px rgba(100, 255, 218, 0.3)',
                          backgroundColor: '#4cd6b3'
                        }
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, justifyContent: 'flex-start' }}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#64ffda',
                      borderColor: '#64ffda',
                      fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
                      fontWeight: 500,
                      textTransform: 'none',
                      letterSpacing: '0.02em',
                      borderRadius: { xs: 4, sm: 6, md: 8, lg: 10 },
                      px: { xs: 2, sm: 3, md: 4 },
                      py: { xs: 1, sm: 1.5, md: 2 },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        borderColor: '#4cd6b3',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 15px rgba(100, 255, 218, 0.2)'
                      }
                    }}
                  >
                    GitHub
                  </Button>
                  
                  {project.npm && (
                    <Button
                      variant="outlined"
                      startIcon={<OpenInNew />}
                      href={project.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#64ffda',
                        borderColor: '#64ffda',
                        fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem', lg: '0.95rem', xl: '1rem' },
                        fontWeight: 500,
                        textTransform: 'none',
                        letterSpacing: '0.02em',
                        borderRadius: { xs: 4, sm: 6, md: 8, lg: 10 },
                        px: { xs: 2, sm: 3, md: 4 },
                        py: { xs: 1, sm: 1.5, md: 2 },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          borderColor: '#4cd6b3',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 15px rgba(100, 255, 218, 0.2)'
                        }
                      }}
                    >
                      NPM
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
