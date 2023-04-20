import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './mission.module.css'

export default function Mission() {
    return (
        <Box className={styles.mission} >
            <Container>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography className={styles.missionhead} ><b>Our Mission</b></Typography>
                        <br />
                        <br />
                        <Typography>
                            <ul>
                                <li>As part of our total Quality Management philosphy, we continuously search for options to give the best prices & quality with lean system production
                                to our value customers and long term strategic partners .  </li>
                                <br />
                                <li>
                                    To strive Excellence through committment , integrity, honesty and teamwork
            </li>
                                <br />
                                <li>
                                    To develop and extremly motivated and professional trained workforce, which would drive growth through innovation and renovaation .
            </li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
