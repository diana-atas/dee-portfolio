import { Container, Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Container>
      <Box>
        <Typography component="h2" variant="h2">
          About
        </Typography>

        <Typography variant="body1" align="justify">
          After a decade of data processing and number crunching in the employee
          insurance industry using Excel, I sought to expand my problem-solving
          and analytical skills further. I have ventured into building software
          that is meaningful, artistic, and accessible, and never turned back. I
          love to learn. I appreciate knowledge and the value of having to
          collaborate and share that with others.
        </Typography>
        <Typography variant="body1" align="justify">
          When I'm not coding, I have an assortment of activities on different
          days to keep fit: running, road cycling, a bit of yoga or some
          bouldering. My family and I are also snowboarding amateurs and love to
          play in the snow whenever we get the chance.
        </Typography>
      </Box>
    </Container>
  )
}

export default About
