import React from 'react';
import { Box, Typography } from '@mui/material';
import { ABOUT } from '../../constants';

const About = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        {ABOUT.welcome.title}
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
        {ABOUT.welcome.description}
      </Typography>
      
      <Typography variant="body2" sx={{ color: '#64ffda', mb: 2 }}>
        {ABOUT.introduction.greeting}
      </Typography>
      <Typography variant="h1" sx={{ mb: 2 }}>
        {ABOUT.introduction.name}
      </Typography>
      <Typography variant="h2" sx={{ mb: 4, color: '#8892b0' }}>
        {ABOUT.introduction.tagline}
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 3 }}>
        {ABOUT.introduction.description}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {ABOUT.experience.summary}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {ABOUT.experience.collaboration}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {ABOUT.experience.expertise}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {ABOUT.experience.ai}
      </Typography>
      <Typography variant="body1">
        {ABOUT.experience.conclusion}
      </Typography>
    </Box>
  );
};

export default About; 