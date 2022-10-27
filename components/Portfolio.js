import Header from './Header'
import About from './About'
import Experience from './Experience'
import Qualification from './Qualification'

import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { Box } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import { styled, ThemeProvider } from '@mui/material/styles'

const PortfolioLayout = styled('div')(({ theme }) => ({
  // color: theme.palette.common.white,
  position: 'relative',
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}))

const Portfolio = () => {
  // const parallax = useRef<IParallax>(null!)
  const parallax = useRef()
  return (
    // <PortfolioLayout>
    <Box sx={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundImage: 'url(/images/portfolio-bg/pbg1.png)',
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            backgroundImage: 'url(/images/portfolio-bg/pbg1o2.png)',
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: 'url(/images/portfolio-bg/pbgstars.png)',
            backgroundSize: 'cover',
          }}
        />
      </Parallax>
      <Header />
      <About />
      <Experience />
      <Qualification />
    </Box>
    // </PortfolioLayout>
  )
}

export default Portfolio
