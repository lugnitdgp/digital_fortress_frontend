import Image from "next/image";
"use client";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import Loader from "@/components/3Dloader/Loader";
import Navbar from "@/components/Navbar/navbar";
import { FaGithub, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FloatingDock } from "@/components/floatingdock/floatingicons";
import { Meteors } from "@/components/Meteor/meteor";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [textDigital, setTextDigital] = useState("DIGITAL");
  const [textFortress, setTextFortress] = useState("FORTRESS");
  const [showMeteors, setShowMeteors] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      animateText();
    }
  }, [loading]);

  const animateText = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let frame = 0;

<<<<<<< HEAD
    const randomizeText = (txt: string) => {
=======
    const randomizeText = (txt : string) => {
>>>>>>> 137a176ee44b0d9b680febdbf7eb8857586f21f4
      return txt
        .split("")
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
    };

    const intervalId = setInterval(() => {
      if (frame < 30) {
        // Number of frames for the animation
        setTextDigital(randomizeText(textDigital));
        setTextFortress(randomizeText(textFortress));
        frame++;
      } else {
        clearInterval(intervalId);
        setTextDigital("DIGITAL");
        setTextFortress("FORTRESS");
      }
      setTimeout(() => {
        setShowMeteors(true); 
      }, 1140);
    }, 40);
  };

  const socialMediaItems = [
    {
      title: "Facebook",
      icon: <FaSquareFacebook style={{ color: "black" }} />,
      href: "https://www.facebook.com/yourprofile",
    },
    {
      title: "GitHub",
      icon: <FaGithub style={{ color: "black" }} />,
      href: "https://github.com/yourprofile",
    },
    {
      title: "Instagram",
      icon: <FaInstagram style={{ color: "black" }} />,
      href: "https://www.instagram.com/yourprofile",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin style={{ color: "black" }} />,
      href: "https://www.linkedin.com/in/yourprofile",
    },
  ];

  return (
    <main className={styles.main}>
      {loading ? (
        <Loader />
      ) : (
        <>
       {showMeteors && <Meteors className={styles.meteor} />}
          <Navbar />
          <div className={styles.head}>
            <h1 className={styles.animatedText}>
              <span className={styles.digitalText} >{textDigital}</span>
              <span className={styles.space}> </span>
              <span className={styles.fortressText}  >{textFortress}</span>
            </h1>
          </div>
          {showMeteors &&  <div className={styles.backbutton}>
          <FaGoogle size={30}/>
            <div className={styles.buttonContainer1}>
              <button id='work' type="button" name="Hover" className={styles.iconButton}>
                <FaGoogle size={27}/>
              </button>
            </div>
          </div>}
         
          <div className={styles.Footer}>
            <h1>CREATED BY GNU/LINUX USERS' GROUP</h1>
            <FloatingDock items={socialMediaItems} />
          </div>
        </>
      )}
    </main>
  );
}
