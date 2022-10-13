import Head from 'next/head';
import React, {useState} from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Screens from '../public/Screens.png';
import GMfuego from '../public/GM-fuego.png';
import Authentication from '../public/Authentication.png';
import API from '../public/API2.png';
import { Projects } from '../components/Projects';

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
    alert(result.status)
  };

  return (
    <>
      <div className={styles.cta_hero}>
        <Image 
          src={GMfuego}
          alt='hero banner'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className={styles.hero_img}
          priority
        />
        <div className={styles.cta_hero_text}>
          <p className={styles.hero_name}>{"Hello I'm Ricardo Lafontant"}</p>
          <p className={styles.hero_titles}>Full Stack Developer - Freelancer</p>
          <p className={styles.hero_desc}
          style={{
            lineHeight:'1.5',
          }}>
            Always looking for a challenge, I am here to help bring new ideas to life.
            Whether {"it's"} a site for your business, the next big app idea, or you are a fellow dev looking to collaborate, feel free to reach out!
          </p>
          <button onClick={()=> document.querySelector('#contact-section').scrollIntoView({behavior:'smooth'})} className={`${styles.styled_button} ${styles.cta_button}`}>{"Let's Build Something"}</button>
        </div>
      </div>

      <div id='about-section' className={styles.section}>
        <div className={styles.section_title}>
          <h1>End to End Development</h1>
          <p>
            From building or updating a modern front end design all the way to database management on the back end.
          </p>
        </div>

        <div className={styles.section_body}>
          <div className={styles.skills_block}>
            <div className={styles.skills_image_card}>
              <Image src={Screens} width={250} height={250} alt='responsive screens' />
            </div>
            <div>
              <h2>Responsive Web Design</h2>
              <p>
                Build applications for all screen sizes.<br/>
                Maintain a quality user interface no matter what device they are on.
              </p>
            </div>
          </div>

          <div className={styles.skills_block}>
            <div className={styles.skills_image_card}>
              <Image src={Authentication} width={300} height={250} alt='authentication'/>
            </div>
            <div>
              <h2>User Authentication</h2>
              <p>
                Implement standard practices for user accounts
                with secure password logins or integrating social account info.
              </p>
            </div>
          </div>

          <div className={styles.skills_block}>
            <div className={styles.skills_image_card}>
              <Image src={API} width={300} height={250} alt='authentication'/>
            </div>
            <div>
              <h2>API Development</h2>
              <p>
               {"Build and manage RESTful API's for your applications, or communicate with external API's to supplement the user experience of your app."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id='projects-section' className={`${styles.section} ${styles.projects_container}`}>
        <div className={styles.section_title}>
          <h1>
            Projects
          </h1>
        </div>
        <Projects />

      </div>

      <div id='contact-section' className={`${styles.section} ${styles.contact_container}`}>

        <div className={styles.section_title}>
          <h1>
            Contact
          </h1>
          <p>
            Want to get in touch? Have any questions about a project or wish to collaborate? Feel free to leave your contact info, a quick message and I will reach out as soon as possible!
          </p>
        </div>
          <form onSubmit={handleSubmit} id="contact_form" className={styles.contact_form}>
            <label htmlFor="name"> Name </label>
            <input className={styles.text_input} type='text' id='name' name='name'required />
            <label htmlFor="email"> Email </label>
            <input className={styles.text_input} type='email' id='email' name='email' required/>
            <label htmlFor="message">Leave a Message</label>
            <textarea required id="message" name="message" style={{
              marginTop: '10px',
              height:'135px',
              width:'inherit',
              boxSizing: 'border-box',
              padding: '10px',
              fontFamily:'inherit'
            }}></textarea>
            <button type='submit' style={{
              marginTop: '15px' ,
              width: '150px',
              boxSizing:'border-box',
            }} className={styles.styled_button}>{status}</button>
          </form>
      </div>
    </>
  )
}
