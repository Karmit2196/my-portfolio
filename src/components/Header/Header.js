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
              px: { xs: 3, sm: 4 },
              minHeight: { xs: '48px', sm: '56px' },
              transition: 'all 0.3s ease'
            }}
          >
            <ListItemText 
              primary={section.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  fontWeight: activeSection === section.id ? 600 : 400,
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
          backgroundColor: 'transparent', 
          boxShadow: 'none',
          borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(10, 25, 47, 0.95)'
        }}
      >
        <Toolbar 
          className="header-toolbar"
          sx={{ 
            justifyContent: 'space-between', 
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            py: { xs: 1, sm: 1.5, md: 2 },
            minHeight: { xs: '64px', sm: '72px', md: '80px', lg: '88px' }
          }}
        >
          <Typography 
            variant="h6" 
            className="header-title-responsive header-title"
            sx={{ 
              color: '#64ffda', 
              fontWeight: 700,
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem', lg: '1.3rem', xl: '1.5rem' },
              lineHeight: 1.2,
              maxWidth: { xs: '160px', sm: '200px', md: '240px', lg: '300px', xl: 'none' },
              letterSpacing: { xs: '-0.01em', sm: '-0.015em', md: '-0.02em' },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            title={HEADER.title} // Add tooltip for full text
          >
            {HEADER.title}
          </Typography>
          
          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <Box sx={{ 
            display: { xs: 'none', lg: 'flex' }, 
            gap: { lg: 2, xl: 3 },
            alignItems: 'center'
          }}>
            {NAVIGATION.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === section.id ? '#64ffda' : '#8892b0',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  fontWeight: activeSection === section.id ? 600 : 400,
                  whiteSpace: 'nowrap',
                  minHeight: '44px',
                  minWidth: '44px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#64ffda';
                  e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = activeSection === section.id ? '#64ffda' : '#8892b0';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {section.label}
              </button>
            ))}
          </Box>
          
          {/* Social Links and Mobile Menu */}
          <Box 
            className="header-social-icons"
            sx={{ 
              display: 'flex', 
              gap: { xs: 1.5, sm: 2, md: 2.5, lg: 3 }, 
              alignItems: 'center',
              flexShrink: 0
            }}
          >
            {/* Social Icons - Responsive sizing with better spacing */}
            <IconButton 
              href={HEADER.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                color: '#8892b0',
                '&:hover': { color: '#64ffda' },
                padding: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2, xl: 2.25 },
                minWidth: { xs: '48px', sm: '52px', md: '56px', lg: '60px' },
                minHeight: { xs: '48px', sm: '52px', md: '56px', lg: '60px' },
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' }
                }
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
                '&:hover': { color: '#64ffda' },
                padding: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2, xl: 2.25 },
                minWidth: { xs: '48px', sm: '52px', md: '56px', lg: '60px' },
                minHeight: { xs: '48px', sm: '52px', md: '56px', lg: '60px' },
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' }
                }
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              href={`mailto:${HEADER.socialLinks.email}`}
              sx={{ 
                color: '#8892b0',
                '&:hover': { color: '#64ffda' },
                padding: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2, xl: 2.25 },
                minWidth: { xs: '48px', sm: '52px', md: '56px', lg: '60px' },
                minHeight: { xs: '48px', sm: '52px', md: '56px', lg: '60px' },
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' }
                }
              }}
            >
              <Email />
            </IconButton>
            
            {/* Mobile Menu Button - Hidden on desktop */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'block', lg: 'none' },
                color: '#8892b0',
                '&:hover': { color: '#64ffda' },
                padding: { xs: 1.25, sm: 1.5, md: 1.75 },
                minWidth: { xs: '48px', sm: '52px', md: '56px' },
                minHeight: { xs: '48px', sm: '52px', md: '56px' },
                ml: { xs: 1, sm: 1.5, md: 2 }, // Add left margin for separation
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }
              }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile/Tablet Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: { xs: '280px', sm: '320px', md: '350px' },
            backgroundColor: '#0a192f',
            borderLeft: '1px solid rgba(100, 255, 218, 0.1)',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(20px)'
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          p: { xs: 2, sm: 3 },
          borderBottom: '1px solid rgba(100, 255, 218, 0.1)'
        }}>
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={{ 
              color: '#8892b0',
              '&:hover': { color: '#64ffda' },
              minWidth: '44px',
              minHeight: '44px'
            }}
          >
            <Close />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 