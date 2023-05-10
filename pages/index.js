import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg from "../public/bg.svg";
import reactlogo from "../public/reactlogo.svg";
import nextlogo from "../public/nextlogo.svg";
import csslogo from "../public/csslogo.svg";
import googlAnalytics from "../public/google-analytics-logo.svg";
import htmllogo from "../public/html5logo.svg";
import reduxlogo from "../public/reduxlogo.svg";
import mobxlogo from "../public/mobxlogo.svg";
import mongologo from "../public/mongodb-logo.svg";
import auth0logo from "../public/auth0-logo.svg";
import materiallogo from "../public/material-ui-logo.svg";
import javascriptlogo from "../public/javascript-logo.svg";
import pythonlogo from "../public/python-logo.svg";
import nodelogo from "../public/nodejs-logo.svg";
import postgresqllogo from "../public/postqresql-logo.svg";
import awslogo from "../public/aws-logo.svg";
import mysqllogo from "../public/mysql-logo.svg";
import lockImage from "../public/secure-svgrepo-com.svg";
import screensImage from "../public/screens-modern-variety-svgrepo-com.svg";
import cloudDataImage from "../public/cloud-computing-data-svgrepo-com.svg";
import Avatar from "../public/Avatar.png";
import { Projects } from "../components/Projects";
import Typed from "react-typed";

export default function Home() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <div className={styles.cta_hero}>
        <div className={styles.linearGrad}></div>
        <Image
          src={bg}
          alt="hero banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={styles.hero_img}
          priority
        />
        <Image src={Avatar} width={300} height={300} />
        <div className={styles.cta_hero_text}>
          <div className={styles.hero_name}>
            <Typed
              strings={[
                "Hello I'm Ricardo Lafontant",
                "Full Stack Developer",
                "Tech Consultant",
                "Let's get started",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop={false}
            />
          </div>

          <p
            className={styles.hero_desc}
            style={{
              lineHeight: "1.5",
            }}
          >
            Always looking for a challenge, I am here to help bring new ideas to
            life. Whether {"it's"} a site for your business, the next big app
            idea, or you are a fellow dev looking to collaborate, feel free to
            reach out!
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className={`${styles.styled_button} ${styles.cta_button}`}
          >
            {"Contact Me"}
          </button>
        </div>
      </div>

      <div id="about-section" className={styles.section}>
        <div className={styles.section_title}>
          <h1>End to End Development</h1>
        </div>

        <div className={styles.serviceCards}>
          <div className={styles.card}>
            <Image
              src={screensImage}
              width={150}
              height={150}
              alt="Screens Image"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis
              odio bibendum ultrices condimentum. Fusce ac elit eu lectus tempus
              euismod nec non urna. Suspendisse placerat et ex quis eleifend.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src={cloudDataImage}
              width={150}
              height={150}
              alt="Screens Image"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis
              odio bibendum ultrices condimentum. Fusce ac elit eu lectus tempus
              euismod nec non urna. Suspendisse placerat et ex quis eleifend.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src={lockImage}
              width={150}
              height={150}
              alt="Screens Image"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis
              odio bibendum ultrices condimentum. Fusce ac elit eu lectus tempus
              euismod nec non urna. Suspendisse placerat et ex quis eleifend.
            </p>
          </div>
        </div>

        <div className={styles.section_body}>
          <h2>Techonologies Used</h2>
          <div className={styles.tech_grid}>
            <Image
              src={javascriptlogo}
              width={80}
              height={80}
              alt="Javascript Logo"
            />
            <Image src={pythonlogo} width={80} height={80} alt="Python Logo" />
            <Image src={htmllogo} width={80} height={80} alt="HTML Logo" />
            <Image src={csslogo} width={80} height={80} alt="CSS Logo" />
            <Image src={reactlogo} width={80} height={80} alt="React Logo" />
            <Image src={nextlogo} width={80} height={80} alt="Next Logo" />
            <Image src={reduxlogo} width={80} height={80} alt="Redux Logo" />
            <Image src={mobxlogo} width={80} height={80} alt="Mobx Logo" />
            <Image src={nodelogo} width={80} height={80} alt="Node Logo" />
            <Image
              src={materiallogo}
              width={80}
              height={80}
              alt="Material Logo"
            />
            <Image
              src={postgresqllogo}
              width={80}
              height={80}
              alt="Postgresql Logo"
            />
            <Image src={mysqllogo} width={80} height={80} alt="MySQL Logo" />
            <Image src={mongologo} width={80} height={80} alt="MongoDB Logo" />
            <Image src={auth0logo} width={80} height={80} alt="Auth0 Logo" />
            <Image
              src={googlAnalytics}
              width={80}
              height={80}
              alt="Google Analytics Logo"
            />
            <Image src={awslogo} width={80} height={80} alt="AWS Logo" />
          </div>
        </div>
      </div>

      <div
        id="projects-section"
        className={`${styles.section} ${styles.projects_container}`}
      >
        <div className={styles.section_title}>
          <h1>Projects</h1>
        </div>
        <Projects />
      </div>

      <div
        id="contact-section"
        className={`${styles.section} ${styles.contact_container}`}
      >
        <div className={styles.section_title}>
          <h1>Contact</h1>
          <p>
            Want to get in touch? Have any questions about a project or wish to
            collaborate? Feel free to leave your contact info, a quick message
            and I will reach out as soon as possible!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          id="contact_form"
          className={styles.contact_form}
        >
          <label htmlFor="name"> Name </label>
          <input
            className={styles.text_input}
            type="text"
            id="name"
            name="name"
            required
          />
          <label htmlFor="email"> Email </label>
          <input
            className={styles.text_input}
            type="email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="message">Leave a Message</label>
          <textarea
            required
            id="message"
            name="message"
            style={{
              marginTop: "10px",
              height: "135px",
              width: "inherit",
              boxSizing: "border-box",
              padding: "10px",
              fontFamily: "inherit",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              marginTop: "15px",
              width: "150px",
              boxSizing: "border-box",
            }}
            className={styles.styled_button}
          >
            {status}
          </button>
        </form>
      </div>
    </>
  );
}
