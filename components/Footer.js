import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const FooterStyles = styled(Box)(({ theme }) => ({
  // color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
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
