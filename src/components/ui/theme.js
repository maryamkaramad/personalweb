import { createTheme } from '@mui/material/styles'
import { blue, red } from '@mui/material/colors'

//NOTE Create Custom Theme
export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#9C27B0'
    },
    secondary: {
      main: '#7C4DFF'
    }
  },
  typography: {
    fontFamily: 'vazir, roboto'
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`
          }
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`
          }
        }
      ]
    }
  }
})
