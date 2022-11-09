import { Container, Box, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

import { theme } from '../utils/theme'

const titleColor = theme.palette.primary.main

const QualName = styled(Box)(({ theme }) => ({
  border: '1px solid #fff',
  borderRadius: 1,
  padding: 1,
  marginBottom: 5,
}))

const Qualification = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        my: 10,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: '100%', sm: '80%' },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 1, sm: 3 },
          alignItems: 'start',
          // border: '2px solid green',
        }}
      >
        <Box>
          <Typography component="h2" variant="h2" color={titleColor}>
            qualification
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: `2px solid ${titleColor}`,
            padding: 2,
            mt: 1,
          }}
        >
          <QualName>
            <Typography component="h3" variant="h4">
              Level 6 Web Development Training Scheme
            </Typography>
            <Typography component="h4" variant="h6">
              Dev Academy Aotearoa
            </Typography>
            <Typography component="h4" variant="h6">
              April 2022 - July 2022
            </Typography>
          </QualName>

          <QualName>
            <Typography component="h3" variant="h4">
              AWS Certified Cloud Practitioner
            </Typography>
            <Typography component="h4" variant="h6">
              Amazon Web Services
            </Typography>
            <Typography component="h4" variant="h6">
              October 2022 - October 2025
            </Typography>
          </QualName>
          <Typography variant="body1" align="justify">
            Participated in the Hāpori Wāhine She Builds CloudUp Program, a
            4-week, flexible virtual bootcamp style training program designed to
            kickstart cloud learning journey for women in New Zealand.
          </Typography>

          <QualName>
            <Typography component="h3" variant="h4">
              Certificate in Science and Technology
            </Typography>
            <Typography component="h4" variant="h6">
              Massey University
            </Typography>
            <Typography component="h4" variant="h6">
              February 2021 - December 2021
            </Typography>
          </QualName>

          <Typography variant="body1" align="justify">
            Completed programming courses using C++, applied statistics using
            Excel and RStudio, and web-based application development using
            ASP.NET MVC and C#.
          </Typography>

          <QualName>
            <Typography component="h3" variant="h4">
              Bachelor of Science in Business Administration
            </Typography>
            <Typography component="h4" variant="h6">
              Holy Angel University, Philippines
            </Typography>
            <Typography component="h4" variant="h6">
              June 1999 - November 2003
            </Typography>
          </QualName>
        </Box>
      </Paper>
    </Container>
  )
}

export default Qualification
