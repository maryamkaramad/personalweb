import { cloneElement } from 'react'
import { AppBar, Toolbar, useScrollTrigger } from '@mui/material'
import Logonomy from '../../assets/logonomy.jpeg.svg'
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
              style={{ width: '2.5rem', borderRadius: '5rem' }}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default Header
