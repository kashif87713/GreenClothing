import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import styles from './stand.module.css';
import Image from "next/image";
import img from '../../Images/quality.png'
import img1 from '../../Images/range.png'
import img2 from '../../Images/facilty.png'




export default function Stand() {
    return (
        <Box className={styles.standard} >
            <br />
            <Container>
                <Box className={styles.images} >
                    <Box className={styles.Box} >
                        <Image src={img} className={styles.img} />
                        <br/>
                        <Typography className={styles.text}>Quality Standards</Typography>
                    </Box>
                    <Box className={styles.Box} >
                        <Image src={img1} className={styles.img} />
                        <br/>
                        <Typography className={styles.text}>Range of Products</Typography>
                    </Box>
                    <Box className={styles.Box} >
                        <Image src={img2} className={styles.img} />
                        <br/>
                        <Typography className={styles.text}>In-House Facilities</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
