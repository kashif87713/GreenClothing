import React from 'react';
import { Box, Typography, Grid, Container } from "@mui/material";
import styles from './contact.module.css'

export default function Contact() {
    return (
        <>
        <Box className={styles.about} id='/aboutUs' >
        <Container>
                    <Box className={styles.head} >
                        <Typography variant='h3' ><b>Contact Us</b></Typography>
                        <br />
                        <Typography><b>Home / Contact Us</b> </Typography>
                    </Box>

                </Container>
            </Box>
            <br />
            <br />
            <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Box className={styles.msg} >
                        <Typography className={styles.write} >Write a message</Typography>
                        <Typography className={styles.msgdetails} >If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !</Typography>
                    </Box>
                </Grid>
                <Container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <form action="">
                            <Grid container className={styles.form} >
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <label className={styles.label} >Name:</label> <br />
                                    <input type='text' className={styles.input} class='name'></input>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >
                                    <label className={styles.label}>Email:</label> <br />
                                    <input type='email' className={styles.input} class='name'></input>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} >

                                    <label className={styles.label}>Phone Number:</label> <br />
                                    <input type='number' className={styles.input} class='name' ></input>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} >
                                    <br />
                                    <label className={styles.label}>Massage:</label> <br />
                                    <textarea name="" id="" cols="30" rows="10" className={styles.textarea} ></textarea>
                                </Grid>
                                <button className={styles.btn} >Send Massage</button>
                            </Grid>
                        </form>
                    </Grid>
                </Container>
            </Grid>
            <br />
        </>
    )
}
