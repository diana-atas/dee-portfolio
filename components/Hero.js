import { Box, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

import Header from './Header'
import Footer from './Footer'

const HeroLayout = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  height: '100vh',
  width: '100%',
  // border: '5px solid green',

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
              alignItems: 'top',
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
                width: '60%',
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #fff',
                position: 'absolute',
                // mb: -3,
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
