import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.cta_hero}>
        <div className={styles.cta_hero_text}>
          <h1>Jean Lafontant</h1>
          <p>Full Stack Developer</p>
          <button>Let's Create Something</button>
        </div>
    
      </div>
    </>
  )
}
