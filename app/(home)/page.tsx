import Image from "next/image";
"use client";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import Loader from "@/components/3Dloader/Loader";
import Navbar from "@/components/Navbar/navbar";
import { FaGithub, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FloatingDock } from "@/components/floatingdock/floatingicons";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [textDigital, setTextDigital] = useState("DIGITAL");
  const [textFortress, setTextFortress] = useState("FORTRESS");

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

    const randomizeText = (txt : string) => {
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
    }, 10);
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
          <Navbar />
          <div className={styles.head}>
            <h1 className={styles.animatedText}>
              <span className={styles.digitalText}>{textDigital}</span>
              <span className={styles.space}> </span>
              <span className={styles.fortressText}>{textFortress}</span>
            </h1>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.iconButton}>
              <FaGoogle />
            </button>
          </div>
          <div className={styles.login}></div>
          <div className={styles.Footer}>
            <h1>CREATED BY GNU/LINUX USERS' GROUP</h1>
            <FloatingDock items={socialMediaItems} />
          </div>
        </>
      )}
    </main>
  );
}
