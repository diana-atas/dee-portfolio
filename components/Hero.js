import { Container, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

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

const Hero = () => {
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
        }}
      >
        <Typography variant="h1" component="h1" align="center">
          Dee Atas
        </Typography>
        <Typography variant="h2" component="h2" align="center">
          Full Stack Developer
        </Typography>
      </Box>

      <Container
        sx={{
          overflow: 'hidden',
          height: '100vh',
          position: 'relative',
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
