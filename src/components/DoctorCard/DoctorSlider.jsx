
// ImageSlider.jsx
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ArupKumarNath } from './ArupKumarNath';
import { Grid } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const boxes = [<ArupKumarNath name="Dr. Arup Kumar Nath" qualification="MS, MCh (UROLOGY)" description="Chairman, Managing Director & Head of Urology. Trained in Laser Prostrate Surgery (Milan, Italy)" image="./images/DoctorImages/arup.jpg"/>, 
<ArupKumarNath name="Dr. Debajit Baishya" qualification="MS, MCh (UROLOGY)" description="Consultant Urologist , Head of IUKD stone clinic. LASER Stone Surgeon" image="./images/DoctorImages/debajit.jpg"/>,
<ArupKumarNath name="Dr. Barun Kumar" image="./images/DoctorImages/barunkumar.jpg" qualification="MS, MCh (UROLOGY)" description="Consultant Urologist , Robotic & Uro-OncoSurgeon"/>, 
<ArupKumarNath name="Dr. Sumit Kabra" image="./images/doctor_image.webp" qualification="MS, MCh (UROLOGY)" description="Consultant Urologist , Reconstructive & Kidney Transplant Surgeon"/>, 
<ArupKumarNath name="Dr. Anup Dutta Baruah" image="./images/DoctorImages/anupdatta.jpg" qualification="MS, MCh (UROLOGY)" description="Consultant Urologist , Andrologist & Sexologist"/>,
<ArupKumarNath name="Dr. Haren Bordoloi" image="./images/doctor_image.webp" qualification="MS, MCh (UROLOGY)" description="Consultation Lap. & General Surgeon"/>];

function ImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = boxes.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
      >
        {boxes.map((step, index) => (
          <div key={index}>
            <Grid container spacing={5} paddingX={5} >
              {[1,2,3,4].map((value, innerindex)=>(<Grid key={index} item lg={3} >
                  <Box
                    sx={{
                      // height: '80vh',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      backgroundColor: 'white',
                      fontSize: '24px',
                      width:"100%"
                    }}
                  >
                    {boxes[((index+innerindex)%boxes.length)]}
                  </Box>
                </Grid>))}
            </Grid>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );}

export default ImageSlider;
