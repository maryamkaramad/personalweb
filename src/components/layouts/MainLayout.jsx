import { ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { theme } from './../ui/theme'
import { Typography } from '@mui/material'

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
            <title>وب سایت شخصی یونس قربانی</title>
          </Helmet>
          <Grid2 container sx={{ height: '100vh' }}>
            <Grid2 xs={2} sx={{ backgroundColor: 'primary.main' }}>
              <Typography sx={{ textAlign: 'center' }}>سایدبار</Typography>
            </Grid2>
            <Grid2 xs={10} sx={{ backgroundColor: 'secondary.main' }}>
              <Typography sx={{ textAlign: 'center' }}>صفحه ی اصلی </Typography>
            </Grid2>
          </Grid2>
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout
