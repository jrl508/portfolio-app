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
import Tooltip from "../components/Tooltip";
import TechImage from "../components/TechImage";

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
            <h3>Modern Development</h3>
            <p>
              Create awesome applications using the latest technologies. Build a
              SPA or PWA from the ground up or with a user friendly CMS. Or
              launch your next idea in the app store!
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src={cloudDataImage}
              width={150}
              height={150}
              alt="Screens Image"
            />
            <h3>Database Development and Configuration</h3>
            <p>
              Build and manage the logic side of your application through a
              personal server or get set up with cloud computing.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src={lockImage}
              width={150}
              height={150}
              alt="Screens Image"
            />
            <h3>Follow Best Practices</h3>
            <p>
              Always making sure to tick off all the neccesary boxes, whether
              that is staying up to date on security standards or maintaining
              accessibility for your users.
            </p>
          </div>
        </div>

        <div className={styles.section_body}>
          <h2>Techonologies Used</h2>
          <div className={styles.tech_grid}>
            <Tooltip text="Javascript">
              <TechImage src={javascriptlogo} alt="Javascript Logo" />
            </Tooltip>
            <Tooltip text={"Python"}>
              <TechImage src={pythonlogo} alt="Python Logo" />
            </Tooltip>
            <Tooltip text={"HTML"}>
              <TechImage src={htmllogo} alt="HTML Logo" />
            </Tooltip>
            <Tooltip text={"CSS"}>
              <TechImage src={csslogo} width={80} height={80} alt="CSS Logo" />
            </Tooltip>
            <Tooltip text={"ReactJS"}>
              <TechImage src={reactlogo} alt="React Logo" />
            </Tooltip>
            <Tooltip text={"NextJS"}>
              <TechImage src={nextlogo} alt="Next Logo" />
            </Tooltip>
            <Tooltip text={"Redux"}>
              <TechImage src={reduxlogo} alt="Redux Logo" />
            </Tooltip>
            <Tooltip text={"Mobx"}>
              <TechImage src={mobxlogo} alt="Mobx Logo" />
            </Tooltip>
            <Tooltip text={"Node"}>
              <TechImage src={nodelogo} alt="Node Logo" />
            </Tooltip>
            <Tooltip text={"Material UI"}>
              <TechImage src={materiallogo} alt="Material Logo" />
            </Tooltip>
            <Tooltip text={"Postgresql"}>
              <TechImage src={postgresqllogo} alt="Postgresql Logo" />
            </Tooltip>
            <Tooltip text={"MySQL"}>
              <TechImage src={mysqllogo} alt="MySQL Logo" />
            </Tooltip>
            <Tooltip text={"MongoDB"}>
              <TechImage src={mongologo} alt="MongoDB Logo" />
            </Tooltip>
            <Tooltip text={"Auth0"}>
              <TechImage src={auth0logo} alt="Auth0 Logo" />
            </Tooltip>
            <Tooltip text={"Google Analytics"}>
              <TechImage src={googlAnalytics} alt="Google Analytics Logo" />
            </Tooltip>
            <Tooltip text={"Amazon Web Services"}>
              <TechImage src={awslogo} width={80} height={80} alt="AWS Logo" />
            </Tooltip>
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
