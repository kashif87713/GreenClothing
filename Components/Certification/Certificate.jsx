import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import styles from './certifcate.module.css';
import Image from "next/image";
import img from '../../Images/Bsci.png'
import img1 from '../../Images/global.png'
import img2 from '../../Images/gots.png'
import img3 from '../../Images/Oeko.png'
import img4 from '../../Images/organic.png'
import img5 from '../../Images/sebex.png'




export default function Certificate() {
    return (
        <Box className={styles.certif} >
            <Container>
                <Typography className={styles.text}><b>THE ENVIRONMENT</b> </Typography>
                <br />
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <p className={styles.head} ><b>We are on the front line in the battle with global warming.</b></p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography className={styles.head2}  >Our own manufacturing facilities have achieved carbon neutral status, and this is supported by a robust plan to continually work to reduce our gases.</Typography>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container >
                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Box className={styles.box} >
                            <Image src={img} className={styles.img} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Box className={styles.box} >
                            <Image src={img1} className={styles.img} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Box className={styles.box} >
                            <Image src={img2} className={styles.img} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Box className={styles.box} >
                            <Image src={img3} className={styles.img} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Box className={styles.box} >
                            <Image src={img4} className={styles.img} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2} >
                        <Box className={styles.box} >
                            <Image src={img5} className={styles.img} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
