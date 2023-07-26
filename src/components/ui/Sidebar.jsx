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
        {/* برای حذف کردن از پایین تر از md */}
        <Hidden mdDown>
          <Avatar
            src={require('../../assets/download.png')}
            variant='rounded'
            sx={{ height: 100, width: 100, margin: '0 auto' }}
          />
        </Hidden>

        <Typography variant='h5'>مریم کارامد</Typography>
        <Typography variant='h6'>برنامه نویس فرانت</Typography>
      </Box>
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


      >
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          iconPosition="start"

        />

        <Tab
          label="درباره من"
          icon={<FaceRounded />}
          iconPosition="start"
        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
        />
        <Tab
          label="نمونه کارها"
          icon={<TerminalRounded />}
          iconPosition="start"
        />
        <Tab
          label="نظرات دانشجویان"
          icon={<MessageRounded />}
          iconPosition="start"
        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
          iconPosition="start"
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
