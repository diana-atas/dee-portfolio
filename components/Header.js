import { Box, Stack } from '@mui/material'
import Link from 'next/link'

const Header = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '99',
        mt: 2,
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} align="center">
        <Link href="/">Home</Link>
        <Link href="portfolio">About</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Qualification</Link>
      </Stack>
    </Box>
  )
}

export default Header
