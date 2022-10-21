import { Container, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSpring, animated } from 'react-spring'

const HeroLayout = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  // position: 'relative',
  // display: 'flex',
  // alignItems: 'center',
  // height: '100%',
  // width: '100%',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}))

const ScrollingBg = styled('div')({
  '@keyframes slide': {
    '0%': {
      transform: 'translate(0,0)',
    },
    '100%': {
      transform: 'translate(0,-4096px)',
    },
  },
  position: 'absolute',
  height: 8192,
  width: 2048,
})

const FloatingKitty = styled('div')({
  background: 'url(/images/kitty1.png)',
  width: '5%',
  zIndex: '98',
})

const Hero = () => {
  const kitty1 = useSpring({
    loop: { reverse: true },
    config: { duration: 10000 },
    from: { rotateZ: 0, x: 0 },
    to: { rotateZ: 180, x: 1000, y: 100 },
  })
  return (
    <HeroLayout>
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          zIndex: '99',
          border: '5px solid black',
        }}
      >
        <Typography variant="h1" component="h1" align="center">
          Dee Atas
        </Typography>
        <Typography variant="h2" component="h2" align="center">
          Full Stack Developer
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',

          // alignItems: 'center',
          // justifyContent: 'center',
          // display: 'flex',
          // flexDirection: 'column',
          zIndex: '98',
        }}
      >
        <animated.img src="/images/kitty1.png" style={kitty1} width="5%" />

        {/* <FloatingKitty /> */}
      </Box>

      <Container
        sx={{
          overflow: 'hidden',
          height: '100vh',
          position: 'relative',
          border: '5px solid red',
        }}
      >
        <ScrollingBg
          sx={{
            background: 'url(/images/hero-bg/bg1.png) repeat-y',
            animation: `slide 100s linear infinite`,
            zIndex: '-1',
          }}
        />
        <ScrollingBg
          sx={{
            background: 'url(/images/hero-bg/bg2.png) repeat-y',
            animation: `slide 70s linear infinite`,
            zIndex: '1',
          }}
        />
        <ScrollingBg
          sx={{
            background: 'url(/images/hero-bg/bg3.png) repeat-y',
            animation: `slide 70s linear infinite`,
            zIndex: '2',
          }}
        />
        <ScrollingBg
          sx={{
            background: 'url(/images/hero-bg/bg4.png) repeat-y',
            animation: `slide 100s linear infinite`,
            zIndex: '3',
          }}
        />
      </Container>
    </HeroLayout>
  )
}

export default Hero
