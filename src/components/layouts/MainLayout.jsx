import { ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { theme } from './../ui/theme'


//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})

const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی </title>
          </Helmet>
          <Grid2 container sx={{ height: '100vh' }}>
            {children}
          </Grid2>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout
