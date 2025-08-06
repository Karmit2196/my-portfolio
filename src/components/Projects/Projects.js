import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { PROJECTS } from '../../constants';

const ProjectCard = ({ project }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" sx={{ color: '#64ffda', mb: 1 }}>
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {project.description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {project.tech.map((tech, techIndex) => (
          <Chip 
            key={techIndex} 
            label={tech} 
            size="small" 
            sx={{ backgroundColor: '#233554' }} 
          />
        ))}
      </Box>
      <Button 
        variant="outlined" 
        size="small" 
        startIcon={<GitHub />}
        href={project.github}
        target="_blank"
      >
        View Project
      </Button>
    </CardContent>
  </Card>
);

const Projects = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {PROJECTS.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 