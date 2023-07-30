import React from 'react'
import { Avatar, Box, Divider, Hidden, Tab, Tabs, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";
import { grey } from '@mui/material/colors';
// import TabPanel from '@mui/lab/TabPanel';
const Sidebar = ({ handleChange, value }) => {
  // مرحله 1
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
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
        {/* برای حذف کردن از پایین تر از md */}
        <Hidden mdDown>
          <Avatar
            src={require('../assets/download.png')}
            variant='rounded'
            sx={{ height: 100, width: 100, margin: '0 auto' }}
          />
        </Hidden>

        <Typography variant='h5'>مریم کارامد</Typography>
        <Typography variant='h6'>برنامه نویس فرانت</Typography>
      </Box>
      {/* <TabPanel value="1">Item One</TabPanel> */}

      <Divider variant='middle' />
      {/* <Tabs variant='scrollable' orientation="vertical" scrollButtons="auto">
        <Tab label="خانه" icon={<HomeRoundedIcon />} iconPosition="start">
        </Tab>
      </Tabs> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButton="auto"
        allowScrollButtonsMobile
        // مرحله3
        value={value}
        onChange={handleChange}


      >
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          iconPosition="start"
          // مرحله 2
          {...a11yProps(0)}

        />

        <Tab
          label="درباره من"
          icon={<FaceRounded />}
          iconPosition="start"
          {...a11yProps(1)}

        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          {...a11yProps(2)}

        />
        <Tab
          label="نمونه کارها"
          icon={<TerminalRounded />}
          iconPosition="start"
          {...a11yProps(3)}

        />
        <Tab
          label="نظرات دانشجویان"
          icon={<MessageRounded />}
          iconPosition="start"
          {...a11yProps(4)}

        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
          iconPosition="start"
          {...a11yProps(5)}

        />
      </Tabs>

      <Divider variant="middle" color={grey.main} sx={{ mt: 2 }} />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{
              verticalAlign: "middle",
              color: "tomato",
              height: 20,
            }}
          />
        </Typography>

        <Typography
          variant="caption"
          color="whitesmoke"
          sx={{ mt: 2 }}
        >
          کپی رایت ۱۴۰۱{" "}
          <CopyrightRounded
            sx={{ verticalAlign: "middle", height: 16 }}
          />
        </Typography>
      </Box>
    </Grid2>
  )
}

export default Sidebar
