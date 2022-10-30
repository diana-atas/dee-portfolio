// overrides MUI's default theme settings

import { createTheme } from '@mui/material'
import '@fontsource/exo'
import '@fontsource/orbitron'

const fontHeader = {
  fontFamily: "'Orbitron', sans-serif",
}

const fontSubtitle = {
  fontFamily: "'Exo', sans-serif",
}

export const theme = createTheme({
  palette: {
    background: {
      default: '#3b1754',
    },
  },

  typography: {
    h1: {
      fontFamily: fontHeader.fontFamily,
      fontSize: '4rem',
    },
    h2: {
      fontFamily: fontHeader.fontFamily,
      fontSize: '3rem',
    },
    h3: {
      fontFamily: fontHeader.fontFamily,
      fontSize: '2.5rem',
    },
    h4: {
      fontFamily: fontHeader.fontFamily,
      fontSize: '2rem',
    },
    h5: {
      fontFamily: fontHeader.fontFamily,
    },
    h6: {
      fontFamily: fontHeader.fontFamily,
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: fontSubtitle.fontFamily,
    },
    subtitle2: {
      fontFamily: fontSubtitle.fontFamily,
    },
  },
})

// export default theme

// theme = responsiveFontSizes(theme)
