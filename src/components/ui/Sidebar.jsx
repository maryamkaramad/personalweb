import React from 'react'
import { Avatar, Box, Divider, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
const Sidebar = () => {
  return (
    <Grid2 xs={0} md={3} sx={{ backgroundColor: 'grey.main' }}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          mt: 1,
          textAlign: 'center'
        }}
      >
        <Avatar
          src={require('../../assets/download.png')}
          variant='rounded'
          sx={{ height: 100, width: 100, margin: '0 auto' }}
        />
        <Typography variant='h5'>مریم کارامد</Typography>
        <Typography variant='h6'>برنامه نویس فرانت</Typography>
      </Box>
      <Divider variant='middle' />
    </Grid2>
  )
}

export default Sidebar
