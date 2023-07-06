import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DMLogo from "../public/DMLogo.png";
import BTKDLogo from "../public/BTKDlogo.jpg";
import DMSS from "../public/DMSS.png";
import DMSS2 from "../public/DMSS2.png";
import BTKDSS from "../public/BTKDSS.png";
import ReactLogo from "../public/reactlogo.svg";

export const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "35px 0",
      }}
    >
      <div className="projects">
        <ul className={styles.projList}>
          <li className={styles.listItem}>
            <div className={styles.project}>
              <div className={styles.proj_title}>
                <Image width={60} height={60} src={DMLogo} alt="dm logo" />
                <a href="https://dealmap.com/" target="_blank" rel="noreferrer">
                  Deal Map
                </a>
              </div>
              <div className={styles.proj_stack}>
                (Landing Page) GatsbyJs | ReactJs | Google Analytics | Freshdesk
              </div>
              <div className={styles.proj_stack}>
                (Application) NodeJs | ReactJs | MaterialUI | MySQL | MobX |
                Auth0
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                Deal Map was a start up accounting application developed using
                React.js, as part of a small team I was tasked with building out
                and maintaining various parts of the app. Such as:
                <ul
                  style={{
                    marginTop: "15px",
                    listStyleType: "circle",
                  }}
                >
                  <li>Building and updating Node server</li>
                  <li>Creating custom React components on the front end</li>
                  <li>
                    Leveraging third party technologies such as Auth0 for
                    authentication, and Sendgrid for mailing services
                  </li>
                  <li>Integrating with Xero Api for user data syncing</li>
                </ul>
              </p>
            </div>
            <div className={styles.proj_image}>
              <Image
                className={styles.proj_image}
                width={475}
                height={300}
                src={DMSS}
                alt="DM Screenshot"
              />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.project}>
              <div className={styles.proj_title}>
                <Image width={70} height={70} src={BTKDLogo} alt="BTKD logo" />
                <a
                  href="http://www.bostontaekwondoacademy.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Boston Taekwondo
                </a>
              </div>
              <div className={styles.proj_stack}>
                GatsbyJs | ReactJs | Heroku
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                Boston Taekwondo is run by one of the most notable practicioners
                within the sport. I had the pleasure of contributing to the
                modernization of their website using GatsbyJs and React to
                create an attractive landing page.
              </p>
            </div>
            <div className={styles.proj_image}>
              <Image
                width={475}
                height={300}
                src={BTKDSS}
                alt="BTKD Screenshot"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
