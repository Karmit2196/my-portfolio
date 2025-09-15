import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { GitHub, LinkedIn, Email, Menu, Close } from '@mui/icons-material';
import { HEADER, NAVIGATION } from '../../constants';

const Header = ({ activeSection, onSectionChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionClick = (sectionId) => {
    onSectionChange(sectionId);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ 
      width: { xs: '280px', sm: '320px', md: '350px' },
      pt: { xs: 1, sm: 2 },
      pb: 2
    }}>
      <List>
        {NAVIGATION.sections.map((section) => (
          <ListItem 
            button 
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            sx={{
              color: activeSection === section.id ? '#64ffda' : '#8892b0',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                color: '#64ffda'
              },
              py: { xs: 2, sm: 2.5 },
              px: { xs: 3, sm: 4 }
            }}
          >
            <ListItemText 
              primary={section.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'rgba(10, 25, 47, 0.95)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Toolbar 
          className="header-toolbar"
          sx={{ 
            justifyContent: 'space-between',
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            py: { xs: 1, sm: 1.5, md: 2 },
            minHeight: { xs: '60px', sm: '70px', md: '80px' }
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#ccd6f6',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '1.5rem' },
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              '&:hover': {
                color: '#64ffda'
              }
            }}
            onClick={() => onSectionChange('about')}
          >
            {HEADER.title}
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: '#64ffda',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)'
                }
              }}
            >
              {mobileOpen ? <Close /> : <Menu />}
            </IconButton>
          ) : (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1, sm: 2, md: 3, lg: 4 }
            }}>
              {NAVIGATION.sections.map((section) => (
                <Typography
                  key={section.id}
                  variant="body1"
                  sx={{
                    color: activeSection === section.id ? '#64ffda' : '#8892b0',
                    cursor: 'pointer',
                    fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem', lg: '1.05rem' },
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#64ffda'
                    }
                  }}
                  onClick={() => onSectionChange(section.id)}
                >
                  {section.label}
                </Typography>
              ))}
            </Box>
          )}

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1, sm: 1.5, md: 2 }
          }}>
            <IconButton
              href={HEADER.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#8892b0',
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)'
                },
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
              }}
            >
              <GitHub />
            </IconButton>
            
            <IconButton
              href={HEADER.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#8892b0',
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)'
                },
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
              }}
            >
              <LinkedIn />
            </IconButton>
            
            <IconButton
              href={`mailto:${HEADER.socialLinks.email}`}
              sx={{
                color: '#8892b0',
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)'
                },
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
              }}
            >
              <Email />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '280px', sm: '320px', md: '350px' },
            backgroundColor: '#112240',
            borderLeft: '1px solid rgba(100, 255, 218, 0.1)',
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
