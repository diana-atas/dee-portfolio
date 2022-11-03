import { Container, Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Container>
      <Box
        mt={{ xs: 18, sm: 8 }}
        width={{ xs: '100%', sm: '80%' }}
        // flexDirection={{ xs: 'column', sm: 'row' }}
        sx={{
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: 3,
          // border: '5px solid blue',
          alignItems: 'start',
        }}
      >
        <Box
          mt={{ xs: -4, sm: -4 }}
          sx={{
            display: 'flex',
            // height: '100%',
            backgroundColor: '#fff',
            color: '#000',
            position: 'absolute',
            // alignItems: 'start',
            mt: -4,
            ml: 3,
          }}
        >
          <Typography component="h2" variant="h2">
            about
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '2px solid #fff',
            borderBottom: '2px solid #fff',
            padding: 3,
            mb: 10,
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
      </Box>
    </Container>
  )
}

export default About
