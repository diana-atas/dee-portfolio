import { Box, Typography, Button, Stack, Link, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

import Header from './Header'
import Footer from './Footer'

const HeroLayout = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
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

// const Item = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   // textAlign: 'center',
//   color: theme.palette.common.white,
// }))
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
          <Box sx={{ minHeight: '100%' }}>
            <Typography variant="h1" component="h1" align="center">
              Dee Atas
            </Typography>
            <Typography variant="h2" component="h2" align="center" mb={3}>
              Full Stack Developer
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              minHeight: '100%',
              display: 'flex',
              // alignItems: 'flex-end',

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
