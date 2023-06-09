import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import styles from './capacity.module.css'
import Image from "next/image";
import img from '../../Images/garmnt.png'
import img1 from '../../Images/mach.png'
import img2 from '../../Images/area.png'
import img3 from '../../Images/skill.png'


export default function Capacity() {
    return (
        <Box className={styles.capacity} >
            <Container>
                <Box className={styles.boxes} >
                    <Box className={styles.box} >
                        <Box className={styles.details} >
                            <Image src={img} className={styles.img} />
                            
                            <div className={styles.qty} ><b>04 lac</b> </div>
                        </Box>
                        <br/>
                        <Typography className={styles.text}><b>Garments Per Month</b></Typography>
                    </Box>
                    <Box className={styles.box} >
                        <Box className={styles.details} >
                            <Image src={img1} className={styles.img} />
                            
                            <div className={styles.qty} ><b>500</b> </div>
                        </Box>
                        <br/>
                        <Typography className={styles.text}><b>Sewing Machines</b></Typography>
                    </Box>
                    <Box className={styles.box} >
                        <Box className={styles.details} >
                            <Image src={img2} className={styles.img} />
                            
                            <div className={styles.qty} ><b>60,000</b> </div>
                        </Box>
                        <br/>
                        <Typography className={styles.text}><b>Fq.ft.Factory Area</b></Typography>
                    </Box>
                    <Box className={styles.box} >
                        <Box className={styles.details} >
                            <Image src={img3} className={styles.img} />
                            
                            <div className={styles.qty} ><b>700</b> </div>
                        </Box>
                        <br/>
                        <Typography className={styles.text}><b>Skilled Workers</b></Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
