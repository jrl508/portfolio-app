import React from 'react';
import { Navbar } from './Navbar'
import styles from '../styles/Layout.module.css'


export const Layout = ({children}) => {
    return (
        <div  className={styles.layout_container}>
        <Navbar /> 
        <main className={styles.layout_main}>
            {children}
        </main>
        </div>
    )
};