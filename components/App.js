import { Routes, Route, Link } from 'react-router-dom'
import { styled } from '@mui/material'

const HeroLayout = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  height: '100%',
  width: '100%',

  // [theme.breakpoints.up('sm')]: {
  //   height: '80vh',
  //   minHeight: 500,
  //   maxHeight: 1300,
  // },
}))

const App = () => {
  return (
    <HeroLayout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
      </Routes>
    </HeroLayout>
  )
}

export default App
