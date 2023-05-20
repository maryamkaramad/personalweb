import { ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { theme } from './../ui/theme'
import { Typography } from '@mui/material'
import Sidebar from '../ui/Sidebar'

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
            <Sidebar />
            <Grid2 xs={12} md={9} sx={{ backgroundColor: 'secondary.main' }}>
              <Typography sx={{ textAlign: 'center' }}>صفحه ی اصلی </Typography>
              {children}
            </Grid2>
          </Grid2>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout
