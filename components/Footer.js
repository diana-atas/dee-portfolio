import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const FooterStyles = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
}))

const Footer = () => {
  return (
    <FooterStyles>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: '99',
          mb: 3,
        }}
      >
        <Typography align="center">
          This portfolio was built with Next.js, Material UI and react-spring.
        </Typography>
      </Box>
    </FooterStyles>
  )
}

export default Footer
