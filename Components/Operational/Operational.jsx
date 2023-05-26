import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './operational.module.css'
import Image from "next/image";
import img from '../../Images/12.png'
import img1 from '../../Images/13.png'
import img2 from '../../Images/14.png'
import img3 from '../../Images/15.png'
import img4 from '../../Images/16.png'




export default function Operational() {
    return (
        <Box>
            <Container>
                <Typography className={styles.opthead} ><b>OPERATIONAL RELIABILITY</b> </Typography>
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Typography className={styles.header} >Providing stability to employers,stakeholders and customers.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                    
                        <Typography className={styles.header2}  >We invest in and capitalise on new technology to drive our manufacturing process through the i-team PMS system which gives us complete visibility and control of our production through direct data collection and analysis.

</Typography>
                    </Grid>
                </Grid>
<br/>
<br/>
                <Box className={styles.images} >
                    <Box className={styles.box} >
                        <Image src={img} className={styles.img} />
                    </Box>
                    <Box className={styles.box} >
                        <Image src={img1} className={styles.img} />
                    </Box>
                    <Box className={styles.box} >
                        <Image src={img2} className={styles.img} />
                    </Box>
                    <Box className={styles.box} >
                        <Image src={img3} className={styles.img} />
                    </Box>
                    <Box className={styles.box} >
                        <Image src={img4} className={styles.img} />
                    </Box>
                </Box>
                <br/>
                <br/>
            </Container>
        </Box>
    )
}
