import Image from "next/image";
'use client';
import styles from './page.module.scss'
import { useRef } from 'react';
//import Header from '../../components/header';
import StickyCursor from '../../components/stickyCursor';
import Navbar from "@/components/Navbar/navbar";

export default function Home(){
  const stickyElement = useRef(null);
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  );
}

