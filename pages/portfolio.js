import Portfolio from '../components/Portfolio'

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

export default function PortfolioPage() {
  return (
    <PortfolioLayout>
      <Portfolio />
    </PortfolioLayout>
  )
}

export async function getServerSideProps(context) {
  await waitload(2)
  return {
    props: { dummy: 'dummy' },
  }
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
