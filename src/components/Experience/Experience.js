import React from 'react';
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { EXPERIENCE } from '../../constants';

const ExperienceCard = ({ experience }) => (
  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Typography variant="h6" sx={{ color: '#64ffda', mb: 1 }}>
        {experience.title} · {experience.company}
      </Typography>
      <Typography variant="body2" sx={{ color: '#8892b0', mb: 1 }}>
        {experience.location}
      </Typography>
      <Typography variant="body2" sx={{ color: '#8892b0', mb: 2 }}>
        {experience.period}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {experience.description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {experience.tech.map((tech, techIndex) => (
          <Chip 
            key={techIndex} 
            label={tech} 
            size="small" 
            sx={{ backgroundColor: '#233554' }} 
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);

const Experience = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {EXPERIENCE.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </Box>
  );
};

export default Experience; 