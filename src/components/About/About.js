import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ 
      maxWidth: '100%',
      mx: 'auto',
      px: { xs: 0, sm: 1, md: 2, lg: 3, xl: 4 }
    }}>
      {/* Welcome Section */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: { xs: 3, sm: 4, md: 5, lg: 6, xl: 8 },
        maxWidth: '800px',
        mx: 'auto'
      }}>
        <Typography
          variant="h2"
          sx={{
            color: '#64ffda',
            mb: { xs: 1.5, sm: 2, md: 3 },
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', xl: '2.25rem' },
            lineHeight: 1.2,
            letterSpacing: '0em'
          }}
        >
          Welcome to my portfolio
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: '#a8b2d1',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
            lineHeight: 1.6,
            letterSpacing: '0em',
            maxWidth: '60ch',
            mx: 'auto'
          }}
        >
          Explore my work experience, projects, and technical skills in the field of software testing and automation.
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ 
        mb: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 },
        maxWidth: '800px',
        mx: 'auto'
      }}>
        <Typography
          variant="body1"
          sx={{
            color: '#a8b2d1',
            mb: { xs: 0.5, sm: 1, md: 1.5 },
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
            lineHeight: 1.6,
            letterSpacing: '0em'
          }}
        >
          Hi, my name is
        </Typography>
        
        <Typography
          variant="h1"
          sx={{
            color: '#e6edf6',
            mb: { xs: 0.5, sm: 1, md: 1.5 },
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3.25rem', xl: '3.75rem' },
            lineHeight: { xs: 1.1, sm: 1.15, md: 1.2, lg: 1.2, xl: 1.2 },
            letterSpacing: { xs: '0em', sm: '-0.015em', md: '-0.02em' },
            fontWeight: 700
          }}
        >
          Karmit.
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            color: '#e6edf6',
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', xl: '2.25rem' },
            lineHeight: { xs: 1.2, sm: 1.25, md: 1.3, lg: 1.3, xl: 1.3 },
            letterSpacing: { xs: '0em', sm: '-0.01em', md: '-0.015em', lg: '-0.02em' },
            fontWeight: 600
          }}
        >
          I build quality automation solutions.
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: '#a8b2d1',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
            lineHeight: 1.6,
            letterSpacing: '0em',
            maxWidth: '60ch',
            mx: 'auto'
          }}
        >
          I'm a Senior Automation Engineer passionate about crafting robust test automation frameworks that ensure software quality and reliability. I specialize in building scalable testing solutions and integrating them seamlessly into development workflows.
        </Typography>
      </Box>

      {/* Professional Journey Section */}
      <Box sx={{ 
        maxWidth: '800px',
        mx: 'auto'
      }}>
        <Typography
          variant="h3"
          sx={{
            color: '#64ffda',
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.375rem', xl: '1.5rem' },
            lineHeight: { xs: 1.3, sm: 1.35, md: 1.4, lg: 1.4, xl: 1.4 },
            fontWeight: 600,
            textAlign: 'center'
          }}
        >
          My Professional Journey
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 2, sm: 2.5, md: 3 }
        }}>
          <Card sx={{
            backgroundColor: '#112240',
            border: '1px solid #233554',
            transition: 'all 0.3s ease',
            borderRadius: { xs: 6, sm: 8, md: 10, lg: 12 },
            '&:hover': {
              transform: 'translateY(-3px)',
              borderColor: '#64ffda',
              boxShadow: '0 8px 25px rgba(100, 255, 218, 0.12)',
            }
          }}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4, lg: 5 } }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#a8b2d1',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0em',
                  textAlign: 'justify'
                }}
              >
                With extensive experience driving quality across complex web and mobile ecosystems through robust test automation strategies, I'm specialized in setting up automation frameworks, tools and methodology to streamline testing processes and assist future users.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            backgroundColor: '#112240',
            border: '1px solid #233554',
            transition: 'all 0.3s ease',
            borderRadius: { xs: 6, sm: 8, md: 10, lg: 12 },
            '&:hover': {
              transform: 'translateY(-3px)',
              borderColor: '#64ffda',
              boxShadow: '0 8px 25px rgba(100, 255, 218, 0.12)',
            }
          }}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4, lg: 5 } }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#a8b2d1',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0em',
                  textAlign: 'justify'
                }}
              >
                Experienced in collaborating with developers and product owners, effectively interacting with front-end, back-end and UI departments regarding software defects and functionality issues. Skilled in creating accurate and efficient test scripts, demonstrating new product features to clients, and completing testing under tight deadlines to meet client demands.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            backgroundColor: '#112240',
            border: '1px solid #233554',
            transition: 'all 0.3s ease',
            borderRadius: { xs: 6, sm: 8, md: 10, lg: 12 },
            '&:hover': {
              transform: 'translateY(-3px)',
              borderColor: '#64ffda',
              boxShadow: '0 8px 25px rgba(100, 255, 218, 0.12)',
            }
          }}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4, lg: 5 } }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#a8b2d1',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0em',
                  textAlign: 'justify'
                }}
              >
                My expertise spans across web and mobile application testing, including React and Angular-based applications, as well as native and hybrid Android and iOS apps. I have a strong foundation in both manual and automated testing methodologies, with hands-on experience in tools like JIRA for defect tracking and project management.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            backgroundColor: '#112240',
            border: '1px solid #233554',
            transition: 'all 0.3s ease',
            borderRadius: { xs: 6, sm: 8, md: 10, lg: 12 },
            '&:hover': {
              transform: 'translateY(-3px)',
              borderColor: '#64ffda',
              boxShadow: '0 8px 25px rgba(100, 255, 218, 0.12)',
            }
          }}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4, lg: 5 } }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#a8b2d1',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0em',
                  textAlign: 'justify'
                }}
              >
                I'm also passionate about leveraging AI and emerging technologies to enhance testing practices. I work with AI-powered tools like Cursor, GitHub Copilot, and custom AI agents to accelerate test development, generate test data, and improve exploratory testing. My experience includes prompt engineering for test case generation, AI-assisted test automation, and integrating AI capabilities into existing Cypress and Playwright frameworks.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            backgroundColor: '#112240',
            border: '1px solid #233554',
            transition: 'all 0.3s ease',
            borderRadius: { xs: 6, sm: 8, md: 10, lg: 12 },
            '&:hover': {
              transform: 'translateY(-3px)',
              borderColor: '#64ffda',
              boxShadow: '0 8px 25px rgba(100, 255, 218, 0.12)',
            }
          }}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4, lg: 5 } }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#a8b2d1',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem', xl: '1.125rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0em',
                  textAlign: 'justify'
                }}
              >
                Passionate about continuous improvement, staying up to date on product offerings and features, and building strong rapport with team members, management and clients to facilitate efficiency and productivity. I believe in the power of automation and AI to transform testing processes and deliver high-quality software solutions.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
