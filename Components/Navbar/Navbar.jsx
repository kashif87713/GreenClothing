import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styles from './navbar.module.css'
import Link from 'next/link';
import logo from '../../Images/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >=60 ) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeColor )
  },[color])
  
  return (
    <div className={color ? `${styles.header} ${styles.headerbg}` : `${styles.header}`}>
    <div className={styles.navbar} id='navbar'>
      <div className={styles.logo} id='logo'>
        <p style={{fontSize: '1.5rem', fontWeight: '700'}}>Green Clothing</p>
{/* <Image src={logo} className={styles.img}  /> */}
      </div>

      <div className={styles.navcontainer}>
        <ul className={styles.topnavcontainer}>        
        </ul>
        <ul className={styles.bottomnavcontainer}>
          <li>  <Link href='/' className={styles.pink} >Home</Link></li>
          <li>  <Link href='/about' className={styles.pink} >About Us</Link></li>
          <li>  <Link href='/Services' className={styles.pink} >Services</Link> </li> 
          <li>  <Link href='/Partners' className={styles.pink} >Our Partners</Link></li>
          <li>  <Link href='/Products' className={styles.pink} >Products</Link></li>
          <li>  <Link href='/Pillar' className={styles.pink} >Business Pillars </Link></li>
          <li>  <Link href='/contact' className={styles.pink}>Contact Us</Link></li>
        </ul>
      </div>
     

      {/* Mobile menu  */}
      <div
      className={menuOpen ? `${styles.right} ${styles.active}` : `${styles.right}`} 
      // className={`${styles.right}` + (menuOpen && `${styles.active}`)}
      >
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
      </div>
      {/* <div className={menuOpen ? `${styles.menu}` `${styles.active}` : `${styles.menu}`}></div> */}
      <div 
      className={menuOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`}
      // className={`${styles.menu}` (menuOpen && `${styles.active}`)}
      >
        <ul>
          <li>  <Link href='/' className={styles.pink}  onClick={() => setMenuOpen(!menuOpen)}>Home</Link></li>
          <li>  <Link href='/about' className={styles.pink}  onClick={() => setMenuOpen(!menuOpen)}>About Us</Link></li>
          <li>  <Link href='/Services' className={styles.pink}  onClick={() => setMenuOpen(!menuOpen)}>Services</Link></li>
          <li>  <Link href='/Partners' className={styles.pink}  onClick={() => setMenuOpen(!menuOpen)}>Our Partners</Link></li>
          <li>  <Link href='/Products' className={styles.pink}  onClick={() => setMenuOpen(!menuOpen)}>Products</Link></li>
          <li>  <Link href='/Pillar' className={styles.pink}  onClick={() => setMenuOpen(!menuOpen)}>Business Pillar</Link></li>
          <li>  <Link href='/contact' className={styles.pink}  onClick={() => setMenuOpen(!menuOpen)}>Contact Us</Link></li>
          </ul>
      </div>
    </div>
    </div>

  )
}

export default Navbar;

  
