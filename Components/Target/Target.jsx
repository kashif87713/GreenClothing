import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './target.module.css'

export default function Target() {
    return (
        <Box className={styles.mission} >
            <Container>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography className={styles.missionhead} ><b>Target</b></Typography>
                        <br />
                        <br />
                        <Typography>
                            <ul>
                                <li> To achieve the best effeiciency in our  production with a consistent batter quality and on time delivery . </li>
                               <br/>
                               <li>The quality control and testing procedures that are in place ensure only perfect garments leave the factory premises .</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
