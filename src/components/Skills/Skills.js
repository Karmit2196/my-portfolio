import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import { SKILLS } from '../../constants';

const SkillCard = ({ category, skills }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" sx={{ color: '#64ffda', mb: 2 }}>
        {category}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip 
            key={index} 
            label={skill} 
            size="small" 
            sx={{ backgroundColor: '#233554' }} 
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);

const Skills = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {Object.entries(SKILLS).map(([category, skillList]) => (
          <Grid item xs={12} md={6} key={category}>
            <SkillCard category={category} skills={skillList} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 