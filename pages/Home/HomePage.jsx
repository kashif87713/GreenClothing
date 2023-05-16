import React from 'react'
import { Box, Typography } from "@mui/material";
import styles from './home.module.css'
import About from '../../Components/About/About'
import Products from '../../Components/Products/Products'
import Facilities from '../../Components/Facilities/Facilities'
import Certificate from '../../Components/Certification/Certificate'
import Stand from '../../Components/Standard/Stand'
import Capacity from '../../Components/Capacity/Capacity'

export default function HomePage() {
    return (
        <Box>
            <Box className={styles.home} id='/home' >
                <center>
                    {/* <Typography variant='h3' className={styles.header} ><b>Welcome to Green clothing</b> </Typography> */}
                </center>
            </Box>
            
            <Stand/>
            <br/>
            <br/>
            <About />
            <br/>
            <br/>
            <Products />
           
            <Capacity/>
            <br/>
            <br/>
            <Facilities/>
            <br/>
            <br/>
            <Certificate/>
            <br/>
            <br/>
        </Box>
    )
}
