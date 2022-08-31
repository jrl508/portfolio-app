import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';


export const Navbar = () => {
    return (
       <div className={styles.nav}>
            <ul className={styles.nav_list}>
                <li className={styles.list_item}>
                    <Link href='/'>Home</Link>
                </li>
                {/* <li className={styles.list_item}>
                    <Link href='/blog'>Blog</Link>
                </li> */}
                <li className={styles.list_item}>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li onClick={()=> document.querySelector('#about-section').scrollIntoView({behavior:'smooth'})} className={styles.list_item}>
                    About
                </li>
                <li onClick={()=> document.querySelector('#contact-section').scrollIntoView({behavior:'smooth'})} className={styles.list_item}>
                    Contact
                </li>
            </ul> 
       </div>
    )
};