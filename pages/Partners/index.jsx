import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './partners.module.css';
import Image from "next/image";
import img from '../../Images/pi.png'
import img1 from '../../Images/11.png'
import img2 from '../../Images/22.png'
import img3 from '../../Images/33.png'
import img4 from '../../Images/44.png'
import img5 from '../../Images/55.png'
import img6 from '../../Images/66.png'
import img7 from '../../Images/77.png'
import img8 from '../../Images/88.png'
import img9 from '../../Images/99.png'
import img10 from '../../Images/00.png'


export default function partners() {
    return (
        <>
            <Head>
                <title>Green Clothing Partners</title>
                <meta name="green clothing partners" content="green clothing partners" />
                <meta name="factory" content="gajju matta" />
                <link rel="icon" href="/logoonly.png" />
            </Head>
            <Box className={styles.partner} >
                <Container>
                    <Box className={styles.head} >
                        <Typography variant='h3' ><b>Our Partners</b></Typography>
                        <br />
                        <Typography><b>Home / Our Partners</b> </Typography>
                    </Box>

                </Container>
            </Box>
            <Box className={styles.partnerdetail} >
                <br />
                <Typography variant='h6' className={styles.header} >Our Partners</Typography>
                <br />
                <center> <Typography variant='h5' > <b>Existing and Historic Brand Partners.</b> </Typography> </center>
                <br />
                <br />
                <Container>

                    <Box className={styles.partnerimg} >
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
                        <Box className={styles.box} >
                            <Image src={img5} className={styles.img} />
                        </Box>
                        <Box className={styles.box} >
                            <Image src={img6} className={styles.img} />
                        </Box>
                        <Box className={styles.box} >
                            <Image src={img7} className={styles.img} />
                        </Box>
                        <Box className={styles.box} >
                            <Image src={img8} className={styles.img} />
                        </Box>
                        <Box className={styles.box} >
                            <Image src={img9} className={styles.img} />
                        </Box>
                        <Box className={styles.box} >
                            <Image src={img10} className={styles.img} />
                        </Box>

                    </Box>
                </Container>
                <br />
                <br />
            </Box>
        </>
    )
}
