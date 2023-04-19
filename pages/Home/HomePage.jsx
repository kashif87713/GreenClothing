import React from 'react'
import { Box, Typography } from "@mui/material";
import styles from './home.module.css'
import About from '../../Components/About/About'
import Products from '../../Components/Products/Products'
import Facilities from '../../Components/Facilities/Facilities'
import Certificate from '../../Components/Certification/Certificate'

export default function HomePage() {
    return (
        <Box>
            <Box className={styles.home} id='/home' >
                <center>
                    <Typography variant='h3' className={styles.header} ><b>Welcome to Green clothing</b> </Typography>
                </center>
            </Box>
            <About />
            <br/>
            <br/>
            <Products />
            <br/>
            <br/>
            <Facilities/>
            <br/>
            <br/>
            <Certificate/>
        </Box>
    )
}
