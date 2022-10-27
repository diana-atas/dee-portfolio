import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NavStyles = styled('div')(({ theme }) => ({
  // color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  zIndex: '99',
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
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <Link href="/">Home</Link>
        <Link href="portfolio">About</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Qualification</Link>
      </Stack>
    </NavStyles>
  )
}

export default Header
