import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DMLogo from "../public/DMLogo.png";
import BTKDLogo from "../public/BTKDlogo.jpg";
import DMSS from "../public/DMSS.png";

export const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "35px 0",
      }}
    >
      <div className="projects">
        <h2>In Production</h2>
        <ul className={styles.projList}>
          <li className={styles.listItem}>
            <div className={styles.proj_title}>
              <Image width={70} height={70} src={DMLogo} alt="dm logo" />
              <span>
                <a href="https://dealmap.com/" target="_blank" rel="noreferrer">
                  Deal Map
                </a>
                <div className={styles.proj_stack}>
                  (Landing Page) GatsbyJs | ReactJs | Google Analytics |
                  Freshdesk
                </div>
                <div className={styles.proj_stack}>
                  (Application) NodeJs | ReactJs | MaterialUI | MySQL | MobX |
                  Auth0
                </div>
              </span>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.proj_title}>
              <Image width={70} height={70} src={BTKDLogo} alt="dm logo" />
              <span>
                <a
                  href="http://www.bostontaekwondoacademy.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Boston Taekwondo
                </a>
                <div className={styles.proj_stack}>GatsbyJs | ReactJs</div>
              </span>
            </div>
          </li>
        </ul>
        <h2>In Development</h2>
        <ul>
          <li>DIY App</li>
        </ul>
        {/* <ul className={styles.project_grid}>
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
            </ul> */}
      </div>
      <div
        className="image-box"
        style={{
          backgroundColor: "lightblue",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "320px",
            backgroundColor: "green",
            position: "relative",
            bottom: "5%",
            left: "15%",
          }}
        ></div>
        <div
          style={{
            height: "200px",
            width: "320px",
            backgroundColor: "yellow",
            position: "relative",
            bottom: "15%",
            right: "10%",
          }}
        ></div>{" "}
        <div
          style={{
            height: "200px",
            width: "320px",
            backgroundColor: "red",
            position: "relative",
            bottom: "35%",
            left: "20%",
          }}
        ></div>
      </div>
    </div>
  );
};
