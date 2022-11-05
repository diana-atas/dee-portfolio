import Header from './Header'
import About from './About'
import Experience from './Experience'
import Qualification from './Qualification'

import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { Box, Grid } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import { styled, ThemeProvider } from '@mui/material/styles'

const PortfolioLayout = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
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

const Portfolio = () => {
  // const parallax = useRef<IParallax>(null!)
  const parallax = useRef()
  return (
    <PortfolioLayout>
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
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              backgroundImage: 'url(/images/portfolio-bg/pbg1o2.png)',
              backgroundSize: 'cover',
            }}
          />

          {/* <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              backgroundImage: 'url(/images/portfolio-bg/pbg2o2.png)',
              backgroundSize: 'cover',
            }}
          /> */}

          {/* <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: 'url(/images/portfolio-bg/pbgstars.png)',
              backgroundSize: 'cover',
            }}
          /> */}

          {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ opacity: 0.1 }}>
            <Box
              component="img"
              alt=""
              src="/images/portfolio-bg/pbgorangeplanet.png"
            />
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.5 }}>
            <Box
              component="img"
              alt=""
              src="/images/portfolio-bg/pbgmintplanet.png"
              style={{ display: 'block' }}
            />
            <Box
              component="img"
              alt=""
              src="/images/portfolio-bg/pbgtinymintplanets.png"
            />
          </ParallaxLayer> */}
        </Parallax>

        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                minHeight: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <Header />
            </Box>
          </Grid>
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
    </PortfolioLayout>
  )
}

export default Portfolio
