import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import styles from './about.module.css';
import Image from "next/image";
import img from '../../Images/finshing.jpeg'




export default function About() {
    return (
        <Box className={styles.about} >
            <Container>
                <Grid container >
                    <Grid item xs={12} sm={12} md={8} lg={8} >
                        <Box>
                            <h6 className={styles.abouthead} ><b>We have always been design and product Led.</b></h6>
                            <p className={styles.text} >Green clothing is a privately owned, family business formed in 2019. Today we are Pakistan’s leading sustainable apparel manufacturers offering total product solutions to the fashion industry.
                           <br />
                                We are a vertical manufacturer with facilities in Lahore, and with sales and deisign teams strategically placed around the globe to clear for your apparel requirements.</p>
                        </Box>
                        <br />
                        <Grid container >
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <Box className={styles.text1} >
                                    <Typography>1 million unit P/M capacity </Typography>
                                    <Typography>Achieved Carbon Neutral Factory 2021</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <Box className={styles.text1} >
                                    <Typography>30 Day Fast Track Production Service </Typography>
                                    <Typography>7–14 Day Sample Service</Typography>
                                    <Typography>200 Samples P/M Capacity</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>

<Grid xs={12} sm={12} md={4} lg={4} >
<Image src={img} className={styles.img} />
</Grid>
                </Grid>
            </Container>
        </Box>
    )
}
