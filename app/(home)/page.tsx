import Image from "next/image";
"use client";
import styles from "./page.module.scss";
import { useRef, useState, useEffect } from "react";
import Loader from "@/components/3Dloader/Loader";
import Navbar from "@/components/Navbar/navbar";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const stickyElement = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className={styles.head}>
            <h1>DIGITAL</h1>
            <h1>FORTRESS</h1>
          </div>

          <div className={styles.Footer}>
            <h1>CREATED BY GNU/LINUX USERS' GROUP</h1>
            <div className={styles.logos}>
            <FaSquareFacebook style={{color:"white"}}/>
            <FaGithub style={{color:"white"}}/>
            <FaInstagram style={{color:"white"}}/>
            <FaLinkedin style={{color:"white"}}/>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
