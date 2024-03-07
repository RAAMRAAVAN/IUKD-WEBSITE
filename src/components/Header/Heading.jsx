import { Box, Typography } from "@mui/material"
import { keyframes } from '@emotion/react';
import { Facebook } from "@mui/icons-material";
export const Heading = () => {
  const movingTextAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
  return (<>
    <Box>
      <Box
        display='flex'
        sx={{
          background: 'linear-gradient(to right, #0f5c33, #034220)',
          width: '100%',
          height: '5vh',
          paddingX:{xl:"0px", xs:"10px"},
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Facebook sx={{ color: 'white' }} />
        <Typography
          sx={{
            color: 'white',
            overflow: 'hidden',
            whiteSpace: 'nowrap', // Prevent text from wrapping to the second line
            fontSize: '12px',
          }}
          textAlign='center'
        >
          Center for Advanced Urology and Kidney Diseases is the only center in the entire North Eastern region of India dedicated only for Urological problems.
        </Typography>
      </Box>
    </Box>
  </>)
}