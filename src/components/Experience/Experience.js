import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid, Container } from '@mui/material';
import { Work, LocationOn, CalendarToday } from '@mui/icons-material';
import { EXPERIENCE } from '../../constants';

const Experience = () => {
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
          Experience
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }}>
        {EXPERIENCE.map((exp, index) => (
          <Grid item xs={12} key={index}>
            <Card
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
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                  <Work sx={{ color: '#64ffda', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, mt: 0.5 }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#e6edf6',
                        mb: 1,
                        fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
                        lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.5, xl: 1.5 },
                        fontWeight: 600
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#64ffda',
                        mb: 1,
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.375rem' },
                        lineHeight: { xs: 1.4, sm: 1.45, md: 1.5, lg: 1.5, xl: 1.5 },
                        fontWeight: 500
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ color: '#a8b2d1', fontSize: '1rem' }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#a8b2d1',
                            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem', lg: '0.9rem', xl: '0.95rem' },
                            lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 }
                          }}
                        >
                          {exp.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday sx={{ color: '#a8b2d1', fontSize: '1rem' }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#a8b2d1',
                            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem', lg: '0.9rem', xl: '0.95rem' },
                            lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 }
                          }}
                        >
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#a8b2d1',
                    mb: { xs: 2, sm: 3, md: 4 },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
                    lineHeight: 1.6,
                    letterSpacing: '0em',
                    textAlign: 'justify'
                  }}
                >
                  {exp.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: { xs: 1, sm: 1.5, md: 2 }
                  }}
                >
                  {exp.tech.map((tech) => (
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
