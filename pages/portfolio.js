import Portfolio from '../components/Portfolio'

import {
  createTheme,
  responsiveFontSizes,
  styled,
  ThemeProvider,
} from '@mui/material/styles'

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

let theme = createTheme()
theme = responsiveFontSizes(theme)

export default function PortfolioPage() {
  return (
    <ThemeProvider>
      <PortfolioLayout>
        <Portfolio />
      </PortfolioLayout>
    </ThemeProvider>
  )
}
