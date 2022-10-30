import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { theme } from '../utils/theme'
import createEmotionCache from '../utils/createEmotionCache'
import { CacheProvider } from '@emotion/react'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="xl"
          disableGutters="true"
          // sx={{ border: '5px solid green' }}
        >
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </Container>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
