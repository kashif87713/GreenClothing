import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './services.module.css';
import DoneIcon from '@mui/icons-material/Done';
import Image from "next/image";
import img from '../../Images/GIRL.jpg'
import img1 from '../../Images/clo.png'



export default function index() {
    return (
        <>
            <Box className={styles.services} >
                <Container>
                    <Box className={styles.head} >
                        <Typography variant='h3' ><b>Services</b></Typography>
                        <br />
                        <Typography><b>Home / Services</b> </Typography>
                    </Box>
                </Container>
            </Box>

            <Box className={styles.service}  >
                <Container>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4} >

                            <Typography><b>DESIGN & PRODUCT DEVELOPMENT</b> </Typography>
                            <br />
                            <Typography className={styles.header} >Design for all ages, size & gender.</Typography>
                            <br />
                            <br />
                            <Box className={styles.text} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Box className={styles.details} >
                                    <Typography>Product design , research and innovation  are the cornerstone of our company, this  is what we do and what we are good at.</Typography>
                                </Box>
                            </Box>
                            <br />
                            <Box className={styles.text} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Box className={styles.details} >
                                    <Typography>Our design teams are based in New York,London, Barcelona & Melbourne providing our customers with design and market intelligence from around the globe..</Typography>
                                </Box>
                            </Box>
                            <br />
                            <Box className={styles.text} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Box className={styles.details} >
                                    <Typography>We have a state-of-the-art R&D centre creating beautiful production viable samples. We offer garment, graphic, print and fabric design.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box>
                                <Image src={img} className={styles.img} />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <Box className={styles.text} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Box className={styles.details} >
                                    <Typography>Product design , research and innovation  are the cornerstone of our company, this  is what we do and what we are good at.</Typography>
                                </Box>
                            </Box>
                            <br />
                            <Box className={styles.text} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Box className={styles.details} >
                                    <Typography>Our design teams are based in New York,London, Barcelona & Melbourne providing our customers with design and market intelligence from around the globe..</Typography>
                                </Box>
                            </Box>
                            <br/>
                            <Box>
                                <Image src={img1} />
                            </Box>
                            <br />
                            <Box className={styles.text} >
                                <Box className={styles.icon} ><DoneIcon /></Box>
                                <Box className={styles.details} >
                                    <Typography>We have a state-of-the-art R&D centre creating beautiful production viable samples. We offer garment, graphic, print and fabric design.</Typography>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
