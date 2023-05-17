import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from "next/image";
import {useRouter} from 'next/router';
import styles from './products.module.css'
import img from '../../Images/2.jpg'
import img3 from '../../Images/3.jpg'
import img4 from '../../Images/4.jpg'
import img5 from '../../Images/h4.jpeg'
import img6 from '../../Images/6.jpg'
import img7 from '../../Images/7.jpg'
import img8 from '../../Images/h5.jpeg'
import img9 from '../../Images/9.jpg'
import img10 from '../../Images/10.jpg'
import img11 from '../../Images/men.jpeg'
import img12 from '../../Images/men1.jpeg'
import img13 from '../../Images/men2.jpeg'
import img17 from '../../Images/h1.jpeg'
import img18 from '../../Images/h2.jpeg'
import img19 from '../../Images/h3.jpeg'
import img14 from '../../Images/wo.jpeg'
import img15 from '../../Images/wo1.jpeg'
import img16 from '../../Images/wo2.jpeg'

import {

    Card,
    CardContent,
    Button,
    Container,
    Grid,
    CardMedia,
  } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDetail = (e) => {
    e.preventDefault();
    router.push('/products')
  }
  return (
        <Box className={styles.products} >
      <Container  >
          <Grid>
              <Typography align='center' variant='h5' className={styles.title} ><b>Our Products</b></Typography>
          </Grid>
          <br/>
    <Box  sx={{ width: '100%' }}>
      <Box sx={{  borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={styles.tab}  >
          <Tab label= "All Products " className={styles.tabhead} {...a11yProps(0)} />
          <Tab label="Men" className={styles.tabhead} {...a11yProps(1)} />
          <Tab label="Women" className={styles.tabhead} {...a11yProps(2)} />
          <Tab label="Kids" className={styles.tabhead} {...a11yProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card} >
              <Image src={img}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card}>
              <Image src={img3}  className={styles.img}/>
            </Card>
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img4}  className={styles.img}/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img5}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img6}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img7}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img8}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img9}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img10}  className={styles.img} />
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card} >
              <Image src={img}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card}>
              <Image src={img5}  className={styles.img}/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img8}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img17}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img18}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img19}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img11}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img12}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img13}  className={styles.img}/>
            </Card> 
          </Grid>
          
        </Grid>
      </TabPanel>

     <TabPanel value={value} index={2}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card} >
              <Image src={img3}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card}>
              <Image src={img6}  className={styles.img}/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img9}  className={styles.img}/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img14}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img15}  className={styles.img}/>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img16}  className={styles.img}/>
            </Card> 
          </Grid>
         
        </Grid>
      </TabPanel> 

      <TabPanel value={value} index={3}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card} >
              <Image src={img4}  className={styles.img} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={styles.card}>
              <Image src={img7}  className={styles.img}/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} >
            <Card className={styles.card}>
              <Image src={img10}  className={styles.img}/>
            </Card>
          </Grid>
         
        </Grid>
      </TabPanel> 
      
      

     
    </Box>
    <br/>
    </Container>
    </Box>
  );
}