import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip, useTheme } from '@mui/material';
import { SKILLS } from '../../constants';

const SkillCard = ({ category, skills }) => {
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
            mb: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
            lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.45, xl: 1.5 },
            letterSpacing: '0.02em'
          }}
        >
          {category}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 },
          '& .MuiChip-root': {
            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.85rem', xl: '0.9rem' },
            height: { xs: '22px', sm: '24px', md: '26px', lg: '28px', xl: '30px' },
            borderRadius: { xs: 11, sm: 12, md: 13, lg: 14, xl: 15 }
          }
        }}>
          {skills.map((skill, index) => (
            <Chip 
              key={index} 
              label={skill} 
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

const Skills = () => {
  return (
    <Box sx={{ 
      mt: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      mb: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 }
    }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {Object.entries(SKILLS).map(([category, skillList]) => (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={category}>
            <SkillCard category={category} skills={skillList} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 