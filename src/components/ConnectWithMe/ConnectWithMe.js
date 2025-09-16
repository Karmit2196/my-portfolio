import React from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { HEADER } from '../../constants';

const ConnectWithMe = ({ variant = 'default' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  if (variant === 'floating') {
    return (
      <Box
        sx={{
          position: 'fixed',
          right: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          gap: 1.5,
          '& .social-icon': {
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: 'rgba(17, 34, 64, 0.8)',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              borderColor: '#64ffda',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(100, 255, 218, 0.2)'
            }
          }
        }}
      >
        <IconButton
          href={HEADER.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          sx={{
            color: '#a8b2d1',
            '&:hover': {
              color: '#64ffda'
            }
          }}
        >
          <GitHub sx={{ fontSize: '1.75rem' }} />
        </IconButton>
        
        <IconButton
          href={HEADER.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          sx={{
            color: '#a8b2d1',
            '&:hover': {
              color: '#64ffda'
            }
          }}
        >
          <LinkedIn sx={{ fontSize: '1.75rem' }} />
        </IconButton>
        
        <IconButton
          href={`mailto:${HEADER.socialLinks.email}`}
          className="social-icon"
          sx={{
            color: '#a8b2d1',
            '&:hover': {
              color: '#64ffda'
            }
          }}
        >
          <Email sx={{ fontSize: '1.75rem' }} />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      textAlign: 'center',
      py: { xs: 3, sm: 4, md: 5 },
      px: { xs: 2, sm: 3, md: 4 },
      backgroundColor: 'rgba(17, 34, 64, 0.3)',
      borderRadius: { xs: 2, sm: 2.5, md: 3 },
      border: '1px solid rgba(100, 255, 218, 0.1)',
      maxWidth: { xs: '100%', sm: '400px', md: '500px' },
      mx: 'auto',
      mt: { xs: 4, sm: 5, md: 6 }
    }}>
      <Typography 
        variant="h3" 
        sx={{ 
          color: '#64ffda', 
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },
          fontWeight: 600
        }}
      >
        Connect with me
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#a8b2d1', 
          mb: { xs: 3, sm: 4 },
          fontSize: { xs: '0.9rem', sm: '1rem' },
          lineHeight: 1.6
        }}
      >
        Let's discuss opportunities, collaborate on projects, or just have a chat about technology and automation!
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: { xs: 2, sm: 3, md: 4 },
        flexWrap: 'wrap'
      }}>
        <IconButton
          href={HEADER.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#a8b2d1',
            backgroundColor: 'rgba(17, 34, 64, 0.5)',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            borderRadius: '50%',
            width: { xs: 48, sm: 52, md: 56 },
            height: { xs: 48, sm: 52, md: 56 },
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
          <GitHub sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }} />
        </IconButton>
        
        <IconButton
          href={HEADER.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#a8b2d1',
            backgroundColor: 'rgba(17, 34, 64, 0.5)',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            borderRadius: '50%',
            width: { xs: 48, sm: 52, md: 56 },
            height: { xs: 48, sm: 52, md: 56 },
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
          <LinkedIn sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }} />
        </IconButton>
        
        <IconButton
          href={`mailto:${HEADER.socialLinks.email}`}
          sx={{
            color: '#a8b2d1',
            backgroundColor: 'rgba(17, 34, 64, 0.5)',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            borderRadius: '50%',
            width: { xs: 48, sm: 52, md: 56 },
            height: { xs: 48, sm: 52, md: 56 },
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
          <Email sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ConnectWithMe;
