import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NavStyles = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
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
      <Box
        sx={{
          position: 'absolute',
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: '99',
          mt: 3,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          align="center"
        >
          <Link href="/">Home</Link>
          <Link href="portfolio">About</Link>
          <Link href="#">Experience</Link>
          <Link href="#">Qualification</Link>
        </Stack>
      </Box>
    </NavStyles>
  )
}

export default Header
