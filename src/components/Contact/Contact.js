import React from 'react';
import { Box, Typography, Container, IconButton, Card, CardContent, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email, LocationOn, Work, Schedule } from '@mui/icons-material';
import { CONTACT } from '../../constants';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ 
        mt: { xs: 2, sm: 3, md: 4, lg: 5 },
        mb: { xs: 4, sm: 5, md: 6, lg: 8 }
      }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#64ffda', 
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem' },
              lineHeight: { xs: 1.2, sm: 1.25, md: 1.3 },
              letterSpacing: { xs: '0em', sm: '-0.01em', md: '-0.015em' }
            }}
          >
            {CONTACT.title}
          </Typography>
          
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#e6edf6', 
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem', lg: '1.625rem' },
              lineHeight: { xs: 1.3, sm: 1.35, md: 1.4 }
            }}
          >
            {CONTACT.subtitle}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 3, sm: 4, md: 5 },
              fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.1rem', lg: '1.125rem' },
              lineHeight: { xs: 1.65, sm: 1.65, md: 1.65, lg: 1.65 },
              color: '#a8b2d1',
              letterSpacing: '0em',
              maxWidth: '65ch',
              mx: 'auto'
            }}
          >
            {CONTACT.description}
          </Typography>
        </Box>

        {/* Contact Information Cards */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 3, sm: 4, md: 5 },
          mb: { xs: 4, sm: 5, md: 6 }
        }}>
          {/* Email Card */}
          <Card sx={{
            backgroundColor: 'rgba(17, 34, 64, 0.3)',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            borderRadius: { xs: 2, sm: 2.5, md: 3 },
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#64ffda',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(100, 255, 218, 0.1)'
            }
          }}>
            <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ color: '#64ffda', mr: 2, fontSize: '2rem' }} />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#e6edf6',
                    fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' }
                  }}
                >
                  Email
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#a8b2d1',
                  fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.1rem' },
                  mb: 2
                }}
              >
                {CONTACT.email}
              </Typography>
              <Chip 
                label="Click to send email" 
                sx={{ 
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  color: '#64ffda',
                  border: '1px solid rgba(100, 255, 218, 0.3)'
                }}
              />
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card sx={{
            backgroundColor: 'rgba(17, 34, 64, 0.3)',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            borderRadius: { xs: 2, sm: 2.5, md: 3 },
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#64ffda',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(100, 255, 218, 0.1)'
            }
          }}>
            <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ color: '#64ffda', mr: 2, fontSize: '2rem' }} />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#e6edf6',
                    fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' }
                  }}
                >
                  Location
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#a8b2d1',
                  fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.1rem' }
                }}
              >
                {CONTACT.location}
              </Typography>
            </CardContent>
          </Card>

          {/* Availability Card */}
          <Card sx={{
            backgroundColor: 'rgba(17, 34, 64, 0.3)',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            borderRadius: { xs: 2, sm: 2.5, md: 3 },
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#64ffda',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(100, 255, 218, 0.1)'
            }
          }}>
            <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Schedule sx={{ color: '#64ffda', mr: 2, fontSize: '2rem' }} />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#e6edf6',
                    fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' }
                  }}
                >
                  Availability
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#a8b2d1',
                  fontSize: { xs: '1rem', sm: '1.0625rem', md: '1.1rem' }
                }}
              >
                {CONTACT.availability}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Social Links Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#64ffda', 
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem', lg: '1.625rem' },
              lineHeight: { xs: 1.3, sm: 1.35, md: 1.4 }
            }}
          >
            Connect with me
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 2, sm: 3, md: 4 },
            flexWrap: 'wrap'
          }}>
            <IconButton
              href={CONTACT.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#a8b2d1',
                backgroundColor: 'rgba(17, 34, 64, 0.5)',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                borderRadius: '50%',
                width: { xs: 56, sm: 60, md: 64 },
                height: { xs: 56, sm: 60, md: 64 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(100, 255, 218, 0.2)'
                }
              }}
            >
              <GitHub sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' } }} />
            </IconButton>
            
            <IconButton
              href={CONTACT.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#a8b2d1',
                backgroundColor: 'rgba(17, 34, 64, 0.5)',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                borderRadius: '50%',
                width: { xs: 56, sm: 60, md: 64 },
                height: { xs: 56, sm: 60, md: 64 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(100, 255, 218, 0.2)'
                }
              }}
            >
              <LinkedIn sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' } }} />
            </IconButton>
            
            <IconButton
              href={`mailto:${CONTACT.socialLinks.email}`}
              sx={{
                color: '#a8b2d1',
                backgroundColor: 'rgba(17, 34, 64, 0.5)',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                borderRadius: '50%',
                width: { xs: 56, sm: 60, md: 64 },
                height: { xs: 56, sm: 60, md: 64 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(100, 255, 218, 0.2)'
                }
              }}
            >
              <Email sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' } }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
