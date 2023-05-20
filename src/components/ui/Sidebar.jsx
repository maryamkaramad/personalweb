import React from 'react'
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
const Sidebar = () => {
  return (
    <Grid2 xs={0} md={3} sx={{ backgroundColor: 'primary.main' }}>
      <Typography sx={{ textAlign: 'center' }}>سایدبار</Typography>
    </Grid2>
  )
}

export default Sidebar
