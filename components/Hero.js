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

const Hero = () => {
  return (
    // <HeroLayout>
    <Container
    // sx={{
    //   mt: 3,
    //   mb: 14,
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // }}
    >
      <Typography variant="h1" component="h1">
        D Atas
      </Typography>
      <Typography variant="h2" component="h2">
        Full Stack Developer
      </Typography>
    </Container>
    // </HeroLayout>
  )
}

export default Hero
