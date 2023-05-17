import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import styles from './facilities.module.css';
import Image from "next/image";
import img from '../../Images/knitting.jpg';
import img1 from '../../Images/dying.jpg'
import img2 from '../../Images/fabric.jpg'
import img3 from '../../Images/pack.jpeg'
import img4 from '../../Images/machne.jpeg'
import img5 from '../../Images/fin.jpeg'
import img6 from '../../Images/packing.jpg'
import img7 from '../../Images/print.jpeg'
import img8 from '../../Images/emb.jpeg'
import img9 from '../../Images/finishing.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Facilities() {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <Box>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography className={styles.faciltyhead}><b>Facilities we provide</b> </Typography>
                    </Grid>
                </Grid>
                <br />
                <br />

                <Slider {...settings}>

                    <Box className={styles.card} >
                        <Image src={img} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Knitting</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img1} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Dying</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img2} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Fabric</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img7} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Printing</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img8} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Embriodary</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img3} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Cutting</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img4} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Sewing</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img5} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Finishing</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img9} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Ironing</b></Typography>
                        </center>
                    </Box>
                    <Box className={styles.card} >
                        <Image src={img6} className={styles.img} />
                        <br />
                        <center>
                            <Typography><b>Packing</b></Typography>
                        </center>
                    </Box>


                </Slider>
            </Box>
        </>
    )
}


