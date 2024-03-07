import { Box, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Call } from "@mui/icons-material";
export const LogoAndContact = () => {
  return (<>
    <Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        paddingY:{ xl: 1, xs:0 },
        paddingX: { xl: 5, xs:3 }, // Remove padding for xs (extra-small) and set padding to 0 for md (medium) and larger breakpoints
        justifyContent: 'space-between',
        alignItems: 'center', // Corrected typo from alignItem to alignItems
      }} >
        <Box display='flex'>
          <Box sx={{ display: "flex", width: '100 vw', height: {xl:"10vh", xs:"7vh"}, alignItem: "center" }}>
            <img
              style={{ flex: '1', width: '100%', height: '100%' }}
              src="./images/iukd_logo.jpg"
              alt="Image 1"
            />
          </Box>
          {/* <Box sx={{ display:"flex", alignItem:"bottom",width: '12 vw', height: '12vh'}} style={{alignItem:"bottom"}}>
            <img
              style={{ flex: '1', width: '100%', height: '80%' }}
              src="./images/iukdspelling.webp"
              alt="Image 2"
            />
          </Box> */}
        </Box>
        <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
          <Typography fontSize={20} ><Call sx={{ fontWeight: "bold", fontSize: "30px" }} />8822721671</Typography>
          <Typography fontSize={21} fontWeight='bold'>Book an Appoinment</Typography>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          // onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
      </Box>
    </Box>
  </>)
}