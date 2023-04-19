import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './vision.module.css'

export default function Vision() {
    return (
        <Box className={styles.mission} >
            <Container>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography className={styles.missionhead} ><b>Our Vision</b></Typography>
                        <br />
                        <br />
                        <Typography>
                            <ul>
                                <li>Our mission is to be dynamic and growth-oriented company by providing good service and quality products to its customers, A secure and friendly environment place of work to it employees and to project Pakistan's Image In international market .    .  </li>
                                <br />
                                <li>
                                   Maintain strategic relation with renowned Textile Companies/Organization in the world, for development of the apperal product . 
            </li>
                                <br />
                                <li>
                                    With excellent and mutual benifits of all our stake holders, we want to make the world a better place to live in . 
            </li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
