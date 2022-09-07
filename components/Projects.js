import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import DMLogo from '../public/DMLogo.png';
import BTKDLogo from '../public/BTKDlogo.jpg'

export const Projects = () => {
      return (
        <div>
            <ul className={styles.project_grid}>
                <li className={styles.proj_one}>
                    <div>
                        <div className={styles.proj_title}>
                            <Image width={70} height={70} src={DMLogo} alt='dm logo' />
                            <span> 
                                <a href="https://dealmap.com/" target='_blank' rel="noreferrer">
                                    Deal Map Landing Page
                                </a>
                            </span>
                        </div>
                        <div className={styles.proj_stack}>
                            GatsbyJs | ReactJs | Google Analytics | Freshdesk
                        </div>
                    </div>
                </li>

                <li className={styles.proj_two}>
                    <div>
                        <div className={styles.proj_title}>
                            <Image width={70} height={70} src={DMLogo} alt='dm logo' />
                            <span>
                                <a href="https://app.dealmap.com/" target='_blank' rel="noreferrer">
                                    Deal Map Application
                                </a>
                            </span>
                        </div>
                        <div className={styles.proj_stack}>
                            NodeJs | ReactJs | MaterialUI | MySQL | MobX | Auth0
                        </div>
                    </div>

                </li>

                <li className={styles.proj_three}>
                    <div>
                        <div className={styles.proj_title}>
                            <Image width={70} height={70} src={BTKDLogo} alt='dm logo' />
                            <span>
                                <a href="http://www.bostontaekwondoacademy.net/" target='_blank' rel="noreferrer">
                                    Boston Taekwondo
                                </a>
                            </span>
                        </div>
                        <div className={styles.proj_stack}>
                            GatsbyJs | ReactJs 
                        </div>
                    </div>
                </li>
            </ul>
            
        </div>
      );
};