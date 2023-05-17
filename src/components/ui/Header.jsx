import { cloneElement } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles'

import logo from '../../assets/logonomy-removebg-preview.png'

const Header = () => {
  function ElevationScroll (props) {
    const { children } = props

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    })

    return cloneElement(children, {
      elevation: trigger ? 4 : 0
    })
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position='static'>
          <Toolbar disableGutters>
            {/* <Typography variant="h4">وب سایت شخصی</Typography> */}
            {/* <CustomizedButton variant="dashed" color="secondary"> */}
            {/*   کلیک کن */}
            {/* </CustomizedButton> */}
            {/* <Button variant="contained">کلیک دیوم</Button> */}
            <img alt='لوگوی وب سایت' src={logo} style={{ width: '3rem' }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default Header
