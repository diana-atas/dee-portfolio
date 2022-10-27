import About from './About'
import { useSpring, animated } from 'react-spring'
import { styled, ThemeProvider } from '@mui/material/styles'

const PortfolioLayout = styled('div')(({ theme }) => ({
  // color: theme.palette.common.white,
  position: 'relative',
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}))

const Portfolio = () => {
  return (
    <PortfolioLayout>
      <About />
    </PortfolioLayout>
  )
}

export default Portfolio
