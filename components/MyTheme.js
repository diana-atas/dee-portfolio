import { createTheme, responsiveFontSizes } from '@mui/material'

let MyTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

MyTheme = responsiveFontSizes(MyTheme)

export default MyTheme
