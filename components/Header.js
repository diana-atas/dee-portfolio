import { AppBar, Box, Toolbar } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NavStyles = styled(AppBar)(({ theme }) => ({
  color: theme.palette.common.white,
  // backgroundColor: theme.palette.secondary.dark,
  background:
    //   'linear-gradient(90deg, rgba(186,104,200,0.5) 0%, rgba(123,31,162,1) 50%,  rgba(186,104,200,0.5) 100%)',
    'linear-gradient(90deg, rgba(186,104,200,0.5) 0%, rgba(123,31,162,1) 25%, rgba(123,31,162,1) 75%, rgba(186,104,200,0.5) 100%)',
  zIndex: '99',
  fontFamily: 'Exo',
  textTransform: 'uppercase',
  // backgroundColor: '#3b1754',
}))

const Header = () => {
  const router = useRouter()
  const aniStart = () => {
    console.log('Animation Start')
  }
  const aniEnd = () => {
    console.log('Animation End')
  }

  useEffect(() => {
    router.events.on('routeChangeStart', aniStart)
    router.events.on('routeChangeComplete', aniEnd)
    router.events.on('routeChangeError', aniEnd)

    return () => {
      router.events.off('routeChangeStart', aniStart)
      router.events.off('routeChangeComplete', aniEnd)
      router.events.off('routeChangeError', aniEnd)
    }
  }, [router])

  return (
    <NavStyles>
      <Toolbar
        disableGutters
        sx={{ justifyContent: 'center', display: 'flex' }}
      >
        <Box sx={{ mx: 1 }}>
          <Link href="/">Home</Link>
        </Box>
        <Box sx={{ mx: 1 }}>
          <Link href="portfolio">About</Link>
        </Box>
        <Box sx={{ mx: 1 }}>
          <Link href="#">Experience</Link>
        </Box>
        <Box sx={{ mx: 1 }}>
          <Link href="#">Qualification</Link>
        </Box>
      </Toolbar>
    </NavStyles>
  )
}

export default Header
