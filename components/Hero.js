import { Box, Typography, Grid, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import Header from './Header'
import Footer from './Footer'

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
      <Header />

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          // border: '5px solid green',
        }}
      >
        <Box
          width={{ xs: '70%', sm: '40%' }}
          sx={{
            // width: '40%',
            height: 150,
            padding: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #fff',
            borderRadius: 1,
            position: 'absolute',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            // color="#f4d35e"
          >
            dee atas
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            mt: 20,
            // border: '5px solid blue',
            color: '#000',
            backgroundColor: '#fff',
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" component="h2" align="center">
            full stack developer
          </Typography>
        </Box>
      </Box>

      <Footer />
    </HeroLayout>
  )
}

export default Hero
