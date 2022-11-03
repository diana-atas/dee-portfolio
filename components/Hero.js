import { Box, Typography, Grid, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import Header from './Header'
import Footer from './Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const HeroLayout = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  height: '100vh',
  width: '100%',

  // [theme.breakpoints.up('sm')]: {
  //   height: '80vh',
  //   minHeight: 500,
  //   maxHeight: 1300,
  // },
}))

const Hero = () => {
  return (
    <HeroLayout>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              minHeight: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
              // border: '5px solid green',
            }}
          >
            <Header />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              // border: '5px solid green',
            }}
          >
            <Box
              sx={{
                width: '50%',
                height: 200,
                padding: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #fff',
                position: 'absolute',
              }}
            >
              <Typography variant="h1" component="h1" align="center">
                dee atas
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                mt: 25,
                // border: '5px solid blue',
                color: '#000',
                backgroundColor: '#fff',
              }}
            >
              <Typography variant="h5" component="h2" align="center">
                full stack developer
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              mt: 10,
              position: 'absolute',
              zIndex: '99',
            }}
          >
            <Stack direction="row" spacing={1}>
              <a href="https://www.linkedin.com/in/diana-atas" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/diana-atas" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              minHeight: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              // border: '5px solid green',
            }}
          >
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </HeroLayout>
  )
}

export default Hero
