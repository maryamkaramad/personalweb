import { cloneElement } from 'react'
import { AppBar, Toolbar, useScrollTrigger } from '@mui/material'
import Logonomy from '../../assets/logonomy-removebg-preview.png'
const Header = () => {
  function ElevationScroll (props) {
    const { children } = props

    const trigger = useScrollTrigger({
      disableHysteresis: false,
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
            <img
              src={Logonomy}
              alt='لوکو'
              style={{ width: '3rem', marginRight: 8, marginTop: 8 }}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default Header
