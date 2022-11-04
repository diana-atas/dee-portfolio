import { Box, styled, Typography } from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction'
import Header from './Header'

const PortfolioLayout = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '2px solid green',
}))

const Portfolio = () => {
  return (
    <PortfolioLayout>
      <Header />
      <Box align="center">
        <ConstructionIcon fontSize="large" />
        <Typography variant="h4" component="h4">
          This page is under construction.
        </Typography>
      </Box>
    </PortfolioLayout>
  )
}

export default Portfolio
