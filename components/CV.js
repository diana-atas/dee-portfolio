import Header from './Header'
import About from './About'
import Experience from './Experience'
import Qualification from './Qualification'

import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { Box, Grid } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import { styled, ThemeProvider } from '@mui/material/styles'

const CVLayout = styled(Box)(({ theme }) => ({
  // color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  height: '100%',
  width: '100%',
  // border: '5px solid green',
  // maxWidth: 'xl',
  // [theme.breakpoints.up('sm')]: {
  //   height: '80vh',
  //   minHeight: 500,
  //   maxHeight: 1300,
  // },
}))

const CV = () => {
  return (
    <CVLayout>
      <Header />
      <Box
        sx={{
          maxWidth: 'xl',
          height: '100%',
          width: '100%',
          // background: '#253237',
          backgroundImage: 'url(/images/portfolio-bg/pbg1.png)',
          backgroundSize: 'cover',
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <About />
          </Grid>
          <Grid item xs={12}>
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <Qualification />
          </Grid>
        </Grid>
      </Box>
    </CVLayout>
  )
}

export default CV
