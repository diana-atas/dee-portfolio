// overrides MUI's default theme settings

import { createTheme, responsiveFontSizes } from '@mui/material'

export let theme = createTheme({
  palette: {
    primary: {
      main: '#fcba03',
      mode: 'dark',
    },
  },
})

theme = responsiveFontSizes(theme)
