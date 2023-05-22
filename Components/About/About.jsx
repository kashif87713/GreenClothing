import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import styles from './about.module.css';
import Image from "next/image";
import img from '../../Images/16.jpeg'
import DoneIcon from '@mui/icons-material/Done';




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
                                <Box className={styles.icon} ><DoneIcon/></Box>
                                <Box className={styles.textdetail}>
                                    <Typography >  04 Lac unit P/M capacity </Typography>
                                </Box>
                                </Box>
                                <br/>
                                <Box className={styles.text1} >
                                <Box className={styles.icon} ><DoneIcon/></Box>
                                <Box className={styles.textdetail}>
                                    <Typography>Achieved Carbon Neutral Factory 2021</Typography>
                                </Box>
                                </Box>
                                <br/>
                            </Grid>
                    
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <Box className={styles.text1} >
                                    <Box className={styles.icon} ><DoneIcon/></Box>
                                <Box className={styles.textdetail}>
                                 <Typography>30 Day Fast Track Production Service </Typography>
                                </Box> 
                                </Box>
                                <br/>
                                <Box className={styles.text1} >
                                    <Box className={styles.icon} ><DoneIcon/></Box>
                                <Box className={styles.textdetail}>
                                 <Typography>7–14 Day Sample Service </Typography>
                                </Box> 
                                </Box>
                                <br/>
                                <Box className={styles.text1} >
                                    <Box className={styles.icon} ><DoneIcon/></Box>
                                <Box className={styles.textdetail}>
                                 <Typography> 200 Samples P/M Capacity </Typography>
                                </Box> 
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
