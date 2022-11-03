import { AppBar, Box, Toolbar, Stack, Tooltip } from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import InfoIcon from '@mui/icons-material/Info'
import HomeIcon from '@mui/icons-material/Home'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const NavStyles = styled(AppBar)(({ theme }) => ({
  // color: theme.palette.common.white,
  // background:
  //   'linear-gradient(90deg, rgba(123,31,162,1) 0%, rgba(59,23,84,0.95) 50%, rgba(123,31,162,1) 100%)',
  zIndex: '99',
  fontFamily: 'Exo',
  textTransform: 'uppercase',
  // display: 'flex',
  // justifyContent: 'center',
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
        <Stack direction="row" spacing={1} flexGrow={1} ml={2}>
          <Link href="/">
            {/* <FontAwesomeIcon icon={faHouse} size="lg" cursor="pointer" /> */}
            <Tooltip title="Home">
              <HomeIcon cursor="pointer" />
            </Tooltip>
          </Link>
          <Link href="portfolio">
            <Tooltip title="View my CV">
              <InfoIcon cursor="pointer" />
            </Tooltip>
          </Link>
          <Link href="#">
            <Tooltip title="See what I'm working on">
              <RocketLaunchIcon cursor="pointer" />
            </Tooltip>
          </Link>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="flex-end" mr={2}>
          <a href="https://www.linkedin.com/in/diana-atas" target="_blank">
            <Tooltip title="Connect with me on LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Tooltip>
          </a>
          <a href="https://github.com/diana-atas" target="_blank">
            <Tooltip title="Follow me on GitHub">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Tooltip>
          </a>
        </Stack>
      </Toolbar>
    </NavStyles>
  )
}

export default Header
