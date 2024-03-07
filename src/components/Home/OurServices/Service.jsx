import { Box, Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Service = (props) => {
    let Navigate=useNavigate();
    return(<>
        <Grid item  lg={4}  >
            <Box display='flex' flexDirection='column' border='2px darkgreen solid' borderRadius='8px' height="50vh" boxShadow="8px 3px 10px gray" padding={5}>
                <img src={`images/${props.icon}`}style={{display:"flex", width:"80px", height:"80px"}}/>
                <Typography variant="h5" marginTop={2} marginBottom={4}>{props.service}</Typography>
                <Typography> Experience exceptional care for Urological conditions with our advanced Endo Urological Surgeries. Utilizing minimal invasive...</Typography>
                <Button variant="contained" color="success" onClick={()=>Navigate(props.navigate)}>Leaen More</Button>
            </Box>
        </Grid>
    </>)
}