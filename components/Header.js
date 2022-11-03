import { AppBar, Box, Toolbar, Stack } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHouse,
  faCircleInfo,
  faRocket,
} from '@fortawesome/free-solid-svg-icons'

const NavStyles = styled(AppBar)(({ theme }) => ({
  color: theme.palette.common.white,
  background:
    'linear-gradient(90deg, rgba(123,31,162,1) 0%, rgba(59,23,84,0.5) 50%, rgba(123,31,162,1) 100%)',
  zIndex: '99',
  fontFamily: 'Exo',
  textTransform: 'uppercase',
  display: 'flex',
  justifyContent: 'center',
}))

const iconStyle = {
  // border: '1px solid #fff',
  // borderRadius: '0.25em',
  padding: '0.25em',
}

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
        <Stack direction="row" spacing={1} flexGrow={1} ml={2}>
          <Link href="/">
            {/* <FontAwesomeIcon icon={faHouse} style={iconStyle} fixedWidth /> */}
            <FontAwesomeIcon icon={faHouse} size="lg" cursor="pointer" />
          </Link>
          <Link href="portfolio">
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="lg"
              cursor="pointer"
              title="View my CV"
            />
          </Link>
          <Link href="#">
            <FontAwesomeIcon
              icon={faRocket}
              size="lg"
              cursor="pointer"
              title="See what I'm working on"
            />
          </Link>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="flex-end" mr={2}>
          <a href="https://www.linkedin.com/in/diana-atas" target="_blank">
            {/* <FontAwesomeIcon icon={faLinkedin} fixedWidth /> */}
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              title="Connect with me on LinkedIn"
            />
          </a>
          <a href="https://github.com/diana-atas" target="_blank">
            {/* <FontAwesomeIcon icon={faGithub} fixedWidth /> */}
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              title="Follow me on GitHub"
            />
          </a>
        </Stack>
      </Toolbar>
    </NavStyles>
  )
}

export default Header
