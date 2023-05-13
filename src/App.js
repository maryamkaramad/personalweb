import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/system'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const theme = createTheme({
  direction: 'rtl'
})

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})
function App () {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>وبسایت شخصی من</title>
            </Helmet>
            <div>خوش آمدید</div>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default App
