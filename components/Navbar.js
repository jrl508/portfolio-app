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
                <li className={styles.list_item}>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li className={styles.list_item}>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li className={styles.list_item}>
                    <Link href='/about'>About</Link>
                </li>
                <li className={styles.list_item}>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul> 
       </div>
    )
};