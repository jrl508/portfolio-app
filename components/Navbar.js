import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Github from "../public/github.svg";
import LinkedIn from "../public/linkedin.svg";
import ResumeIcon from "../public/resume.svg";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav_list}>
        <li
          onClick={() =>
            document
              .querySelector("#about-section")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={styles.list_item}
        >
          About
        </li>
        <li
          onClick={() =>
            document
              .querySelector("#projects-section")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={styles.list_item}
        >
          Projects
        </li>
        <li
          onClick={() =>
            document
              .querySelector("#contact-section")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={styles.list_item}
        >
          Contact
        </li>
      </ul>
      <ul className={styles.socials}>
        <li className={styles.list_item}>
          <a href="https://github.com/jrl508">
            <Image src={Github} alt="github icon" height={40} width={40} />
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://www.linkedin.com/in/jean-lafontant/">
            <Image src={LinkedIn} alt="LinkedIn icon" height={35} width={35} />
          </a>
        </li>
        {/* TODO - ADD DOWNLOADABLE RESUME */}
        {/* <li className={styles.list_item}>
          <a href="http:localhost:3000/public/Resume.pdf" download>
            <Image src={ResumeIcon} alt="Resume icon" height={28} width={28} />
          </a>
        </li> */}
      </ul>
    </div>
  );
};
