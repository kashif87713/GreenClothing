import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import styles from './facilities.module.css';
import Image from "next/image";
import img from '../../Images/knitting.jpg';
import img1 from '../../Images/dying.jpg'
import img2 from '../../Images/fabric.jpg'
import img3 from '../../Images/pack.jpeg'
import img4 from '../../Images/machne.jpeg'
import img5 from '../../Images/fin.jpeg'
import img6 from '../../Images/packing.jpg'
import img7 from '../../Images/printing.jpg'
import img8 from '../../Images/emb.jpeg'
import img9 from '../../Images/finishing.jpg'






export default function Facilities() {
    return (
        <Box>
            <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Typography className={styles.faciltyhead}><b>Facilities we provide</b> </Typography>
                </Grid>
            </Grid>
            <br />
            <br />
            <Container>
                <Grid container className={styles.container} >
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Knitting</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img1} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Dying</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img2} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Fabric</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img7} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Printing</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img8} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Embriodary</b></Typography>
                            </center>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img3} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Cutting</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img4} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Sewing</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img5} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Finishing</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>

                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img9} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Ironing</b></Typography>
                            </center>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box className={styles.card} >
                            <Image src={img6} className={styles.img} />
                            <br />
                            <center>
                                <Typography><b>Packing</b></Typography>
                            </center>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
