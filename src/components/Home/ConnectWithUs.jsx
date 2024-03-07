import { Box, Typography } from "@mui/material"
import YouTubeVideo from "./YouTubeVideo"
// import GoogleMaps from "./GoogleMap"

const useOpenLinkInNewTab = (link) => {
    const openLinkInNewTab = () => {
      window.open(link, '_blank');
    };
  
    return openLinkInNewTab;
  };
export const ConnectWithUs = () => {
    const videoId = 'NFUc-OEgixI'
    const openLinkInNewTab = useOpenLinkInNewTab('https://liveradios.in/air-guwahati.html');
    return(<>
        <Box paddingY={6} paddingX={4}>
            <Typography variant="h4">Connect With Us</Typography>
            <img src="posts/live_program_070324.jpg" style={{display:"flex", width:"20%", cursor:"pointer", marginTop:"20px"}} onClick={openLinkInNewTab}/>
            {/* <YouTubeVideo videoId={videoId} /> */}
            {/* <GoogleMaps/> */}
        </Box>
    </>)
}