import { AppBar, Box, Toolbar, Stack } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const NavStyles = styled(AppBar)(({ theme }) => ({
  color: theme.palette.common.white,
  background:
    'linear-gradient(90deg, rgba(123,31,162,1) 0%, rgba(59,23,84,0.5) 50%, rgba(123,31,162,1) 100%)',
  zIndex: '99',
  fontFamily: 'Exo',
  textTransform: 'uppercase',
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
      <Toolbar disableGutters>
        <Stack direction="row" spacing={2} flexGrow={1} ml={3}>
          <Link href="/">Home</Link>
          <Link href="portfolio">CV</Link>
          <Link href="#">Projects</Link>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="flex-end" mr={3}>
          <a href="https://www.linkedin.com/in/diana-atas" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/diana-atas" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Stack>
      </Toolbar>
    </NavStyles>
  )
}

export default Header
