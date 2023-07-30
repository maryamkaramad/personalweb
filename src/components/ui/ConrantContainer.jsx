import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Typography } from '@mui/material'

const ConrantContainer = ({ children }) => {
    return (
        <Grid2 xs={12} md={9} sx={{ backgroundColor: 'secondary.main' }}>
            <Typography sx={{ textAlign: 'center' }}>صفحه ی اصلی </Typography>
            {children}
        </Grid2>)
}

export default ConrantContainer