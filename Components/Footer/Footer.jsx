import React from "react";
import styles from './footer.module.css'
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <div className={styles.footer} >
      <Container>
        <Grid container >
          <Grid  item xs={12} sm={6} md={6} lg={3}>
<p variant='h4'  className={styles.footerheader} >About the Co</p>
<p className={styles.about} pt={1} > Green clothing
 is one of the largest import export with a wide range of premium quality makeup products to provide the best value for money to global customers</p>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} className={styles.footerdetail} >
              <p variant='h4'  className={styles.footerheader}>Help</p>
              <p variant='h6'  className={styles.helpdetails}>About Us</p>
              <p variant='h6'  className={styles.helpdetails}>Privacy Policy</p>
              <p variant='h6'  className={styles.helpdetails}>Shipping Policy</p>
              <p variant='h6'  className={styles.helpdetails}>Terms & Condition</p>
              <p variant='h6' className={styles.helpdetails}>Contact Us</p>
              <p variant='h6'  className={styles.helpdetails}>Refund Policy</p>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} className={styles.footerdetail} >
              <p variant='h4' className={styles.footerheader}>Main Menu</p>
              <p variant='h6' className={styles.menudetails} >Home</p>
              <p variant='h6'  className={styles.menudetails}>About Us</p>
              <p variant='h6'  className={styles.menudetails}>Services</p>
              <p variant='h6'  className={styles.menudetails}>Facilities</p>
              <p variant='h6'  className={styles.menudetails}>Mission</p>
              <p variant='h6'  className={styles.menudetails}>Vision</p>

          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} className={styles.footerdetail} id='contact' >
              <p variant='h4'  className={styles.footerheader}  >Contact Us</p>
              <Box className={styles.boxIcon} >
             <div className={styles.ico}  ><PhoneSharpIcon fontSize="medium" /></div> 
              <div className={styles.icons} >+92 321 4737549</div>
              </Box>
              <Box className={styles.boxIcon} >
             <div className={styles.ico}  ><WhatsAppIcon fontSize="medium" /></div> 
              <div className={styles.icons} >+92 321 4737549</div>
              </Box>
              <Box className={styles.boxIcon} >
             <div className={styles.ico}  ><EmailIcon fontSize="medium" /></div> 
              <div className={styles.icons} >shafique.chouhan@green-clothing.com</div>
              </Box>
              <Box className={styles.boxIcon} >
             <div className={styles.ico}  ><LocationOnIcon fontSize="medium" /></div> 
              <div className={styles.adress} >Unit Address: 21-KM Ferozpur Road, Arif town , Opposite Firdosia Graveyard - Lahore   </div>
              </Box>
          </Grid>

        </Grid>
<Grid>
  <Typography className={styles.footerrights} >© Copyrights 2023.All Rights Reserved.</Typography>
</Grid>
      </Container>
    </div>
  );
}

