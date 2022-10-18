import { Container, Box, Grid, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

// import bg1 from '../public/images/hero-bg/bg1.png'
// import bg2 from '../public/images/hero-bg/bg2.png'
// import bg3 from '../public/images/hero-bg/bg3.png'
// import bg4 from '../public/images/hero-bg/bg4.png'

const HeroLayout = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}))

const Background = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundImage: 'url(/images/hero-bg/bg1.png)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}))

const Hero = () => {
  return (
    <HeroLayout>
      <Container
      // sx={{
      //   mt:3,

      // }}
      >
        <Background>
          <Typography variant="h1" component="h1">
            D Atas
          </Typography>
          <Typography variant="h2" component="h2">
            Full Stack Developer
          </Typography>
        </Background>
      </Container>
    </HeroLayout>
  )
}

export default Hero
