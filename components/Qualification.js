import { Container, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const QualName = styled(Box)(({ theme }) => ({
  border: '1px solid #fff',
  borderRadius: 1,
  padding: 1,
  marginBottom: 5,
}))

const Qualification = () => {
  return (
    <Container
    // sx={{
    //   display: 'flex',
    //   position: 'relative',
    //   flexDirection: 'column',
    //   alignItems: 'end',
    // }}
    >
      <Box
        mt={{ xs: 18, sm: 8 }}
        width={{ xs: '100%', sm: '80%' }}
        sx={{
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: 3,
          alignItems: 'start',
          // mt: -4,
          // border: '2px solid green',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#fff',
            color: '#000',
            ml: 3,
            mt: -4,
            position: 'absolute',
          }}
        >
          <Typography component="h2" variant="h2">
            qualification
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
      </Box>
    </Container>
  )
}

export default Qualification
