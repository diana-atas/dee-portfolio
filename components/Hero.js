import { Container, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

// const HeroLayout = styled('div')(({ theme }) => ({
//   color: theme.palette.common.white,
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   // height: '100%',
//   // width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     height: '80vh',
//     minHeight: 500,
//     maxHeight: 1300,
//   },
// }))

const ScrollingBg1 = styled('div')({
  '@keyframes slide': {
    '0%': {
      transform: 'translate(0,0)',
    },
    '100%': {
      transform: 'translate(0,-4096px)',
    },
  },
  background: 'url(/images/hero-bg/bg1.png) repeat-y',
  height: 8192,
  width: 2048,
  animation: `slide 10s linear infinite`,
})

const Hero = () => {
  return (
    // <HeroLayout>
    <Container
      sx={{ overflow: 'hidden', height: '100vh' }}
      // sx={{
      //   mt: 3,
      //   mb: 14,
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      // }}
    >
      <ScrollingBg1>
        <Box sx={{ position: 'absolute' }}>
          <Typography variant="h1" component="h1">
            D Atas
          </Typography>
          <Typography variant="h2" component="h2">
            Full Stack Developer
          </Typography>
        </Box>
      </ScrollingBg1>
    </Container>
    // </HeroLayout>
  )
}

export default Hero
