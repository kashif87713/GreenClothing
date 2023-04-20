// import React from "react";
// import styles from './footer.module.css'
// import { Container, Typography, Box } from "@mui/material";
// import Grid from "@mui/system/Unstable_Grid";
// import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// export default function Footer() {
//   return (
//     <div className={styles.footer} >
//       <Container>
//         <Grid container >
//           <Grid  item xs={12} sm={6} md={6} lg={3}>
// <Typography variant='h4' px={2} className={styles.footerheader} >About the Co</Typography>
// <Typography className={styles.about} pt={1} > Green clothing
//  is one of the largest import export with a wide range of premium quality makeup products to provide the best value for money to global customers</Typography>
//           </Grid>

//           <Grid item xs={12} sm={6} md={6} lg={3} className={styles.footerdetail} >
//               <Typography variant='h4' px={3} className={styles.footerheader} >Help</Typography>
//               <Typography variant='h6'  className={styles.helpdetails}>About Us</Typography>
//               <Typography variant='h6'  className={styles.helpdetails}>Privacy Policy</Typography>
//               <Typography variant='h6'  className={styles.helpdetails}>Shipping Policy</Typography>
//               <Typography variant='h6'  className={styles.helpdetails}>Terms & Condition</Typography>
//               <Typography variant='h6' className={styles.helpdetails}>Contact Us</Typography>
//               <Typography variant='h6'  className={styles.helpdetails}>Refund Policy</Typography>
//           </Grid>

//           <Grid item xs={12} sm={6} md={6} lg={3} className={styles.footerdetail} >
//               <p variant='h4' px={2} className={styles.footerheader}>Main Menu</p>
//               <p variant='h6' className={styles.menudetails} >Home</p>
//               <p variant='h6'  className={styles.menudetails}>About Us</p>
//               <p variant='h6'  className={styles.menudetails}>Services</p>
//               <p variant='h6'  className={styles.menudetails}>Facilities</p>
//               <p variant='h6'  className={styles.menudetails}>Mission</p>
//               <p variant='h6'  className={styles.menudetails}>Vision</p>

//           </Grid>

//           <Grid item xs={12} sm={6} md={6} lg={3} className={styles.footerdetail} id='contact' >
//               <Typography variant='h4' px={3} className={styles.footerheader}  >Contact Us</Typography>
//               <Box className={styles.boxIcon} >
//              <div className={styles.ico}  ><PhoneSharpIcon fontSize="medium" /></div> 
//               <div className={styles.icons} >+923217515234</div>
//               </Box>
//               <Box className={styles.boxIcon} >
//              <div className={styles.ico}  ><WhatsAppIcon fontSize="medium" /></div> 
//               <div className={styles.icons} >+923217515234</div>
//               </Box>
//               <Box className={styles.boxIcon} >
//              <div className={styles.ico}  ><EmailIcon fontSize="medium" /></div> 
//               <div className={styles.icons} >abc@gmail.com</div>
//               </Box>
//               <Box className={styles.boxIcon} >
//              <div className={styles.ico}  ><LocationOnIcon fontSize="medium" /></div> 
//               <div className={styles.adress} >Unit Address: 21-KM Ferozpur Road, Arif town , Opposite Firdosia Graveyard - Lahore   </div>
//               </Box>
//           </Grid>

//         </Grid>
// <Grid>
//   <Typography className={styles.footerrights} >© Copyrights 2023.All Rights Reserved.</Typography>
// </Grid>
//       </Container>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import EmailIcon from "@mui/icons-material/Email";
import MyLocationIcon from '@mui/icons-material/MyLocation';
// import autoparts from "../../Images/autopartsLogosTransparent.png"
import { createStyles, makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
// import axios from "axios";
// import Image from "next/image";

export default function Footer() {
  const classes = useStyles();
  // const router = useRouter();
  // const [contact, setContact] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/api/contact/get`)
  //     .then((res) => {
  //       console.log(res.data)
  //       setContact(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // },[])

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push('/category')
  // }
  return (
    <div className={styles.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Typography variant="h4" px={2} className={classes.footerheader}>
              About the Shop
            </Typography>
            
            <Typography className={classes.about} pt={1}>
              {" "}
              Green clothing has a wide range of premium quality Jaguar
              spare parts to provide the best value for money to global customers
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={classes.footerdetail}
          >
            <Typography variant="h4" px={3} className={classes.footerheader}>
              Help
            </Typography>
            <Typography variant="h6" className={classes.helpdetails}>
              Privacy Policy
            </Typography>
            <Typography variant="h6" className={classes.helpdetails}>
              Shipping Policy
            </Typography>
            <Typography variant="h6" className={classes.helpdetails}>
              Terms & Condition
            </Typography>
            <Typography variant="h6" className={classes.helpdetails}>
              Contact Us
            </Typography>
            <Typography variant="h6" className={classes.helpdetails}>
              Refund Policy
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={classes.footerdetail}
          >
            <Typography variant="h4" px={2} className={classes.footerheader}>
              Home
            </Typography>
            <Typography onClick={(e) => handleClick(e)} variant="h6" className={classes.menudetails}>
              About Us
            </Typography>
            <Typography onClick={(e) => handleClick(e)} variant="h6" className={classes.menudetails}>
              Services
            </Typography>
            <Typography onClick={(e) => handleClick(e)} variant="h6" className={classes.menudetails}>
             Facilities
            </Typography>
            <Typography onClick={(e) => handleClick(e)} variant="h6" className={classes.menudetails}>
              Mission
            </Typography>
            <Typography onClick={(e) => handleClick(e)} variant="h6" className={classes.menudetails}>
              Vision
            </Typography>
           
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={classes.footerdetail}
          >
            <Typography variant="h4" px={3} className={classes.footerheader}>
              Contact Us
            </Typography>
            <Box className={classes.boxIcon}>
              <div className={styles.ico}>
                <PhoneSharpIcon fontSize="medium" />
              </div>
          <div className={styles.icons} >+923217515234</div>
            </Box>
            
            <Box className={styles.boxIcon}>
              <div className={styles.ico}>
                <WhatsAppIcon fontSize="medium" />
              </div>
                <div className={styles.icons} >+923217515234</div>

            </Box>
          
            
            <Box className={styles.boxIcon}>
              <div className={styles.ico}>
                <EmailIcon fontSize="medium" />
              </div>
                <div className={styles.icons} >abc@gmail.com</div>

            </Box>
            
            <Box className={styles.boxIcon}>
              <div className={styles.ico}>
                <MyLocationIcon fontSize="medium" />
              </div>
        <div className={styles.icons} >Unit Address: 21-KM Ferozpur Road, Arif town , Opposite Firdosia Graveyard - Lahore   </div>

            </Box>
         
          </Grid>
        </Grid>
        <Grid>
          <Typography className={styles.footerrights}>
          © Copyrights 2023.All Rights Reserved.
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    footerheader: {
      "&:hover": {
        cursor: "pointer",
        color: 'white'
      },
      fontWeight: '600',
      fontSize: '1.1rem',
      color: 'white',
      [theme?.breakpoints?.down("sm")]: {
        padding: '2px 0 0 1rem',
        margin: '0.7rem 0 0 0',
      }
    },
    about: {
      "&:hover": {
        color: "rgb(29, 147, 211)",
        cursor: "pointer",
      },
      lineHeight: '25px',
      padding: '15px',
      textAlign: 'left',
      fontSize: '0.9rem',
      fontWeight: '100',
      color: 'white',
    },
    helpdetails: {
      "&:hover": {
        cursor: "pointer",
        marginRight: "2px",
        color: 'rgb(29, 147, 211)',
      },
      fontSize: '0.9rem',
      fontWeight: '100',
      padding: '0.7rem 0 0 1.3rem',
      color: 'white',
      [theme?.breakpoints?.down("sm")]: {
        padding: '0.7rem 0 0 1rem',
      }
    },
    footerdetail: {
      textAlign: 'left',
      fontWeight: '100',
      fontSize: '10px',
    },
    menudetails: {
      "&:hover": {
        color: 'rgb(29, 147, 211)',
        cursor: 'pointer',
        marginRight: '2px',
      },
      fontSize: '0.9rem',
      fontWeight: '100',
      padding: '0.7rem 0 0 0.9rem',
      color: 'white',
    },
    boxIcon: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '0.7rem',
      padding: '0rem 0 0 1.3rem',
      color: 'white',
      [theme?.breakpoints?.down('md')]: {
        padding: '0rem 0 0 0.8rem',
      },
    },
    footerrights: {
      "&:hover": {
        cursor: 'pointer',
        color: 'rgb(29, 147, 211)',
      },
      margin: 'auto',
      textAlign: 'center',
      padding: '2.3rem 0rem 1rem 0',
      fontSize: '1rem',
      color: 'white',
    },
    icons: {
      "&:hover": {
        color: 'rgb(29, 147, 211)',
        cursor: 'pointer',
      },
      fontSize: '0.9rem',
      padding: '6px',
      margin: '0 5px',
    },
  })
);