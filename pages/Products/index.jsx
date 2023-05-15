import React from 'react'
import Products from '../../Components/Products/Products';
import { Box, Typography, Container, Grid } from '@mui/material';
import styles from './product.module.css'


export default function index() {
    return (
        <div>
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
