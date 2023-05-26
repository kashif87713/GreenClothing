import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Image from "next/image";
import styles from './pillar.module.css';


export default function index() {
    return (
        <>
            <Box className={styles.pillar} >
                <Container>
                    <Box className={styles.head} >
                        <Typography variant='h3' ><b>Business Pillars</b></Typography>
                        <br />
                        <Typography><b>Home / Our Partners</b> </Typography>
                    </Box>

                </Container>
            </Box>
            <br />
            <br />
            <br />
            <Box>
                <Container>
                    <Typography className={styles.pilarhead}><b>Business Pillars</b> </Typography>
                    <Grid container >
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <br />
                            <div className={styles.pilartext} >To operate with integrity and  to  service <br/> humanity.</div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <br />
                            <Typography className={styles.pilartext2} >We work both independently and in collaboration with customers buyers / designers ensuring our product is created using the best raw materials available </Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box className={styles.box} >
                                <center>
                                    <Typography className={styles.h1} >01</Typography>
                                    <br />
                                    <Typography><b>Multi product offer</b> </Typography>
                                    <br />
                                    <Typography className={styles.h2} >Product design, research and innovation are the cornerstone of our company, this is what we do and what we are good at.</Typography>
                                </center>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box className={styles.box} >
                                <center>
                                    <Typography className={styles.h1} >02</Typography>
                                    <br />
                                    <Typography><b>Fabric & Product Led</b> </Typography>
                                    <br />
                                    <Typography className={styles.h2} >We are experts at developing fabrics fit for purpose. Our key strength is luxury knitted heavyweight jerseywear, washed denims and casual wovens.</Typography>
                                </center>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box className={styles.box} >
                                <center>
                                    <Typography className={styles.h1} >03</Typography>
                                    <br />
                                    <Typography><b>Global Design Presence</b> </Typography>
                                    <br />
                                    <Typography className={styles.h2} >Our design teams are based in New York, London, Barcelona & Melbourne providing our customers with design and market intelligence from around the globe.</Typography>
                                </center>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box className={styles.box} >
                                <center>
                                    <Typography className={styles.h1} >04</Typography>
                                    <br />
                                    <Typography><b>Sustainability</b> </Typography>
                                    <br />
                                    <Typography className={styles.h2} >We continue to invest heavily in eco friendly technology to ensure our business and the products we supply have little or no impact on the planet. We work with multiple sustainable raw materials..</Typography>
                                </center>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box className={styles.box} >
                                <center>
                                    <Typography className={styles.h1} >05</Typography>
                                    <br />
                                    <Typography><b>Production Verticality</b> </Typography>
                                    <br />
                                    <Typography className={styles.h2} >Pakistan, by the very nature of its infrastructure, is vertical. All raw material from yarn through to finished product is available locally, with a huge emphasis in sustainability and competitive lead time. This verticality enhances traceability.</Typography>
                                </center>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <Box className={styles.box} >
                                <center>
                                    <Typography className={styles.h1} >06</Typography>
                                    <br />
                                    <Typography><b>Operational Reliabilty</b> </Typography>
                                    <br />
                                    <Typography className={styles.h2} >We continually invest in our smart manufacturing facilities and capitalise on new technology to drive our manufacturing process through the i-team PMS system which gives us complete visibility and control of our production through direct data collection and analysis..</Typography>
                                </center>
                            </Box>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                </Container>
            </Box>
        </>
    )
}
