import React from 'react'
import { Box } from '@mui/system';
import styles from './about.module.css'
import { Typography, Container, Grid } from '@mui/material';
import Mission from '../../Components/Mission/Mission';
import Vision from '../../Components/Vision/Vision';
import Target from '../../Components/Target/Target';
export default function About() {
    return (
        <>
            <Box className={styles.about} id='/aboutUs' >
                <Container>
                    <Box className={styles.abouthead} >
                        <Typography className={styles.h1} ><b>About Us</b></Typography>
                        <Typography><b>Home /  About Us</b></Typography>
                    </Box>
                </Container>
            </Box>
            <Container>
                <Box className={styles.aboutdetail} >
                    <br />
                    <Grid container >
                        <Grid item xs={12} sm={12} md={6} lg={6} >

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <Typography variant="h4" ><b>About Us</b></Typography>
                            <br />
                            <br />
                            <Typography className={styles.text} >We are top leaders in creating innovation in garment design, developing unique fabric and manufacturing of knitting apperal products right from basic to highly fashioned garments thus responding to emerging trends in the industry .
    <br />
                                <br />
                                <ul>
                                    <li>We produce knitwear Tops and bottoms for man, women and kids . </li>
                                    <li>Working to establish join life Environmental Sustainability . </li>
                                    <li>Our sampling department produce more than 500 new customized styles per month which we offer to our value customers . </li>
                                    <li>Research and development department produce more than 200 fabrics every month . </li>
                                    <li>Team consists of both local and international professionals . </li>
                                    <li>We provide end to end supply chain solution to the fqashion industry . </li>
                                </ul>
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
            <br />
            <br />
            <br />
            <Mission />
            <br />
            <br />
            <br />
            <Vision />
            <br />
            <br />
            <br />
            <Target />
            <br />
            <br />
            <br />
        </>
    )
}
