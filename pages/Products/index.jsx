import React from 'react'
import Products from '../../Components/Products/Products';
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './product.module.css'
import Head from 'next/head';


export default function index() {
    return (
        <div>
            <Head>
        <title>Green Clothing Garments</title>
        <meta name="greenclothing" content="green clothing saqlain" />
        <meta name="factory" content="gajju matta" />
        <link rel="icon" href="/logoonly.png" />
      </Head>
            <Box className={styles.pillar} >
                <Container>
                    <Box className={styles.head} >
                        <Typography variant='h3' ><b>Our Products</b></Typography>
                        <br />
                        <Typography><b>Home / Our Products</b> </Typography>
                    </Box>

                </Container>
            </Box>
            <Products/>
        </div>
    )
}
