import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const FooterStyles = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  bottom: 0,
}))

const Footer = () => {
  return (
    <FooterStyles>
      <Typography component="body1" variant="body1" align="center">
        This portfolio was built with Next.js, Material UI and react-spring.
      </Typography>
    </FooterStyles>
  )
}

export default Footer
