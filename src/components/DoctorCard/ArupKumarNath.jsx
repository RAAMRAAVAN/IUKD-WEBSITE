import { LocationCity, LocationOn } from "@mui/icons-material"
import { Box, Button, Grid, Typography } from "@mui/material"

export const ArupKumarNath = (props) => {
    return (<>
        <Grid item>
            <Box sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <img src={props.image} style={{ display: "flex", width: "100%" }} alt="./images/doctor_image.webp" width="385px" height="380px"/>
                <Box padding={2}>
                    <Typography color='black'><LocationOn sx={{ color: "red" }} />Guwahati</Typography>
                    <Box paddingY={2}>
                        <Typography fontWeight='bold' fontSize='16px' color='black'>{props.name}</Typography>
                        <Typography fontSize='16px' paddingY={1} color='black'>{props.qualification}</Typography>
                        <Typography fontSize='14px' color='black' height="10vh">{props.description}</Typography>
                    </Box>
                    <Button variant="contained" fullWidth sx={{ borderRadius: "0" }}>Book an Appoinment</Button>
                </Box>
            </Box>
        </Grid>
    </>)
}