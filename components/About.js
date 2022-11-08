import { Container, Box, Typography, Paper } from '@mui/material'
import { theme } from '../utils/theme'

const titleColor = theme.palette.primary.main

const About = () => {
  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          width: { xs: '100%', sm: '80%' },
          position: 'relative',
          padding: { xs: 1, sm: 3 },
          mt: 15,
        }}
      >
        <Box>
          <Typography component="h2" variant="h2" color={titleColor}>
            about
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: `2px solid ${titleColor}`,
            // borderBottom: '2px solid #fff',
            mt: 1,
            padding: 2,
            // mb: 10,
          }}
        >
          <Box sx={{ pb: 3 }}>
            <Typography variant="body1" align="justify">
              After a decade of data processing and number crunching in the
              employee insurance industry using Excel, I sought to expand my
              problem-solving and analytical skills further. I have ventured
              into building software that is meaningful, artistic, and
              accessible, and never turned back. I love to learn. I appreciate
              knowledge and the value of having to collaborate and share that
              with others.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" align="justify">
              When I'm not coding, I have an assortment of activities on
              different days to keep fit: running, road cycling, a bit of yoga
              or some bouldering. My family and I are also snowboarding amateurs
              and love to play in the snow whenever we get the chance.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default About
