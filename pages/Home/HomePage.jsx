import React from 'react'
import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';
import styles from './home.module.css'
import About from '../../Components/About/About'
import Products from '../../Components/Products/Products'
import Facilities from '../../Components/Facilities/Facilities'
import Certificate from '../../Components/Certification/Certificate'
import Stand from '../../Components/Standard/Stand'
import Capacity from '../../Components/Capacity/Capacity'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
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
            
        </Box>
    )
}
